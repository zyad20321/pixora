"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { wallpapers } from "@/lib/wallpapers"
import { Button } from "@/components/ui/button"
import { Heart, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function WallpaperPage() {
  const { id } = useParams()
  const { t } = useLanguage()
  const [isApplied, setIsApplied] = useState(false)

  const wallpaper = wallpapers.find((w) => w.id === Number.parseInt(id as string))

  if (!wallpaper) {
    return <div>Wallpaper not found</div>
  }

  const handleApplyWallpaper = () => {
    setIsApplied(true)
    // Simulate setting wallpaper
    setTimeout(() => {
      setIsApplied(false)
      alert(t("wallpaper_applied"))
    }, 2000)
  }

  return (
    <div className="flex flex-col items-center p-4">
      <motion.h1
        className="text-2xl font-bold mb-4 text-primary"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {wallpaper.title}
      </motion.h1>
      <div className="relative w-full max-w-sm aspect-[9/16] mb-4">
        <Image
          src={wallpaper.url || "/placeholder.svg"}
          alt={wallpaper.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <Button onClick={handleApplyWallpaper} disabled={isApplied}>
          {isApplied ? t("wallpaper_applied") : t("set_as_background")}
        </Button>
        <Button variant="outline">
          <Heart className="mr-2 h-4 w-4" />
          {t("add_to_favorites")}
        </Button>
      </div>
      <div className="flex space-x-4 mb-8">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          {t("download")}
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          {t("share")}
        </Button>
      </div>
      <div className="w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-2">{t("similar_wallpapers")}</h2>
        <div className="grid grid-cols-3 gap-2">
          {wallpapers
            .filter((w) => w.category === wallpaper.category && w.id !== wallpaper.id)
            .slice(0, 3)
            .map((w) => (
              <Link key={w.id} href={`/wallpaper/${w.id}`}>
                <div className="relative aspect-square">
                  <Image src={w.url || "/placeholder.svg"} alt={w.title} fill className="object-cover rounded-lg" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

