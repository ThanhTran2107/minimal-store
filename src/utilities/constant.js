// API get locations in Vietnam
export const PROVINCES_API = "https://provinces.open-api.vn/api/p/";

export const DISTRICTS_API = (provinceCode) =>
  `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`;

export const WARDS_API = (districtCode) =>
  `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`;

export const VIETNAMESE_CURRENCY = "₫";
export const PROMOCODE = "SALE50";
export const DURATION_NOTIFICATION = 1;
export const SHIPPING_FEE = 45000;
export const SHIPPING_FEE_FREE = 7000000;

// Mock data
export const PRODUCTS = [
  {
    id: 1,
    title: "Aero Chair",
    price: 3119760,
    rating: 4.5,
    image: "https://i.ibb.co/gM0kxkNf/Aero-L-Parma-1.webp",
    category: "Furniture",
    brand: "Nord",
    description:
      "The Aero Chair combines modern design with maximum comfort. Perfect for your living room, bedroom, or office, its ergonomic shape supports your back and posture while adding a stylish touch to any space.",
  },
  {
    id: 2,
    title: "Lumen Lamp",
    price: 2136000,
    rating: 4.2,
    image: "https://i.ibb.co/KzwY3dNq/lumenlamp.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Illuminate your space with the Lumen Lamp, a modern LED fixture offering adjustable brightness and warm white light. Ideal for reading, working, or creating a cozy atmosphere in your home.",
  },
  {
    id: 3,
    title: "Slate Headphones",
    price: 4776000,
    rating: 4.7,
    image: "https://i.ibb.co/jkT62nk1/slateheadphones.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Experience immersive sound with Slate Headphones. Featuring high-fidelity audio, deep bass, and comfortable ear cushions, these headphones are perfect for music enthusiasts, gamers, and anyone who values premium audio quality.",
  },
  {
    id: 4,
    title: "Nest Mug",
    price: 477600,
    rating: 4.1,
    image: "https://i.ibb.co/Sw6yy5QB/nest-mug.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "Enjoy your favorite beverages in style with the Nest Mug. Made from high-quality ceramic, it keeps drinks warm longer and is perfect for coffee, tea, or hot chocolate. Its minimalist design fits any kitchen décor.",
  },
  {
    id: 5,
    title: "Frame Sunglasses",
    price: 1428000,
    rating: 4.0,
    image: "https://i.ibb.co/mVqZjmr4/framesunglasses.webp",
    category: "Accessories",
    brand: "Frame",
    description:
      "Protect your eyes while looking stylish with Frame Sunglasses. Offering 100% UV protection and a modern design, they are perfect for daily wear, outdoor adventures, and travel, combining fashion and functionality.",
  },
  {
    id: 6,
    title: "Mono Backpack",
    price: 2157600,
    rating: 4.4,
    image: "https://i.ibb.co/8LH3QhQm/monobackpack.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "The Mono Backpack is designed for durability and versatility. With multiple compartments and a sleek design, it is perfect for work, school, travel, or daily use. Comfortable straps make it easy to carry even heavy loads.",
  },
  {
    id: 7,
    title: "Nord Sofa",
    price: 11999760,
    rating: 4.6,
    image:
      "https://i.ibb.co/QjM7c6yF/Envelop-yourself-in-mod-luxury-with-the-plush-and.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "A spacious and stylish sofa designed for ultimate relaxation. Upholstered with premium fabric for durability and comfort.",
  },
  {
    id: 8,
    title: "Nord Coffee Table",
    price: 3599760,
    rating: 4.3,
    image: "https://i.ibb.co/tT103gzb/e1722126-b2a7-4bd1-bd17-8e1dcbf60ed0.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "A minimalist coffee table that blends seamlessly into any living room setting, made with solid wood and a smooth finish.",
  },
  {
    id: 9,
    title: "Lumen Pendant Light",
    price: 3108000,
    rating: 4.2,
    image:
      "https://i.ibb.co/GQLggzym/Linear-modern-and-technical-that-is-the-height.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Elegant pendant light with adjustable height, perfect for dining rooms, kitchens, and living spaces.",
  },
  {
    id: 10,
    title: "Slate Earbuds",
    price: 1919760,
    rating: 4.3,
    image:
      "https://i.ibb.co/hRLbJTMs/Jlab-Go-Air-Pop-True-Wireless-Bluetooth-Earbuds.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Compact wireless earbuds with noise cancellation and crystal-clear sound. Perfect for workouts and commutes.",
  },
  {
    id: 11,
    title: "Nest Plate Set",
    price: 959760,
    rating: 4.1,
    image:
      "https://i.ibb.co/svRgbT6c/Food-Network-Oval-Nested-Serving-Bowls-Set-of-3.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "A durable ceramic plate set, ideal for everyday dining or special occasions.",
  },
  {
    id: 12,
    title: "Frame Watch",
    price: 3816000,
    rating: 4.4,
    image: "https://i.ibb.co/jqq82Gh/54586059-f677-437a-a1fe-b7b80713348b.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "A sleek wristwatch designed with a modern minimalist style. Water-resistant and perfect for both casual and formal wear.",
  },
  {
    id: 13,
    title: "Mono Laptop Bag",
    price: 1679760,
    rating: 4.5,
    image: "https://i.ibb.co/yBPcMnBr/Elegant-Functional-Timeless.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Durable laptop bag with padded compartments to keep your devices safe while on the go.",
  },
  {
    id: 14,
    title: "Nord Dining Table",
    price: 7199760,
    rating: 4.6,
    image:
      "https://i.ibb.co/5WZKgmd5/Set-of-Bolia-Dining-Table-Nord-bolia-furniture.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "A spacious wooden dining table that comfortably seats six people. Perfect for family meals and gatherings.",
  },
  {
    id: 15,
    title: "Lumen Desk Lamp",
    price: 1439760,
    rating: 4.2,
    image:
      "https://i.ibb.co/SDwFgV1s/ad-Clamp-Table-Lamp-Desk-Led-Light-Touch-Dimming.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Compact desk lamp with adjustable brightness. Ideal for study or office use.",
  },
  {
    id: 16,
    title: "Slate Speaker",
    price: 3599760,
    rating: 4.5,
    image: "https://i.ibb.co/Pzs4r0MY/image.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Portable Bluetooth speaker with rich sound and deep bass. Long-lasting battery for up to 12 hours of playtime.",
  },
  {
    id: 17,
    title: "Nest Kettle",
    price: 1199760,
    rating: 4.3,
    image:
      "https://i.ibb.co/Zp4K2mpG/Discover-the-Morphy-Richards-Cassini-1-7-L-Jug.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "Electric kettle with a fast boil function and automatic shut-off safety feature.",
  },
  {
    id: 18,
    title: "Frame Wallet",
    price: 959760,
    rating: 4.2,
    image: "https://i.ibb.co/XxDD6Cc9/b730bf0e-c233-4e7e-8905-0802dd601ac6.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "Slim leather wallet with multiple compartments for cards and cash. Minimalist design and premium quality.",
  },
  {
    id: 19,
    title: "Mono Travel Backpack",
    price: 2639760,
    rating: 4.7,
    image:
      "https://i.ibb.co/Wpffs2j3/This-multipurpose-backpack-is-perfect-for-everyday.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Spacious travel backpack with multiple compartments and ergonomic straps for maximum comfort.",
  },
  {
    id: 20,
    title: "Nord Bookshelf",
    price: 4799760,
    rating: 4.4,
    image:
      "https://i.ibb.co/SXpQBNtv/Oak-Solid-Wood-Bookshelf-Modern-Simple-Study-Rack.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "Stylish wooden bookshelf with multiple shelves for books, décor, and storage.",
  },
  {
    id: 21,
    title: "Lumen Wall Lamp",
    price: 1800000,
    rating: 4.2,
    image: "https://i.ibb.co/3yVXDVKm/53c808a8-64b8-4ae6-9024-ea31cda37b83.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Wall-mounted lamp that adds a warm glow to hallways, bedrooms, or living areas.",
  },
  {
    id: 22,
    title: "Slate Gaming Headset",
    price: 5496000,
    rating: 4.8,
    image:
      "https://i.ibb.co/zHQJZwhn/Logitech-Astro-A20-Wireless-Gaming-Headset-PS5.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "High-performance gaming headset with surround sound and noise-canceling microphone.",
  },
  {
    id: 23,
    title: "Nest Cutting Board",
    price: 600000,
    rating: 4.1,
    image: "https://i.ibb.co/0yR1F6xC/af9ddfa1-285e-46ea-b938-db0b43efd7b6.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "Durable wooden cutting board perfect for meal prep and serving.",
  },
  {
    id: 24,
    title: "Frame Belt",
    price: 1080000,
    rating: 4.0,
    image:
      "https://i.ibb.co/MkM8fCD8/Pull-it-all-together-with-this-classic-leather.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "Stylish leather belt with a modern buckle design. Suitable for both casual and formal wear.",
  },
  {
    id: 25,
    title: "Mono Duffel Bag",
    price: 3096000,
    rating: 4.6,
    image: "https://i.ibb.co/hJWkVrbL/62c8255f-dab3-4506-b9f1-742e62ee939b.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Spacious duffel bag with reinforced handles, ideal for gym, travel, or weekend trips.",
  },
  {
    id: 26,
    title: "Nord Recliner Chair",
    price: 9576000,
    rating: 4.5,
    image:
      "https://i.ibb.co/wNKx3DjP/Leather-Recliner-Chairs-Nordic-60-Berkowitz.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "Comfortable recliner chair with adjustable positions for relaxation and reading.",
  },
  {
    id: 27,
    title: "Lumen Floor Lamp",
    price: 3336000,
    rating: 4.3,
    image:
      "https://i.ibb.co/Gv3DwpKL/Brightech-Sky-LED-Torchiere-Super-Bright-Floor.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Tall floor lamp providing ambient light, perfect for modern interiors.",
  },
  {
    id: 28,
    title: "Slate Soundbar",
    price: 5976000,
    rating: 4.7,
    image:
      "https://i.ibb.co/XdsXZyc/LG-Electronics-SH2-2-1-Channel-100-W-Sound-Bar.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Premium soundbar delivering cinema-quality audio for your TV and home entertainment system.",
  },
  {
    id: 29,
    title: "Nest Cooking Pot",
    price: 1416000,
    rating: 4.3,
    image:
      "https://i.ibb.co/1JLhrFM4/Designed-in-Japan-the-convertible-Home-Camp.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "Stainless steel cooking pot with a glass lid, suitable for all stovetops.",
  },
  {
    id: 30,
    title: "Frame Necklace",
    price: 2136000,
    rating: 4.4,
    image: "https://i.ibb.co/mC75L7JZ/5e387c87-6188-48fe-8fc5-1b943b3c7cc2.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "Elegant necklace with a modern pendant design. A perfect gift for special occasions.",
  },
  {
    id: 31,
    title: "Mono Messenger Bag",
    price: 1896000,
    rating: 4.5,
    image:
      "https://i.ibb.co/PZtSSzMP/Die-MONO-Stealth-Relay-Messenger-Bag-kombiniert.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Stylish messenger bag designed for professionals and students. Fits laptops up to 15 inches.",
  },
  {
    id: 32,
    title: "Nord Wardrobe",
    price: 13176000,
    rating: 4.6,
    image: "https://i.ibb.co/HfDBm5gM/c00e0bb4-188b-4c0c-a572-1b85dd9ab088.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "Spacious wardrobe with multiple compartments and a sleek modern design.",
  },
  {
    id: 33,
    title: "Lumen Table Lamp",
    price: 1560000,
    rating: 4.2,
    image: "https://i.ibb.co/0j2wg1cb/3217e41f-a46f-477d-ad6c-0be01cac3132.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Table lamp with adjustable arm and warm LED lighting for desks and bedside tables.",
  },
  {
    id: 34,
    title: "Slate Portable Speaker",
    price: 2376000,
    rating: 4.5,
    image:
      "https://i.ibb.co/LDhggNjC/Vifa-Oslo-Bluetooth-Speaker-Nordic-Design.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Compact wireless speaker with powerful bass, ideal for outdoor use.",
  },
  {
    id: 35,
    title: "Nest Utensil Set",
    price: 696000,
    rating: 4.1,
    image:
      "https://i.ibb.co/cKDB9TPz/Looking-for-a-dependable-camp-mess-kit-for-all.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "A set of essential kitchen utensils made from durable materials for daily cooking.",
  },
  {
    id: 36,
    title: "Frame Bracelet",
    price: 1176000,
    rating: 4.2,
    image:
      "https://i.ibb.co/8n0CFMLW/Our-Fastest-Selling-Bracelet-Ever-This-Gemstone.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "Fashionable bracelet designed with premium materials to complement any outfit.",
  },
  {
    id: 37,
    title: "Mono Hiking Backpack",
    price: 2856000,
    rating: 4.7,
    image: "https://i.ibb.co/nM5J74gb/High-Quality-Hiking-back-pack.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Large hiking backpack with water-resistant material and ergonomic straps for long treks.",
  },
  {
    id: 38,
    title: "Nord Office Desk",
    price: 5976000,
    rating: 4.4,
    image:
      "https://i.ibb.co/q31LH0kp/Designer-Work-Desk-Japanese-Style-Log-Simple-Desk.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "Modern office desk with spacious drawers and durable build, perfect for home offices.",
  },
  {
    id: 39,
    title: "Lumen Smart Bulb",
    price: 600000,
    rating: 4.3,
    image:
      "https://i.ibb.co/d4GcgRF1/Elevate-your-indoor-lighting-experience-with-the.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Smart LED bulb with adjustable color and brightness, compatible with voice assistants.",
  },
  {
    id: 40,
    title: "Slate Studio Monitors",
    price: 8376000,
    rating: 4.8,
    image:
      "https://i.ibb.co/C33mZPjx/Alpha-65-Evo-has-a-1-25mm-Aluminum-tweeter-and.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Professional studio monitors with exceptional sound accuracy for music production.",
  },
  {
    id: 41,
    title: "Nest Mixing Bowls",
    price: 2376000,
    rating: 4.4,
    image: "https://i.ibb.co/9HsK6msT/159b89d4-d378-4225-b329-8c49c3a3a3cc.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "Stackable mixing bowls in various sizes, ideal for baking and cooking.",
  },
  {
    id: 42,
    title: "Frame Earrings",
    price: 1656000,
    rating: 4.3,
    image:
      "https://i.ibb.co/Tq8mT2XJ/He-ll-appreciate-the-vintage-style-look-of-these.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "Chic earrings crafted with premium materials, adding elegance to any look.",
  },
  {
    id: 43,
    title: "Mono School Backpack",
    price: 1896000,
    rating: 4.5,
    image:
      "https://i.ibb.co/YTKzVv4c/This-multipurpose-backpack-is-perfect-for-everyday.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Durable and lightweight backpack designed for students, with ample space for books and supplies.",
  },
  {
    id: 44,
    title: "Nord Bed Frame",
    price: 13176000,
    rating: 4.6,
    image:
      "https://i.ibb.co/Q39Y6k5F/The-Nordic-II-Bed-by-Ethnicraft-takes-the.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "Solid wooden bed frame with a modern minimalist design, ensuring durability and style.",
  },
  {
    id: 45,
    title: "Lumen Ceiling Light",
    price: 3096000,
    rating: 4.2,
    image: "https://i.ibb.co/8HB9TP2/d3724968-1ec7-488a-a299-3f78727bea8e.jpg",
    category: "Lighting",
    brand: "Lumen",
    description:
      "Stylish ceiling light providing bright and energy-efficient illumination.",
  },
  {
    id: 46,
    title: "Slate Wireless Charger",
    price: 3096000,
    rating: 4.5,
    image: "https://i.ibb.co/6JrcQwH0/DROP-WIRELESS-CHARGER-Slate.jpg",
    category: "Audio",
    brand: "Slate",
    description:
      "Wireless charging dock designed for Slate headphones and earbuds.",
  },
  {
    id: 47,
    title: "Nest Coffee Maker",
    price: 1416000,
    rating: 4.1,
    image: "https://i.ibb.co/dsnwNdpW/FAST-FREE-SHIPPING-ON-ALL-ITEMS-100.jpg",
    category: "Kitchen",
    brand: "Nest",
    description:
      "Programmable coffee maker with multiple brewing settings for the perfect cup every time.",
  },
  {
    id: 48,
    title: "Frame Ring",
    price: 1416000,
    rating: 4.3,
    image: "https://i.ibb.co/sJJkgX6S/90c0940d-7c98-4236-92a0-2da5da2c2eef.jpg",
    category: "Accessories",
    brand: "Frame",
    description:
      "Elegant ring crafted from premium metal, a timeless addition to your jewelry collection.",
  },
  {
    id: 49,
    title: "Mono Gym Bag",
    price: 1656000,
    rating: 4.4,
    image:
      "https://i.ibb.co/1Y147R8N/Mikkor-The-Sporty-Gymer-is-a-completely-new.jpg",
    category: "Bags",
    brand: "Mono",
    description:
      "Compact yet spacious gym bag designed to carry workout essentials in style.",
  },
  {
    id: 50,
    title: "Nord Lounge Chair",
    price: 8376000,
    rating: 4.5,
    image:
      "https://i.ibb.co/Sw3nR2HL/Galaxy-Gray-Nord-Fabric-Lounge-Chair-Article.jpg",
    category: "Furniture",
    brand: "Nord",
    description:
      "A comfortable lounge chair with ergonomic design, perfect for relaxing after a long day.",
  },
];

export const CATEGORIES = Object.freeze({
  ALL: "All",
  FURNITURE: "Furniture",
  LIGHTING: "Lighting",
  AUDIO: "Audio",
  KITCHEN: "Kitchen",
  ACCESSORIES: "Accessories",
  BAGS: "Bags",
});

export const BRANDS = Object.freeze({
  ALL: "All",
  NORD: "Nord",
  LUMEN: "Lumen",
  SLATE: "Slate",
  NEST: "Nest",
  FRAME: "Frame",
  MONO: "Mono",
});

export const COLORS = Object.freeze({
  //NEUTRAL COLORS
  BLACK: "black",
  WHITE: "#FFFFFF",

  //BLUE COLORS
  BRIGHT_BLUE: "#1677ff",
  BLUE: "#4096ff",
  BLUE_GREEN: "#249995",
  DARK_GRAY_BLUE: "#475569",
  CHARCOAL_BLUE: "#111827",

  //GRAY COLORS
  FOG_GRAY: "#726f6f75",
  DARK_GRAY: "#3b3b3b",
  LIGHT_GRAY: "#e6e6e6",
  MEDIUM_GRAY: "#666",
  SLATE_GRAY: "#6b7280",
  VERY_LIGHT_GRAY: "#f3f4f6",

  //PINK COLORS
  DARK_PINK: "#70114b",
  DEEP_PINK: "#ca077e",

  //RED COLORS
  RED: "red",

  //GREEN COLORS
  GREEN: "green",
  BRIGHT_GREEN: "#47e247",

  //YELLOW COLORS
  CYBER_YELLOW: "#ffd809",
  SOFT_YELLOW: "#fef3c7",
  WARM_YELLOW: "#fde68a",
  BRIGHT_YELLOW: "#facc15",
  ORANGE_YELLOW: "#f59e0b",

  //SHADE COLOR
  BLACK_55: "rgb(0 0 0 / 55%)",
  BLACK_10: "rgba(0, 0, 0, 0.1)",
  GRAY_55: "#7f7f7f55",
  AMBER_OVERLAY_YELLOW: "rgba(251, 191, 36, 0.2)",
});

export const FILTER_PRODUCT_PRICES = Object.freeze({
  MIN: 0,
  MAX: 20000000,
});

export const CAROUSEL_SPEED = 1500;

export const LOCAL_STORAGE_KEYS = Object.freeze({
  CART_ITEMS: "cartItems",
  WISH_LIST: "wishList",
});
