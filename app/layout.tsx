import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "@/lib/theme-context"
import { LanguageProvider } from "@/lib/language-context"
import { SettingsProvider } from "@/lib/settings-context"
import { AnimatePresence } from "framer-motion"
import type React from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wallpaper Haven",
  description: "Discover and set beautiful wallpapers for your phone",
    generator: 'v0.dev'
}

function BackButton() {
  const router = useRouter()
  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()} className="mr-2">
      <ArrowLeft className="w-5 h-5" />
    </Button>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          <LanguageProvider>
            <SettingsProvider>
              <div className="flex flex-col min-h-screen max-w-md mx-auto">
                <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b">
                  <div className="px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                      <BackButton />
                      <Link href="/" className="flex items-center">
                        <Home className="w-5 h-5 mr-2" />
                        <span className="text-lg font-semibold text-primary">Wallpaper Haven</span>
                      </Link>
                    </div>
                    <Link href="/settings" className="flex items-center">
                      <Button variant="ghost" size="icon">
                        <Settings className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </header>
                <main className="flex-grow px-4 py-6">
                  <AnimatePresence mode="wait" initial={false}>
                    {children}
                  </AnimatePresence>
                </main>
                <footer className="bg-background/80 backdrop-blur-sm border-t mt-auto">
                  <div className="px-4 py-3 text-center text-xs text-muted-foreground">
                    © 2023 Wallpaper Haven. All rights reserved.
                  </div>
                </footer>
                {/* Ad placeholder */}
                <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 text-center text-sm">
                  Ad Space
                </div>
              </div>
            </SettingsProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'