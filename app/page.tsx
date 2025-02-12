"use client"

import { useState, useEffect } from "react"
import WallpaperGallery from "@/components/wallpaper-gallery"
import CategoryList from "@/components/category-list"
import { wallpapers } from "@/lib/wallpapers"
import PageTransition from "@/components/page-transition"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Shuffle } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("default")
  const [filteredWallpapers, setFilteredWallpapers] = useState(wallpapers)

  useEffect(() => {
    const filtered = wallpapers.filter(
      (wallpaper) =>
        wallpaper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        wallpaper.category.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title)
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category)
      }
      return 0
    })

    setFilteredWallpapers(sorted)
  }, [searchQuery, sortBy])

  const getRandomWallpaper = () => {
    const randomIndex = Math.floor(Math.random() * filteredWallpapers.length)
    const randomWallpaper = filteredWallpapers[randomIndex]
    // You can implement the logic to set this wallpaper or navigate to its detail page
    console.log("Random wallpaper:", randomWallpaper)
  }

  return (
    <PageTransition>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-6 text-primary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("discover_wallpapers")}
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Input
            type="text"
            placeholder={t("search_placeholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t("sort_by")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">{t("default")}</SelectItem>
              <SelectItem value="title">{t("title")}</SelectItem>
              <SelectItem value="category">{t("category")}</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={getRandomWallpaper} className="w-full sm:w-auto">
            <Shuffle className="mr-2 h-4 w-4" />
            {t("random_wallpaper")}
          </Button>
        </motion.div>
        <CategoryList />
        <WallpaperGallery wallpapers={filteredWallpapers} />
      </motion.div>
    </PageTransition>
  )
}

