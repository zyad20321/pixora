"use client"

import { useRef } from "react"
import Link from "next/link"
import { categories } from "@/lib/wallpapers"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categoryImages = {
  nature: "/category-images/nature.jpg",
  urban: "/category-images/urban.jpg",
  abstract: "/category-images/abstract.jpg",
  cars: "/category-images/cars.jpg",
  food: "/category-images/food.jpg",
  cartoon: "/category-images/cartoon.jpg",
  anime: "/category-images/anime.jpg",
  animals: "/category-images/animals.jpg",
  space: "/category-images/space.jpg",
  technology: "/category-images/technology.jpg",
  architecture: "/category-images/architecture.jpg",
  art: "/category-images/art.jpg",
  travel: "/category-images/travel.jpg",
  sports: "/category-images/sports.jpg",
  fashion: "/category-images/fashion.jpg",
  music: "/category-images/music.jpg",
}

export default function CategoryList() {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className="mb-4 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <h2 className="text-lg font-semibold mb-2 text-primary">{t("categories")}</h2>
      <div className="relative">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-3 w-3" />
          </Button>
        </motion.div>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              className="flex-shrink-0 w-1/5 px-1 snap-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/category/${category}`}>
                <motion.div
                  className="relative aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={categoryImages[category] || "/placeholder.svg"}
                    alt={t(category)}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-[10px] font-medium text-center px-1">{t(category)}</span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-3 w-3" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

