#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const git = require('isomorphic-git');
const http = require('isomorphic-git/http/node');

const dir = process.cwd();
const remoteUrl = process.env.GIT_REMOTE || process.argv[2];
const token = process.env.GH_TOKEN;
// branch will be determined at runtime: prefer GH_BRANCH, else detect current branch
let branch = process.env.GH_BRANCH || null;

if (!remoteUrl) {
  console.error('Remote URL required: set GIT_REMOTE or pass as first arg.');
  process.exit(1);
}
if (!token) {
  console.error('GitHub token required in GH_TOKEN environment variable.');
  process.exit(1);
}

async function addAllFiles() {
  async function walk(currDir) {
    const entries = fs.readdirSync(currDir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(currDir, e.name);
      const rel = path.relative(dir, full).replace(/\\/g, '/');
      if (!rel) continue;
      if (rel.split('/')[0] === '.git') continue;
      if (rel.split('/')[0] === 'node_modules') continue;
      if (rel.split('/')[0] === '.next') continue;
      if (e.isDirectory()) await walk(full);
      else if (e.isFile()) {
        await git.add({ fs, dir, filepath: rel });
      }
    }
  }
  await walk(dir);
}

async function run() {
  try {
    await git.init({ fs, dir });

    await addAllFiles();

    const sha = await git.commit({
      fs,
      dir,
      message: 'Initial commit (pushed via script)',
      author: { name: 'ACM Bot', email: 'acm-bot@example.com' }
    });
    console.log('Committed:', sha);

    // add or update remote
    try {
      await git.getConfig({ fs, dir, path: 'remote.origin.url' });
      await git.setConfig({ fs, dir, path: 'remote.origin.url', value: remoteUrl });
    } catch (e) {
      await git.addRemote({ fs, dir, remote: 'origin', url: remoteUrl, force: true });
    }

    // determine branch if not provided
    if (!branch) {
      try {
        branch = await git.currentBranch({ fs, dir, fullname: false }) || 'main';
      } catch (e) {
        branch = 'main';
      }
    }

    console.log('Pushing to', remoteUrl, 'branch', branch);
    await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: branch,
      onAuth: () => ({ username: 'x-access-token', password: token })
    });

    console.log('Push complete.');
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exit(1);
  }
}

run();
