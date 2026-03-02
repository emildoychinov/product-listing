import { useState, useEffect } from "react"

const BREAKPOINTS = { sm: 480, md: 768, lg: 1024 }

function getColumns(): number {
  if (typeof window === "undefined") return 4
  const w = window.innerWidth
  if (w < BREAKPOINTS.sm) return 1
  if (w < BREAKPOINTS.md) return 2
  if (w < BREAKPOINTS.lg) return 3
  return 4
}

export function useViewportColumns(maxColumns: number = 4): number {
  const [columns, setColumns] = useState(() =>
    Math.min(getColumns(), maxColumns)
  )
  useEffect(() => {
    const update = () => setColumns((c) => {
      const next = Math.min(getColumns(), maxColumns)
      return next !== c ? next : c
    })
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [maxColumns])
  return columns
}
