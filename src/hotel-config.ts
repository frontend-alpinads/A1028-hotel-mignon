// ============================================
// HOTEL_CONFIG - Core hotel identity & contact
// ============================================
export const HOTEL_CONFIG = {
  name: "Hotel Mignon",
  shortName: "Mignon",
  type: "Hotel" as const,

  location: {
    street: "Via Grabmayr 5",
    postalCode: "IT-39012",
    city: "Meran",
    region: "Südtirol",
    country: "Italien",
    coordinates: {
      lat: 46.6688,
      lng: 11.1597,
    },
  },

  contact: {
    email: "info@hotelmignon.com",
    phone: {
      main: { display: "+39 0473 236300", href: "tel:+390473236300" },
      whatsapp: {
        display: "",
        href: "",
      },
    },
    website: {
      main: "https://www.hotelmignon.com",
      booking: "https://www.hotelmignon.com/buchen",
    },
  },

  social: {
    facebook: "https://www.facebook.com/hotelmignon",
    instagram: "https://www.instagram.com/hotelmignon",
    youtube: undefined,
  },

  legal: {
    taxId: "",
    imprint: {
      de: "https://www.hotelmignon.com/de/impressum",
      en: "https://www.hotelmignon.com/en/imprint",
      it: "https://www.hotelmignon.com/it/impressum",
    },
    privacy: {
      de: "https://www.hotelmignon.com/de/datenschutz",
      en: "https://www.hotelmignon.com/en/privacy",
      it: "https://www.hotelmignon.com/it/privacy",
    },
  },

  branding: {
    logo: {
      main: "https://www.hotelmignon.com/grafik/template/logo_white.svg",
      alt: "https://www.hotelmignon.com/grafik/template/logo_white.svg",
    },
    dimensions: {
      mobile: { width: 132, height: 74 },
      desktop: { width: 189, height: 138 },
    },
  },

  copyright: {
    year: 2026,
    holder: "Hotel Mignon",
  },
};

// ============================================
// BOOKING_CONFIG - Reservation settings
// ============================================
export const BOOKING_CONFIG = {
  bookingUrls: {
    de: "https://www.hotelmignon.com/buchen",
    en: "https://www.hotelmignon.com/buchen",
    it: "https://www.hotelmignon.com/buchen",
  },

  dates: {
    minBookingDate: "2026-03-04",
  },

  checkIn: {
    from: "14:00",
    to: "18:00",
  },

  checkOut: {
    until: "10:30",
  },

  touristTax: {
    amount: 3.5,
    currency: "EUR",
    per: "person/day",
    exemptUnderAge: 14,
  },

  cancellation: {
    tiers: [
      { daysBeforeArrival: 60, fee: 0, description: "Free cancellation" },
      { daysBeforeArrival: 21, fee: 30, feeType: "percent" as const },
      { daysBeforeArrival: 7, fee: 75, feeType: "percent" as const },
      { daysBeforeArrival: 0, fee: 95, feeType: "percent" as const },
    ],
    depositRefundable: false,
  },

  policies: {
    pets: { allowed: true, fee: 25, per: "day" },
    additionalPerson: { fee: 0, per: "night" },
    breakfastOnlyDeduction: { amount: 0, per: "person" },
  },
};

// ============================================
// TECHNICAL_CONFIG - Dev/deployment settings
// ============================================
export const TECHNICAL_CONFIG = {
  projectId: "A1028",

  urls: {
    production: "https://holiday.hotelmignon.com",
    staging: "",
  },

  analytics: {
    gtmId: "GTM-PNP7DSX2",
  },

  email: {
    from: "noreply@hotelmignon.com",
    replyTo: "info@hotelmignon.com",
    transactional: "hotelmignon@updates.hotelmignon.com",
    assetsBaseUrl: "https://holiday.hotelmignon.com",
  },

  credits: {
    agency: "Alpin Ads",
    agencyUrl: "https://alpinads.com/",
  },
};

// ============================================
// SEO_CONFIG - Metadata for all languages
// ============================================
export const SEO_CONFIG = {
  baseUrl: "https://holiday.hotelmignon.com",
  ogImage: "https://www.hotelmignon.com/grafik/resize/800x473_upload-prices-offer--hotel-ambiente--73_2525.png",

  home: {
    de: {
      title: "Hotel Mignon Meran | 5-Sterne Wellness Südtirol",
      description: "Ihr exklusives 5-Sterne-Hotel in Meran mit 2.000 m² Park Spa, mediterraner Parkanlage und regionaler Gourmetküche. Luxuriöse Suiten für unvergessliche Momente.",
      ogTitle: "Hotel Mignon Meran | 5-Sterne Luxushotel in Südtirol",
      ogDescription: "Erleben Sie puren Luxus im Hotel Mignon in Meran. 10.000 m² Park, 2.000 m² Wellness-Oase und Südtiroler Gourmetküche. Jetzt anfragen!",
      ogLocale: "de_DE",
    },
    en: {
      title: "Hotel Mignon Merano | 5-Star Wellness South Tyrol",
      description: "Your exclusive 5-star hotel in Merano with 2,000 m² Park Spa, Mediterranean park and regional gourmet cuisine. Luxurious suites for unforgettable moments.",
      ogTitle: "Hotel Mignon Merano | 5-Star Luxury Hotel in South Tyrol",
      ogDescription: "Experience pure luxury at Hotel Mignon in Merano. 10,000 m² park, 2,000 m² wellness oasis and South Tyrolean gourmet cuisine. Enquire now!",
      ogLocale: "en_US",
    },
    it: {
      title: "Hotel Mignon Merano | 5 Stelle Wellness Alto Adige",
      description: "Il vostro esclusivo hotel a 5 stelle a Merano con 2.000 m² di Park Spa, parco mediterraneo e cucina gourmet regionale. Suite lussuose per momenti indimenticabili.",
      ogTitle: "Hotel Mignon Merano | Hotel di Lusso 5 Stelle in Alto Adige",
      ogDescription: "Vivete il lusso puro all'Hotel Mignon a Merano. Parco di 10.000 m², oasi benessere di 2.000 m² e cucina gourmet altoatesina. Richiedete ora!",
      ogLocale: "it_IT",
    },
  },

  keywords: ["Hotel Mignon","5 Sterne Hotel Meran","Wellness Hotel Südtirol","Luxury Hotel Merano","Park Spa","Gourmet Hotel","Belvita Hotel","Leading Wellnesshotel","Meran Urlaub","Südtirol Wellness"],
};

// ============================================
// Helper functions
// ============================================
export function getHotelConfig() {
  return HOTEL_CONFIG;
}
export function getBookingConfig(): BookingConfigLegacy {
  return bookingConfig;
}
export function getTechnicalConfig() {
  return TECHNICAL_CONFIG;
}
export function getSeoConfig() {
  return SEO_CONFIG;
}

// ============================================
// Legacy aliases for backward compatibility
// ============================================
export interface HotelProfile {
  address: {
    line1: string;
    line2: string;
  };
  contact: {
    email: string;
    phone: {
      display: string;
      href: string;
    };
  };
  hotelName: string;
  social: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
    whatsapp?: string;
  };
  legal: {
    imprintBaseUrl: string;
    privacyBaseUrl: string;
  };
  credits: {
    alpinAdsUrl: string;
  };
  logo: {
    src: string;
    mobile: {
      width: number;
      height: number;
    };
    desktop: {
      width: number;
      height: number;
    };
  };
}

export const hotelProfile: HotelProfile = {
  hotelName: HOTEL_CONFIG.name,
  address: {
    line1: HOTEL_CONFIG.location.street,
    line2: `${HOTEL_CONFIG.location.postalCode} ${HOTEL_CONFIG.location.city}, ${HOTEL_CONFIG.location.region} - ${HOTEL_CONFIG.location.country}`,
  },
  contact: {
    email: HOTEL_CONFIG.contact.email,
    phone: HOTEL_CONFIG.contact.phone.main,
  },
  social: {
    ...HOTEL_CONFIG.social,
    whatsapp: HOTEL_CONFIG.contact.phone.whatsapp.href,
  },
  legal: {
    imprintBaseUrl: HOTEL_CONFIG.legal.imprint.de,
    privacyBaseUrl: HOTEL_CONFIG.legal.privacy.de,
  },
  credits: { alpinAdsUrl: TECHNICAL_CONFIG.credits.agencyUrl },
  logo: {
    src: HOTEL_CONFIG.branding.logo.main,
    mobile: HOTEL_CONFIG.branding.dimensions.mobile,
    desktop: HOTEL_CONFIG.branding.dimensions.desktop,
  },
};

export interface SiteConfig {
  baseUrl: string;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  baseUrl: SEO_CONFIG.baseUrl,
  ogImage: SEO_CONFIG.ogImage,
};

export interface BookingConfigLegacy {
  minDate: string;
}

export const bookingConfig: BookingConfigLegacy = {
  minDate: BOOKING_CONFIG.dates.minBookingDate,
};

export function getHotelProfile(): HotelProfile {
  return hotelProfile;
}

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}
