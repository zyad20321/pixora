import WallpaperGallery from "@/components/wallpaper-gallery"
import { wallpapers } from "@/lib/wallpapers"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

export default function FavoritesPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">My Favorite Wallpapers</h1>
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Back to All
          </Link>
        </div>
        <WallpaperGallery wallpapers={wallpapers} showFavoritesOnly={true} />
      </div>
    </PageTransition>
  )
}

