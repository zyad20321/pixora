import WallpaperGallery from "@/components/wallpaper-gallery"
import CategoryList from "@/components/category-list"
import { getWallpapersByCategory } from "@/lib/wallpapers"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const wallpapers = getWallpapersByCategory(params.slug)

  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold capitalize text-primary">{params.slug} Wallpapers</h1>
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Back to All
          </Link>
        </div>
        <CategoryList />
        <WallpaperGallery wallpapers={wallpapers} />
      </div>
    </PageTransition>
  )
}

