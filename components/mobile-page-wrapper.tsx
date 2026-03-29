"use client"

import { useEffect, useState } from "react"

interface MobilePageWrapperProps {
  desktop: React.ReactNode
  mobile: React.ReactNode
}

/**
 * Renders the desktop layout on md+ screens and the mobile layout on smaller screens.
 * Both are rendered server-side; only one is visible via CSS.
 * This avoids hydration mismatches while keeping each version independently editable.
 */
export function MobilePageWrapper({ desktop, mobile }: MobilePageWrapperProps) {
  return (
    <>
      <div className="hidden md:block">{desktop}</div>
      <div className="block md:hidden">{mobile}</div>
    </>
  )
}
