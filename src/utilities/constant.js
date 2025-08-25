// API get locations in Vietnam
export const PROVINCES_API = 'https://provinces.open-api.vn/api/p/';

export const DISTRICTS_API = provinceCode => `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`;

export const WARDS_API = districtCode => `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`;

export const GET_PRODUCTS_API = `${process.env.REACT_APP_FIREBASE_DATABASE_URL}products.json`;
export const GET_CATEGORIES_API = `${process.env.REACT_APP_FIREBASE_DATABASE_URL}categories.json`;
export const GET_BRANDS_API = `${process.env.REACT_APP_FIREBASE_DATABASE_URL}brands.json`;

export const VIETNAMESE_CURRENCY = '₫';
export const PROMOCODE = 'SALE50';

export const DURATION_NOTIFICATION = 1;
export const SHIPPING_FEE = 45000;
export const SHIPPING_FEE_FREE = 7000000;
export const CAROUSEL_SPEED = 1500;

export const FILTER_PRODUCT_PRICES = Object.freeze({
  MIN: 0,
  MAX: 20000000,
});

export const LOCAL_STORAGE_KEYS = Object.freeze({
  CART_ITEMS_KEY: 'cartItems',
  WISH_LIST_KEY: 'wishList',
});

export const COLORS = Object.freeze({
  //NEUTRAL COLORS
  BLACK: 'black',
  WHITE: '#FFFFFF',

  //BLUE COLORS
  BRIGHT_BLUE: '#1677ff',
  BLUE: '#4096ff',
  BLUE_GREEN: '#249995',
  DARK_GRAY_BLUE: '#475569',
  CHARCOAL_BLUE: '#111827',

  //GRAY COLORS
  FOG_GRAY: '#726f6f75',
  DARK_GRAY: '#3b3b3b',
  LIGHT_GRAY: '#e6e6e6',
  MEDIUM_GRAY: '#666',
  SLATE_GRAY: '#6b7280',
  VERY_LIGHT_GRAY: '#f3f4f6',

  //PINK COLORS
  DARK_PINK: '#70114b',
  DEEP_PINK: '#ca077e',

  //RED COLORS
  RED: 'red',

  //GREEN COLORS
  GREEN: 'green',
  BRIGHT_GREEN: '#47e247',

  //YELLOW COLORS
  CYBER_YELLOW: '#ffd809',
  SOFT_YELLOW: '#fef3c7',
  WARM_YELLOW: '#fde68a',
  BRIGHT_YELLOW: '#facc15',
  ORANGE_YELLOW: '#f59e0b',

  //SHADE COLOR
  BLACK_55: 'rgb(0 0 0 / 55%)',
  BLACK_10: 'rgba(0, 0, 0, 0.1)',
  GRAY_55: '#7f7f7f55',
  AMBER_OVERLAY_YELLOW: 'rgba(251, 191, 36, 0.2)',
});
