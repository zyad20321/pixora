import WallpaperGallery from "@/components/wallpaper-gallery"
import { getFeaturedWallpapers } from "@/lib/wallpapers"

export default function FeaturedPage() {
  const featuredWallpapers = getFeaturedWallpapers()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Wallpapers</h1>
      <WallpaperGallery wallpapers={featuredWallpapers} />
    </main>
  )
}

