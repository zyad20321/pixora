"use client"
import { Moon, Sun, Globe, Grid, List, PlayCircle, PauseCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/lib/theme-context"
import { useLanguage } from "@/lib/language-context"
import { useSettings } from "@/lib/settings-context"
import { motion } from "framer-motion"

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const { gridView, setGridView, autoplaySlideshow, setAutoplaySlideshow } = useSettings()

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
      <motion.h1 className="text-2xl font-bold" variants={itemVariants}>
        {t("settings")}
      </motion.h1>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold mb-2">{t("theme")}</h2>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button onClick={toggleTheme} className="w-full justify-start">
            {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
            {theme === "light" ? t("dark_mode") : t("light_mode")}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold mb-2">{t("language")}</h2>
        <div className="space-y-2">
          {languages.map((lang) => (
            <motion.div key={lang.code} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => setLanguage(lang.code as "en" | "fr" | "ar")}
                className={`w-full justify-start ${language === lang.code ? "bg-primary text-primary-foreground" : ""}`}
              >
                <Globe className="mr-2 h-4 w-4" />
                {lang.name}
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold mb-2">{t("view_mode")}</h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            {gridView ? <Grid className="mr-2 h-4 w-4" /> : <List className="mr-2 h-4 w-4" />}
            {gridView ? t("grid_view") : t("list_view")}
          </span>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Switch checked={gridView} onCheckedChange={setGridView} aria-label={t("toggle_view_mode")} />
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-semibold mb-2">{t("autoplay_slideshow")}</h2>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            {autoplaySlideshow ? <PlayCircle className="mr-2 h-4 w-4" /> : <PauseCircle className="mr-2 h-4 w-4" />}
            {autoplaySlideshow ? t("on") : t("off")}
          </span>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Switch
              checked={autoplaySlideshow}
              onCheckedChange={setAutoplaySlideshow}
              aria-label={t("toggle_autoplay_slideshow")}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

