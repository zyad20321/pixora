"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface SettingsContextType {
  gridView: boolean
  setGridView: (value: boolean) => void
  autoplaySlideshow: boolean
  setAutoplaySlideshow: (value: boolean) => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [gridView, setGridView] = useState(true)
  const [autoplaySlideshow, setAutoplaySlideshow] = useState(false)

  useEffect(() => {
    const savedGridView = localStorage.getItem("gridView")
    if (savedGridView !== null) {
      setGridView(JSON.parse(savedGridView))
    }
    const savedAutoplaySlideshow = localStorage.getItem("autoplaySlideshow")
    if (savedAutoplaySlideshow !== null) {
      setAutoplaySlideshow(JSON.parse(savedAutoplaySlideshow))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("gridView", JSON.stringify(gridView))
  }, [gridView])

  useEffect(() => {
    localStorage.setItem("autoplaySlideshow", JSON.stringify(autoplaySlideshow))
  }, [autoplaySlideshow])

  return (
    <SettingsContext.Provider value={{ gridView, setGridView, autoplaySlideshow, setAutoplaySlideshow }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider")
  }
  return context
}

