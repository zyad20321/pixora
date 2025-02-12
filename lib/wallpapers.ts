export interface Wallpaper {
  id: number
  title: string
  url: string
  category: string
}

export const wallpapers: Wallpaper[] = [
  // Nature Category
  {
    id: 1,
    title: "Mountain Sunrise",
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "nature",
  },
  {
    id: 2,
    title: "Serene Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "nature",
  },
  {
    id: 3,
    title: "Autumn Forest",
    url: "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "nature",
  },
  {
    id: 4,
    title: "Tranquil Lake",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "nature",
  },
  {
    id: 5,
    title: "Misty Mountains",
    url: "https://images.unsplash.com/photo-1491904768633-2b7fbc509881?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "nature",
  },

  // Urban Category
  {
    id: 6,
    title: "Neon City",
    url: "https://images.unsplash.com/photo-1545858745-3f7c8fb3b804?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "urban",
  },
  {
    id: 7,
    title: "Futuristic Architecture",
    url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "urban",
  },
  {
    id: 8,
    title: "Night Skyline",
    url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "urban",
  },
  {
    id: 9,
    title: "City Lights",
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "urban",
  },
  {
    id: 10,
    title: "Urban Sunset",
    url: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "urban",
  },

  // Abstract Category
  {
    id: 11,
    title: "Colorful Abstract",
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "abstract",
  },
  {
    id: 12,
    title: "Geometric Patterns",
    url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "abstract",
  },
  {
    id: 13,
    title: "Vibrant Gradient",
    url: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "abstract",
  },
  {
    id: 14,
    title: "Fluid Art",
    url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "abstract",
  },
  {
    id: 15,
    title: "Neon Lights",
    url: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "abstract",
  },

  // Cars Category
  {
    id: 16,
    title: "Classic Muscle Car",
    url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "cars",
  },
  {
    id: 17,
    title: "Sleek Sports Car",
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "cars",
  },
  {
    id: 18,
    title: "Vintage Automobile",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "cars",
  },
  {
    id: 19,
    title: "Futuristic Concept Car",
    url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "cars",
  },
  {
    id: 20,
    title: "Racing Car",
    url: "https://images.unsplash.com/photo-1517672651691-24622a91b550?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "cars",
  },

  // Food Category
  {
    id: 21,
    title: "Colorful Sushi",
    url: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1350&q=80",
    category: "food",
  },
  {
    id: 22,
    title: "Fresh Fruits",
    url: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1350&q=80",
    category: "food",
  },
  {
    id: 23,
    title: "Gourmet Burger",
    url: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=1350&q=80",
    category: "food",
  },
  {
    id: 24,
    title: "Artisan Coffee",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1350&q=80",
    category: "food",
  },
  {
    id: 25,
    title: "Decadent Dessert",
    url: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1350&q=80",
    category: "food",
  },

  // Cartoon Category
  {
    id: 26,
    title: "Cute Cartoon Characters",
    url: "https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration_138676-2769.jpg?w=1380&t=st=1690243283~exp=1690243883~hmac=6b15c7f3a4f1459dc43774d8069d490705e9f6e10e3f4f7e5c2b1d0b9df71c6c",
    category: "cartoon",
  },
  {
    id: 27,
    title: "Animated Landscape",
    url: "https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=1380&t=st=1690243321~exp=1690243921~hmac=7e75f4f70bd61c1b4697f0d3e0a00c8c5f7c2ca0b9d0f1d4f8e1c3e9d4b3e3e3",
    category: "cartoon",
  },
  {
    id: 28,
    title: "Funny Animal Cartoon",
    url: "https://img.freepik.com/free-vector/cute-sloth-yoga-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3318.jpg?w=1380&t=st=1690243349~exp=1690243949~hmac=5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c5c",
    category: "cartoon",
  },
  {
    id: 29,
    title: "Superhero Cartoon",
    url: "https://img.freepik.com/free-vector/hand-drawn-cartoon-superhero-collection_23-2149860156.jpg?w=1380&t=st=1690243382~exp=1690243982~hmac=2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
    category: "cartoon",
  },
  {
    id: 30,
    title: "Fantasy Cartoon World",
    url: "https://img.freepik.com/free-vector/cartoon-fantasy-landscape-with-castle_107791-7310.jpg?w=1380&t=st=1690243414~exp=1690244014~hmac=3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f",
    category: "cartoon",
  },

  // Anime Category
  {
    id: 31,
    title: "Anime Girl",
    url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1350&q=80",
    category: "anime",
  },
  {
    id: 32,
    title: "Anime Landscape",
    url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=1350&q=80",
    category: "anime",
  },
  {
    id: 33,
    title: "Anime City",
    url: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1350&q=80",
    category: "anime",
  },
  {
    id: 34,
    title: "Anime Character",
    url: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?auto=format&fit=crop&w=1350&q=80",
    category: "anime",
  },
  {
    id: 35,
    title: "Anime Sky",
    url: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?auto=format&fit=crop&w=1350&q=80",
    category: "anime",
  },

  // Animals Category
  {
    id: 36,
    title: "Majestic Lion",
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1350&q=80",
    category: "animals",
  },
  {
    id: 37,
    title: "Cute Panda",
    url: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=1350&q=80",
    category: "animals",
  },
  {
    id: 38,
    title: "Colorful Parrot",
    url: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1350&q=80",
    category: "animals",
  },
  {
    id: 39,
    title: "Playful Dolphin",
    url: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?auto=format&fit=crop&w=1350&q=80",
    category: "animals",
  },
  {
    id: 40,
    title: "Majestic Eagle",
    url: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?auto=format&fit=crop&w=1350&q=80",
    category: "animals",
  },
  // Add more wallpapers here, about 500 in total across all categories
  {
    id: 501,
    title: "Serene Mountain Lake",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "nature",
  },
  {
    id: 502,
    title: "Vibrant City Lights",
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1080&h=1920&q=80",
    category: "urban",
  },
]

export const categories = [
  "nature",
  "urban",
  "abstract",
  "cars",
  "food",
  "cartoon",
  "anime",
  "animals",
  "space",
  "technology",
  "architecture",
  "art",
  "travel",
  "sports",
  "fashion",
  "music",
]

export function getWallpapersByCategory(category: string): Wallpaper[] {
  return wallpapers.filter((w) => w.category === category)
}

