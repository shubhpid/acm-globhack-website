"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxAmi0zVD5nyvQ3zF5DARekAgYELUidil7E98HZS-cR4FbGhaDrxeYsqjTStKz19MKfIg/exec";

export default function ScannerPage() {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  const [user, setUser] = useState<any>(null);
  const [scannedId, setScannedId] = useState("");
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkedIn, setCheckedIn] = useState<boolean | null>(null);
  const [checkinLoading, setCheckinLoading] = useState(false);

  let lastScan = useRef(0);

  // 🟢 START SCANNER
  const startScanner = async () => {
    const scanner = new Html5Qrcode("reader");
    scannerRef.current = scanner;

    await scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      async (decodedText) => {
        if (Date.now() - lastScan.current < 2000) return;
        lastScan.current = Date.now();

        setLoading(true);
        setError("");
        setUser(null);
        setScannedId(decodedText);
        setLocked(false);
        setCheckedIn(null);

        try {
          // 1. Check if user is registered (Sheet2)
          const res2 = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
              id: decodedText,
              action: "fetch_checkedin",
            }),
          });
          const data2 = await res2.json();

          if (data2.success && data2.user) {
            setUser(data2.user);
            setCheckedIn(true);
            new Audio("/confirmed.mp3").play();
            await stopScanner();
            setLoading(false);
            return;
          }

          // 2. If not registered, pull from Sheet1
          const res1 = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
              id: decodedText,
              action: "fetch",
            }),
          });
          const data1 = await res1.json();

          if (data1.success && data1.user) {
            setUser(data1.user);
            setCheckedIn(false);
            new Audio("/confirmed.mp3").play();
            await stopScanner();
            setLoading(false);
            return;
          }

          setError("User not found");
          setUser(null);
          setCheckedIn(null);
        } catch (err) {
          console.error(err);
          setError("Request failed");
        }

        setLoading(false);
      },
      () => {}
    );
  };

  // 🛑 STOP SCANNER
  const stopScanner = async () => {
    if (scannerRef.current) {
      try {
        await scannerRef.current.stop();
        await scannerRef.current.clear();
      } catch {}
    }
  };

  // 🔁 INIT ON LOAD
  useEffect(() => {
    startScanner();
    return () => {
      stopScanner();
    };
  }, []);

  // ✅ CONFIRM MEAL
  const confirmMeal = async () => {
    if (locked || !scannedId) return;

    setLocked(true);

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          id: scannedId,
          action: "decrement",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setUser((prev: any) => ({
          ...prev,
          meals_left: data.meals_left,
        }));
      } else {
        setError(data.error);
      }
    } catch (err) {
      console.error(err);
      setError("Request failed");
    }
  };

  // 🔄 RESET SCANNER
  const resetScanner = async () => {
    setUser(null);
    setScannedId("");
    setError("");
    setLocked(false);
    setLoading(false);
    setCheckedIn(null);
    setCheckinLoading(false);

    await stopScanner();
    await startScanner();
  };

  // 🟢 CHECK-IN PARTICIPANT
  const checkInParticipant = async () => {
    if (!user || !scannedId) return;
    setCheckinLoading(true);
    setError("");
    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          id: scannedId,
          action: "checkin",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setCheckedIn(true);
      } else {
        setError(data.error || "Check-in failed");
      }
    } catch (err) {
      setError("Check-in failed");
    }
    setCheckinLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-6 gap-4">
      <h1 className="text-xl font-bold">GlobeHack Scanner</h1>

      <div id="reader" style={{ width: "300px" }} />

      {loading && <p>Scanning...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="p-4 border rounded w-[320px] space-y-1">
          <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Major:</strong> {user.major}
          </p>
          <p>
            <strong>Diet:</strong> {user.dietary_preference}
          </p>
          <p>
            <strong>Other:</strong> {user.dietary_other}
          </p>

          {/* CHECK-IN STATUS */}
          {checkedIn !== null && (
            <p className="text-green-600 font-semibold">
              {checkedIn ? <p className="text-green-600 font-semibold">User checked in</p> : <p className="text-red-400 font-semibold">User not checked in</p>}
            </p>
          )}

          {/* If registered (checkedIn) show meals left and confirm meal */}
          {checkedIn && (
            <>
              <p>
                <strong>Meals Left:</strong> {user.meals_left}
              </p>
              <button
                onClick={confirmMeal}
                disabled={locked}
                className="
                  mt-3 w-full py-2 rounded-xl text-white font-semibold
                  bg-amber-500 shadow-lg shadow-amber-400/60
                  hover:bg-amber-600 transition
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
              >
                {locked ? "Confirmed" : "Confirm Meal"}
              </button>
            </>
          )}

          {/* If not registered, show check-in button */}
          {!checkedIn && checkedIn !== null && (
            <button
              onClick={checkInParticipant}
              disabled={checkinLoading}
              className="
                mt-3 w-full py-2 rounded-xl text-white font-semibold
                bg-green-600 shadow-lg shadow-green-400/60
                hover:bg-green-700 transition
                disabled:opacity-50 disabled:cursor-not-allowed
              "
            >
              {checkinLoading ? "Checking In..." : "Check - In Participant"}
            </button>
          )}

          {/* RESET */}
          <button
            onClick={resetScanner}
            className="
              mt-2 w-full py-2 rounded-xl text-white font-semibold
              bg-sky-500 shadow-lg shadow-sky-400/60
              hover:bg-sky-600 transition
            "
          >
            Reset Scanner
          </button>
        </div>
      )}
    </div>
  );
}