// ============================================================================
// Bangkok Explorer - Static Data Manager
// Copyright © 2026 Eitan Fisher. All Rights Reserved.
// Curated locations for offline/static mode
// ============================================================================

window.BKK = window.BKK || {};

const staticLocationsData = {
  sukhumvit: {
    graffiti: [
      { name: 'Sukhumvit Soi 11 Street Art', lat: 13.7450, lng: 100.5535, description: 'גרפיטי ובילוי', duration: 25 },
      { name: 'Phrom Phong Art Walk', lat: 13.7305, lng: 100.5700, description: 'אומנות רחוב ליד BTS', duration: 30 },
      { name: 'Soi 23 Graffiti Wall', lat: 13.7410, lng: 100.5640, description: 'קיר גרפיטי', duration: 25 }
    ],
    galleries: [
      { name: 'H Gallery', lat: 13.7290, lng: 100.5715, description: 'גלריה עכשווית', duration: 45 },
      { name: 'Number 1 Gallery', lat: 13.7420, lng: 100.5565, description: 'אומנות מקומית', duration: 30 },
      { name: 'Thavibu Gallery', lat: 13.7365, lng: 100.5625, description: 'אומנות אסיאתית', duration: 40 }
    ],
    artisans: [
      { name: 'Jim Thompson House', lat: 13.7464, lng: 100.5347, description: 'בית משי ואדריכלות', duration: 60 },
      { name: 'Local Crafts Soi 33', lat: 13.7355, lng: 100.5680, description: 'מלאכה תאילנדית', duration: 40 }
    ],
    cafes: [
      { name: 'Rocket Coffeebar Soi 12', lat: 13.7425, lng: 100.5575, description: 'קפה מינימליסטי', duration: 40 },
      { name: 'Roast Coffee Asok', lat: 13.7375, lng: 100.5605, description: 'קפה איכותי ליד BTS', duration: 35 },
      { name: 'Roots Coffee Soi 49', lat: 13.7295, lng: 100.5760, description: 'קפה בוטיק', duration: 30 },
      { name: 'EmQuartier Cafes', lat: 13.7310, lng: 100.5695, description: 'קפה בקניון מודרני', duration: 40 }
    ],
    architecture: [
      { name: 'Terminal 21 Asoke', lat: 13.7380, lng: 100.5600, description: 'קניון בעיצוב ערים', duration: 60 },
      { name: 'EmQuartier Mall', lat: 13.7310, lng: 100.5695, description: 'קניון מודרני יוקרתי', duration: 50 },
      { name: 'Benjakitti Park', lat: 13.7300, lng: 100.5645, description: 'פארק ואגם גדול', duration: 45 },
      { name: 'Jim Thompson House', lat: 13.7464, lng: 100.5347, description: 'בית משי היסטורי', duration: 60 }
    ],
    food: [
      { name: 'Sukhumvit Soi 38 Night Market', lat: 13.7345, lng: 100.5725, description: 'שוק אוכל רחוב מפורסם', duration: 60 },
      { name: 'Terminal 21 Food Court', lat: 13.7380, lng: 100.5600, description: 'מתחם אוכל בקניון', duration: 45 },
      { name: 'Nana Plaza Restaurants', lat: 13.7415, lng: 100.5550, description: 'מסעדות מגוונות', duration: 50 }
    ],
    markets: [
      { name: 'Khlong Toei Market', lat: 13.7230, lng: 100.5840, description: 'שוק סיטונאי ואוכל', duration: 50 },
      { name: 'Sukhumvit Plaza Market', lat: 13.7390, lng: 100.5585, description: 'שוק מקומי', duration: 40 },
      { name: 'Terminal 21 Shopping', lat: 13.7380, lng: 100.5600, description: 'קניון עם שווקים', duration: 50 },
      { name: 'Sukhumvit Soi 38 Night Market', lat: 13.7345, lng: 100.5725, description: 'שוק אוכל ומוצרים', duration: 60 }
    ],
    nightlife: [
      { name: 'Sukhumvit Soi 11 Bars', lat: 13.7450, lng: 100.5535, description: 'רחוב ברים ומועדונים', duration: 90 },
      { name: 'Nana Plaza Entertainment', lat: 13.7415, lng: 100.5550, description: 'אזור בילוי ומסעדות', duration: 90 },
      { name: 'Asok Nightlife Area', lat: 13.7370, lng: 100.5610, description: 'בילוי ליד BTS', duration: 80 }
    ],
    parks: [
      { name: 'Benjakitti Park', lat: 13.7300, lng: 100.5645, description: 'פארק עירוני גדול', duration: 45 }
    ],
    entertainment: [
      { name: 'Terminal 21 Cineplex', lat: 13.7380, lng: 100.5600, description: 'קולנוע בקניון', duration: 150 },
      { name: 'EmQuartier Cineplex', lat: 13.7310, lng: 100.5695, description: 'קולנוע יוקרתי', duration: 150 },
      { name: 'Saxophone Pub & Restaurant', lat: 13.7405, lng: 100.5545, description: 'מועדון ג\'אז חי', duration: 120 },
      { name: 'Escape Hunt Bangkok', lat: 13.7310, lng: 100.5695, description: 'חדר בריחה', duration: 90 }
    ]
  },
  'old-town': {
    temples: [
      { name: 'Wat Pho', lat: 13.7465, lng: 100.4927, description: 'בודהה השוכב', duration: 90 },
      { name: 'Grand Palace', lat: 13.7500, lng: 100.4914, description: 'הארמון המלכותי', duration: 120 },
      { name: 'Wat Saket (Golden Mount)', lat: 13.7539, lng: 100.5064, description: 'הר הזהב', duration: 60 },
      { name: 'Wat Suthat', lat: 13.7513, lng: 100.5006, description: 'מקדש גדול', duration: 45 }
    ],
    architecture: [
      { name: 'Wat Arun', lat: 13.7437, lng: 100.4888, description: 'מקדש השחר', duration: 60 },
      { name: 'Democracy Monument', lat: 13.7566, lng: 100.5015, description: 'אנדרטת דמוקרטיה', duration: 20 },
      { name: 'Giant Swing', lat: 13.7512, lng: 100.5014, description: 'נדנדה ענקית', duration: 15 }
    ],
    canals: [
      { name: 'Khlong Saen Saeb Canal Boat', lat: 13.7590, lng: 100.5017, description: 'סירת תעלה', duration: 30 },
      { name: 'Longtail Boat Tour', lat: 13.7520, lng: 100.4950, description: 'סיור בתעלות', duration: 90 }
    ],
    markets: [
      { name: 'Pak Khlong Talat', lat: 13.7413, lng: 100.4959, description: 'שוק פרחים 24 שעות', duration: 45 },
      { name: 'Amulet Market', lat: 13.7480, lng: 100.4938, description: 'שוק קמיעות', duration: 30 }
    ],
    food: [
      { name: 'Khao San Road', lat: 13.7590, lng: 100.4978, description: 'רחוב תרמילאים', duration: 90 },
      { name: 'Tha Tien Market', lat: 13.7450, lng: 100.4920, description: 'שוק אוכל מקומי', duration: 40 }
    ],
    entertainment: [
      { name: 'National Theatre', lat: 13.7540, lng: 100.5025, description: 'תיאטרון לאומי - מופעים תאילנדיים', duration: 120 },
      { name: 'Rattanakosin Exhibition Hall', lat: 13.7513, lng: 100.4988, description: 'אולם תערוכות', duration: 60 }
    ]
  },
  chinatown: {
    food: [
      { name: 'Yaowarat Road', lat: 13.7408, lng: 100.5133, description: 'רחוב האוכל המפורסם', duration: 90 },
      { name: 'T&K Seafood', lat: 13.7392, lng: 100.5078, description: 'פירות ים מפורסם', duration: 60 },
      { name: 'Nai Ek Roll Noodles', lat: 13.7420, lng: 100.5110, description: 'נודלס גלילה', duration: 30 },
      { name: 'Chinatown Odeon Circle', lat: 13.7403, lng: 100.5152, description: 'מעגל אוכל', duration: 50 }
    ],
    markets: [
      { name: 'Sampeng Lane', lat: 13.7422, lng: 100.5102, description: 'סמטת סיטונאות', duration: 60 },
      { name: 'Yaowarat Market', lat: 13.7405, lng: 100.5115, description: 'שוק סיני', duration: 50 },
      { name: 'Nakhon Kasem (Thieves Market)', lat: 13.7445, lng: 100.5098, description: 'שוק גנבים', duration: 45 }
    ],
    temples: [
      { name: 'Wat Traimit', lat: 13.7403, lng: 100.5152, description: 'בודהה זהב 5.5 טון', duration: 45 },
      { name: 'Wat Mangkon Kamalawat', lat: 13.7431, lng: 100.5123, description: 'מקדש סיני עתיק', duration: 40 }
    ],
    architecture: [
      { name: 'Yaowarat Chinatown Gate', lat: 13.7403, lng: 100.5152, description: 'שער צ\'יינה טאון', duration: 15 },
      { name: 'Old Shophouses', lat: 13.7410, lng: 100.5120, description: 'בתי חנות עתיקים', duration: 30 }
    ],
    entertainment: [
      { name: 'Chinatown Heritage Center', lat: 13.7422, lng: 100.5102, description: 'מרכז מורשת', duration: 60 }
    ]
  },
  thonglor: {
    galleries: [
      { name: 'ARDEL Gallery', lat: 13.7284, lng: 100.5801, description: 'אומנות עכשווית', duration: 50 },
      { name: '100 Tonson Gallery', lat: 13.7326, lng: 100.5795, description: 'גלריה בוטיק', duration: 40 },
      { name: 'Bangkok CityCity Gallery', lat: 13.7312, lng: 100.5789, description: 'אומנות מקומית', duration: 45 }
    ],
    cafes: [
      { name: 'Casa Lapin x49', lat: 13.7325, lng: 100.5814, description: 'קפה יפני-סקנדינבי', duration: 50 },
      { name: 'Everyday Karmakamet', lat: 13.7312, lng: 100.5797, description: 'קפה ובשמים', duration: 45 },
      { name: 'Roots Coffee Roaster', lat: 13.7329, lng: 100.5821, description: 'קפה מקומי', duration: 40 },
      { name: 'Ceresia Coffee', lat: 13.7318, lng: 100.5805, description: 'קפה איכותי', duration: 35 }
    ],
    food: [
      { name: 'Thonglor Soi 13', lat: 13.7323, lng: 100.5795, description: 'מסעדות בוטיק', duration: 60 },
      { name: 'J Avenue Food Hall', lat: 13.7315, lng: 100.5806, description: 'מתחם אוכל', duration: 50 }
    ],
    nightlife: [
      { name: 'Thonglor Soi 10', lat: 13.7318, lng: 100.5810, description: 'ברים ומועדונים', duration: 90 },
      { name: 'Arena 10', lat: 13.7320, lng: 100.5812, description: 'מועדון', duration: 80 }
    ],
    markets: [
      { name: 'W Market Ekkamai', lat: 13.7206, lng: 100.5891, description: 'שוק לילה וינטג\'', duration: 60 }
    ],
    entertainment: [
      { name: 'Major Cineplex Ekkamai', lat: 13.7195, lng: 100.5850, description: 'קולנוע גדול', duration: 150 },
      { name: 'The Commons Jazz Bar', lat: 13.7300, lng: 100.5743, description: 'בר ג\'אז אינטימי', duration: 120 }
    ]
  },
  ari: {
    graffiti: [
      { name: 'Ari Street Art', lat: 13.7788, lng: 100.5445, description: 'גרפיטי בסמטאות', duration: 30 }
    ],
    galleries: [
      { name: 'Speedy Grandma', lat: 13.7774, lng: 100.5423, description: 'גלריה קטנה', duration: 35 },
      { name: 'The Reading Room', lat: 13.7780, lng: 100.5435, description: 'ספרייה וגלריה', duration: 40 }
    ],
    cafes: [
      { name: 'Audrey Cafe', lat: 13.7781, lng: 100.5419, description: 'קפה ורוד אודרי הפבורן', duration: 50 },
      { name: 'Macaroni Club', lat: 13.7803, lng: 100.5461, description: 'קפה איטלקי רטרו', duration: 60 },
      { name: 'Brave Roasters', lat: 13.7795, lng: 100.5441, description: 'קפה מקומי איכותי', duration: 40 },
      { name: 'Stendhal Syndrome', lat: 13.7785, lng: 100.5430, description: 'קפה אמנותי', duration: 45 }
    ],
    artisans: [
      { name: 'YELO House', lat: 13.7792, lng: 100.5432, description: 'בית בעלי מלאכה', duration: 45 },
      { name: 'Play Pot', lat: 13.7787, lng: 100.5438, description: 'קרמיקה', duration: 50 }
    ],
    food: [
      { name: 'Ari Night Market', lat: 13.7785, lng: 100.5437, description: 'שוק אוכל לילה', duration: 60 },
      { name: 'Ari Soi 1', lat: 13.7790, lng: 100.5440, description: 'מסעדות', duration: 50 }
    ],
    parks: [
      { name: 'Chatuchak Park', lat: 13.8034, lng: 100.5523, description: 'פארק גדול', duration: 40 }
    ],
    entertainment: [
      { name: 'Iron Fairies Bar', lat: 13.7790, lng: 100.5445, description: 'בר אלטרנטיבי', duration: 90 }
    ]
  },
  riverside: {
    canals: [
      { name: 'Chao Phraya River Cruise', lat: 13.7248, lng: 100.5084, description: 'שייט ארוחת ערב', duration: 120 },
      { name: 'Chao Phraya Express Boat', lat: 13.7272, lng: 100.5085, description: 'סירת תחבורה', duration: 30 },
      { name: 'Khlong Bangkok Yai Tour', lat: 13.7380, lng: 100.4895, description: 'תעלה גדולה', duration: 60 }
    ],
    rooftop: [
      { name: 'Sky Bar Lebua', lat: 13.7227, lng: 100.5089, description: 'בר גג Hangover 2', duration: 90 },
      { name: 'Above Eleven', lat: 13.7245, lng: 100.5256, description: 'בר גג פרואני', duration: 80 },
      { name: 'The Deck by Arun Residence', lat: 13.7430, lng: 100.4895, description: 'מסעדת גג מול Wat Arun', duration: 70 }
    ],
    architecture: [
      { name: 'Asiatique Riverfront', lat: 13.7051, lng: 100.5091, description: 'שוק ריברסייד ענק', duration: 120 },
      { name: 'Mandarin Oriental', lat: 13.7237, lng: 100.5145, description: 'מלון היסטורי 1876', duration: 30 },
      { name: 'ICONSIAM', lat: 13.7268, lng: 100.5101, description: 'קניון על הנהר', duration: 90 },
      { name: 'Warehouse 30', lat: 13.7305, lng: 100.5024, description: 'מחסן אומנות Talat Noi', duration: 50 }
    ],
    temples: [
      { name: 'Wat Arun from River', lat: 13.7437, lng: 100.4888, description: 'מקדש השחר מהנהר', duration: 60 },
      { name: 'Wat Kalayanamit', lat: 13.7351, lng: 100.4900, description: 'מקדש על הנהר', duration: 40 }
    ],
    graffiti: [
      { name: 'Talat Noi Street Art', lat: 13.7305, lng: 100.5024, description: 'אומנות רחוב בשכונה סינית', duration: 40 }
    ],
    entertainment: [
      { name: 'Asiatique Sky Theater', lat: 13.7045, lng: 100.5076, description: 'תיאטרון מופעים', duration: 90 },
      { name: 'Calypso Cabaret', lat: 13.7048, lng: 100.5078, description: 'מופע קברט', duration: 90 },
      { name: 'ICONSIAM ICON Cineplex', lat: 13.7268, lng: 100.5101, description: 'קולנוע על הנהר', duration: 150 }
    ]
  }
};

// Public API for StaticDataManager
window.BKK.StaticDataManager = {
  // Get locations for specific area and interests
  getLocations: (area, interests) => {
    console.log('[STATIC] Getting locations:', { area, interests });
    const areaData = staticLocationsData[area] || staticLocationsData.sukhumvit;
    let stops = [];
    
    interests.forEach(interest => {
      // Skip custom interests (they start with 'custom_')
      if (interest.startsWith('custom_')) {
        console.log('[STATIC] Skipping custom interest:', interest);
        return;
      }
      
      if (areaData[interest]) {
        const locationsWithInterest = areaData[interest].map(loc => ({
          ...loc,
          interests: [interest]
        }));
        stops = [...stops, ...locationsWithInterest];
      } else {
        console.log('[STATIC] No data for interest:', interest);
      }
    });
    
    // Remove duplicates
    const seen = new Set();
    const unique = stops.filter(stop => {
      const key = `${stop.lat},${stop.lng}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    
    console.log('[STATIC] Found places:', unique.length);
    return unique;
  },
  
  // Check if static data is available
  hasData: () => {
    return Object.keys(staticLocationsData).length > 0;
  },
  
  // Get all areas
  getAreas: () => {
    return Object.keys(staticLocationsData);
  }
};

console.log('[STATIC DATA] Loaded successfully -', Object.keys(staticLocationsData).length, 'areas');
