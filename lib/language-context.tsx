"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "fr" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    app_name: "Wallpaper Haven",
    my_favorites: "My Favorites",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    dark_mode: "Dark Mode",
    light_mode: "Light Mode",
    search_placeholder: "Search wallpapers...",
    set_as_background: "Set as Background",
    wallpaper_applied: "Wallpaper Applied!",
    preview: "Preview",
    discover_wallpapers: "Discover Beautiful Wallpapers",
    categories: "Categories",
    nature: "Nature",
    urban: "Urban",
    abstract: "Abstract",
    cars: "Cars",
    food: "Food",
    cartoon: "Cartoon",
    anime: "Anime",
    animals: "Animals",
    space: "Space",
    technology: "Technology",
    architecture: "Architecture",
    art: "Art",
    travel: "Travel",
    sports: "Sports",
    fashion: "Fashion",
    music: "Music",
    sort_by: "Sort By",
    default: "Default",
    title: "Title",
    category: "Category",
    view_mode: "View Mode",
    grid_view: "Grid View",
    list_view: "List View",
    autoplay_slideshow: "Autoplay Slideshow",
    on: "On",
    off: "Off",
    toggle_view_mode: "Toggle View Mode",
    toggle_autoplay_slideshow: "Toggle Autoplay Slideshow",
    back: "Back",
    similar_wallpapers: "Similar Wallpapers",
    add_to_favorites: "Add to Favorites",
    download: "Download",
    share: "Share",
  },
  fr: {
    app_name: "Paradis des Fonds d'Écran",
    my_favorites: "Mes Favoris",
    settings: "Paramètres",
    theme: "Thème",
    language: "Langue",
    dark_mode: "Mode Sombre",
    light_mode: "Mode Clair",
    search_placeholder: "Rechercher des fonds d'écran...",
    set_as_background: "Définir comme Fond d'Écran",
    wallpaper_applied: "Fond d'Écran Appliqué !",
    preview: "Aperçu",
    discover_wallpapers: "Découvrez de Magnifiques Fonds d'Écran",
    categories: "Catégories",
    nature: "Nature",
    urban: "Urbain",
    abstract: "Abstrait",
    cars: "Voitures",
    food: "Nourriture",
    cartoon: "Dessin Animé",
    anime: "Anime",
    animals: "Animaux",
    space: "Espace",
    technology: "Technologie",
    architecture: "Architecture",
    art: "Art",
    travel: "Voyage",
    sports: "Sports",
    fashion: "Mode",
    music: "Musique",
    sort_by: "Trier par",
    default: "Défaut",
    title: "Titre",
    category: "Catégorie",
    view_mode: "Mode d'affichage",
    grid_view: "Vue Grille",
    list_view: "Vue Liste",
    autoplay_slideshow: "Diaporama automatique",
    on: "Activé",
    off: "Désactivé",
    toggle_view_mode: "Basculer le mode d'affichage",
    toggle_autoplay_slideshow: "Basculer le diaporama automatique",
    back: "Retour",
    similar_wallpapers: "Fonds d'écran similaires",
    add_to_favorites: "Ajouter aux favoris",
    download: "Télécharger",
    share: "Partager",
  },
  ar: {
    app_name: "عالم الخلفيات",
    my_favorites: "المفضلة لدي",
    settings: "الإعدادات",
    theme: "المظهر",
    language: "اللغة",
    dark_mode: "الوضع الداكن",
    light_mode: "الوضع الفاتح",
    search_placeholder: "ابحث عن خلفيات...",
    set_as_background: "تعيين كخلفية",
    wallpaper_applied: "تم تطبيق الخلفية!",
    preview: "معاينة",
    discover_wallpapers: "اكتشف خلفيات رائعة",
    categories: "الفئات",
    nature: "الطبيعة",
    urban: "المدينة",
    abstract: "تجريدي",
    cars: "سيارات",
    food: "طعام",
    cartoon: "رسوم متحركة",
    anime: "أنمي",
    animals: "حيوانات",
    space: "الفضاء",
    technology: "التكنولوجيا",
    architecture: "هندسة معمارية",
    art: "فن",
    travel: "سفر",
    sports: "رياضة",
    fashion: "موضة",
    music: "موسيقى",
    sort_by: "ترتيب حسب",
    default: "الافتراضي",
    title: "العنوان",
    category: "الفئة",
    view_mode: "وضع العرض",
    grid_view: "عرض شبكي",
    list_view: "عرض القائمة",
    autoplay_slideshow: "عرض الشرائح التلقائي",
    on: "تشغيل",
    off: "إيقاف",
    toggle_view_mode: "تبديل وضع العرض",
    toggle_autoplay_slideshow: "تبديل العرض التلقائي للشرائح",
    back: "رجوع",
    similar_wallpapers: "خلفيات مشابهة",
    add_to_favorites: "إضافة إلى المفضلة",
    download: "تنزيل",
    share: "مشاركة",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("language", language)
    document.documentElement.lang = language
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  const t = (key: string) => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

