"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import type { Wallpaper } from "@/lib/wallpapers"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "react-intersection-observer"
import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface WallpaperGalleryProps {
  wallpapers: Wallpaper[]
  showFavoritesOnly?: boolean
}

export default function WallpaperGallery({ wallpapers, showFavoritesOnly = false }: WallpaperGalleryProps) {
  const [favorites, setFavorites] = useState<number[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites")
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const toggleFavorite = (id: number, event?: React.MouseEvent) => {
    event?.preventDefault()
    const newFavorites = favorites.includes(id) ? favorites.filter((favId) => favId !== id) : [...favorites, id]
    setFavorites(newFavorites)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  const displayedWallpapers = showFavoritesOnly ? wallpapers.filter((w) => favorites.includes(w.id)) : wallpapers

  return (
    <AnimatePresence>
      <motion.div
        className="grid grid-cols-2 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {displayedWallpapers.map((wallpaper, index) => (
          <WallpaperItem
            key={wallpaper.id}
            wallpaper={wallpaper}
            index={index}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            t={t}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

function WallpaperItem({ wallpaper, index, favorites, toggleFavorite, t }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSetWallpaper = (event: React.MouseEvent) => {
    event.preventDefault()
    // Simulate setting wallpaper
    alert(t("wallpaper_set_success"))
  }

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/wallpaper/${wallpaper.id}`}>
        <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <Image
            src={wallpaper.url || "/placeholder.svg"}
            alt={wallpaper.title}
            fill
            className="object-cover transform transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2">
            <p className="text-white text-xs font-medium truncate mb-2">{wallpaper.title}</p>
            <div className="flex justify-between">
              <Button size="sm" variant="secondary" className="text-xs px-2 py-1" onClick={handleSetWallpaper}>
                {t("set_wallpaper")}
              </Button>
              <Button
                size="sm"
                variant="secondary"
                className="text-xs px-2 py-1"
                onClick={(e) => toggleFavorite(wallpaper.id, e)}
              >
                <Heart className={`h-3 w-3 ${favorites.includes(wallpaper.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

