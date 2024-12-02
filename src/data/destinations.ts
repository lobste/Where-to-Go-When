export interface Destination {
  title: string;
  description: string;
  image: string;
  weather: string;
  highlights: string[];
  events: string[];
  whyVisit: string;
  type: 'beach' | 'culture' | 'winter' | 'nature' | 'festival';
}

export interface MonthlyDestinations {
  [key: string]: Destination[];
}

export const destinations: MonthlyDestinations = {
  january: [
    {
      title: "Thailand",
      description: "Warm beaches and vibrant cities perfect for winter escape",
      image: "thailand.jpg",
      weather: "25-32°C, dry and sunny",
      highlights: [
        "Relax on Phuket's beaches",
        "Explore Bangkok's temples and nightlife",
        "Visit Chiang Mai's ancient temples"
      ],
      events: [
        "Chiang Mai Flower Festival",
        "Bangkok International Film Festival"
      ],
      whyVisit: "Perfect weather for beach holidays and cultural exploration",
      type: "beach"
    },
    {
      title: "Austria",
      description: "Winter sports paradise with Alpine charm",
      image: "austria.jpg",
      weather: "-5 to 5°C, snowy",
      highlights: [
        "Ski in the Austrian Alps",
        "Visit Vienna's museums",
        "Explore Salzburg's Old Town"
      ],
      events: [
        "Hahnenkamm Ski Races in Kitzbühel",
        "Vienna Ball Season"
      ],
      whyVisit: "Prime skiing conditions and winter cultural events",
      type: "winter"
    },
    {
      title: "Brazil",
      description: "Tropical escape and pre-carnival festivities",
      image: "brazil.jpg",
      weather: "25-30°C, warm and humid",
      highlights: [
        "Rio's beaches",
        "Amazon rainforest tours",
        "Salvador's historic center"
      ],
      events: [
        "Salvador Summer Festival",
        "Pre-Carnival celebrations"
      ],
      whyVisit: "Perfect summer weather and vibrant culture",
      type: "beach"
    }
  ],
  february: [
    {
      title: "New Zealand",
      description: "Perfect summer weather in the Southern Hemisphere",
      image: "new-zealand.jpg",
      weather: "20-25°C, warm and sunny",
      highlights: [
        "Visit Hobbiton",
        "Hike the Milford Track",
        "Explore Queenstown"
      ],
      events: [
        "Marlborough Wine Festival",
        "Wellington Fringe Festival"
      ],
      whyVisit: "Ideal conditions for outdoor adventures",
      type: "nature"
    },
    {
      title: "Italy",
      description: "Winter charm with fewer tourists",
      image: "italy.jpg",
      weather: "8-13°C, mild winter",
      highlights: [
        "Venice Carnival",
        "Rome's museums",
        "Florence art galleries"
      ],
      events: [
        "Venice Carnival",
        "Viareggio Carnival"
      ],
      whyVisit: "Cultural events and shorter queues at attractions",
      type: "culture"
    },
    {
      title: "Japan",
      description: "Winter wonderland with festive atmosphere",
      image: "japan-winter.jpg",
      weather: "-2 to 7°C, snowy",
      highlights: [
        "Sapporo Snow Festival",
        "Hokkaido ski resorts",
        "Kyoto winter gardens"
      ],
      events: [
        "Sapporo Snow Festival",
        "Plum blossom viewing"
      ],
      whyVisit: "Unique winter festivals and excellent skiing",
      type: "winter"
    }
  ],
  march: [
    {
      title: "Ireland",
      description: "Emerald Isle comes alive with festivities",
      image: "ireland.jpg",
      weather: "7-12°C, mild spring",
      highlights: [
        "Cliffs of Moher",
        "Dublin's historic pubs",
        "Galway city exploration"
      ],
      events: [
        "St. Patrick's Day Festival",
        "Dublin Literary Festival"
      ],
      whyVisit: "Experience the world's most famous St. Patrick's Day celebrations",
      type: "festival"
    },
    {
      title: "Morocco",
      description: "Pleasant spring weather for exploration",
      image: "morocco.jpg",
      weather: "15-22°C, mild and sunny",
      highlights: [
        "Marrakech medinas",
        "Atlas Mountains",
        "Sahara desert tours"
      ],
      events: [
        "Marrakech Film Festival",
        "Marathon des Sables"
      ],
      whyVisit: "Perfect weather for desert adventures and city exploration",
      type: "culture"
    },
    {
      title: "South Africa",
      description: "Ideal weather for safaris and wine tasting",
      image: "south-africa.jpg",
      weather: "20-25°C, mild autumn",
      highlights: [
        "Kruger National Park",
        "Cape Town waterfront",
        "Wine routes"
      ],
      events: [
        "Cape Town Jazz Festival",
        "Harvest festivals"
      ],
      whyVisit: "Perfect conditions for wildlife viewing and outdoor activities",
      type: "nature"
    }
  ],
  april: [
    {
      title: "Netherlands",
      description: "Tulip season and spring festivities",
      image: "netherlands.jpg",
      weather: "10-15°C, mild spring",
      highlights: [
        "Keukenhof Gardens",
        "Amsterdam canals",
        "Dutch windmills"
      ],
      events: [
        "King's Day celebrations",
        "Tulip Festival"
      ],
      whyVisit: "Experience the vibrant tulip season and cultural festivities",
      type: "culture"
    },
    {
      title: "Japan",
      description: "Cherry blossom season at its peak",
      image: "japan.jpg",
      weather: "15-20°C, pleasant spring",
      highlights: [
        "Cherry blossom viewing",
        "Mount Fuji",
        "Traditional gardens"
      ],
      events: [
        "Hanami festivals",
        "Spring Grand Sumo Tournament"
      ],
      whyVisit: "Witness the magical cherry blossom season",
      type: "nature"
    },
    {
      title: "Greece",
      description: "Perfect spring weather for exploring",
      image: "greece.jpg",
      weather: "18-23°C, sunny spring",
      highlights: [
        "Acropolis",
        "Santorini",
        "Ancient Olympia"
      ],
      events: [
        "Greek Orthodox Easter",
        "Athens Food Festival"
      ],
      whyVisit: "Ideal weather for sightseeing without summer crowds",
      type: "culture"
    }
  ],
  may: [
    {
      title: "Italy",
      description: "Perfect spring weather for exploring",
      image: "italy-spring.jpg",
      weather: "18-25°C, warm and pleasant",
      highlights: [
        "Amalfi Coast",
        "Tuscany countryside",
        "Venice canals"
      ],
      events: [
        "Venice Biennale",
        "Florence May Festival"
      ],
      whyVisit: "Ideal weather for sightseeing and outdoor dining",
      type: "culture"
    },
    {
      title: "Croatia",
      description: "Coastal beauty before peak season",
      image: "croatia.jpg",
      weather: "20-25°C, sunny",
      highlights: [
        "Dubrovnik Old Town",
        "Plitvice Lakes",
        "Hvar Island"
      ],
      events: [
        "Zagreb Spring Festival",
        "Wine and Food Festival"
      ],
      whyVisit: "Perfect weather and fewer tourists",
      type: "beach"
    },
    {
      title: "Switzerland",
      description: "Alpine spring and mountain activities",
      image: "switzerland-spring.jpg",
      weather: "15-20°C, mild",
      highlights: [
        "Lake Geneva",
        "Lucerne",
        "Interlaken"
      ],
      events: [
        "Cheese Festival",
        "Spring Music Festival"
      ],
      whyVisit: "Beautiful spring landscapes and mild hiking weather",
      type: "nature"
    }
  ],
  june: [
    {
      title: "France",
      description: "Early summer charm and festivals",
      image: "france.jpg",
      weather: "20-25°C, warm",
      highlights: [
        "Paris landmarks",
        "Loire Valley castles",
        "Provence lavender"
      ],
      events: [
        "French Open Tennis",
        "Paris Jazz Festival"
      ],
      whyVisit: "Perfect weather for exploring cities and countryside",
      type: "culture"
    },
    {
      title: "Iceland",
      description: "Midnight sun and natural wonders",
      image: "iceland.jpg",
      weather: "10-15°C, mild",
      highlights: [
        "Golden Circle",
        "Blue Lagoon",
        "Waterfalls"
      ],
      events: [
        "Midnight Sun Festival",
        "Viking Festival"
      ],
      whyVisit: "24-hour daylight and optimal hiking conditions",
      type: "nature"
    },
    {
      title: "Greece",
      description: "Beach season begins",
      image: "greece-summer.jpg",
      weather: "25-30°C, sunny",
      highlights: [
        "Greek Islands",
        "Ancient ruins",
        "Mediterranean beaches"
      ],
      events: [
        "Athens Festival",
        "Navy Week"
      ],
      whyVisit: "Perfect beach weather before peak crowds",
      type: "beach"
    }
  ],
  july: [
    {
      title: "Norway",
      description: "Fjords and midnight sun",
      image: "norway.jpg",
      weather: "18-23°C, mild",
      highlights: [
        "Norwegian fjords",
        "Oslo summer",
        "Arctic Circle"
      ],
      events: [
        "Midnight Sun Marathon",
        "Jazz Festival"
      ],
      whyVisit: "Long days and beautiful fjord cruising weather",
      type: "nature"
    },
    {
      title: "Croatia",
      description: "Perfect Mediterranean summer",
      image: "croatia-summer.jpg",
      weather: "25-30°C, sunny",
      highlights: [
        "Dalmatian Coast",
        "Zagreb culture",
        "Island hopping"
      ],
      events: [
        "Ultra Europe Festival",
        "Dubrovnik Summer Festival"
      ],
      whyVisit: "Ideal beach weather and summer festivals",
      type: "beach"
    },
    {
      title: "Peru",
      description: "Dry season in the Andes",
      image: "peru.jpg",
      weather: "15-20°C, dry",
      highlights: [
        "Machu Picchu",
        "Cusco",
        "Sacred Valley"
      ],
      events: [
        "Inti Raymi Festival",
        "Independence Day"
      ],
      whyVisit: "Perfect conditions for hiking and exploring ruins",
      type: "culture"
    }
  ],
  august: [
    {
      title: "Scotland",
      description: "Festival season and mild weather",
      image: "scotland.jpg",
      weather: "15-20°C, mild",
      highlights: [
        "Edinburgh Castle",
        "Highland games",
        "Isle of Skye"
      ],
      events: [
        "Edinburgh Fringe Festival",
        "Royal Edinburgh Military Tattoo"
      ],
      whyVisit: "World's largest arts festival and beautiful landscapes",
      type: "festival"
    },
    {
      title: "Indonesia",
      description: "Dry season in Bali",
      image: "indonesia.jpg",
      weather: "25-30°C, dry",
      highlights: [
        "Bali temples",
        "Ubud culture",
        "Gili Islands"
      ],
      events: [
        "Independence Day celebrations",
        "Kuta Carnival"
      ],
      whyVisit: "Perfect weather for beach and cultural activities",
      type: "beach"
    },
    {
      title: "Kenya",
      description: "Wildlife migration season",
      image: "kenya.jpg",
      weather: "20-25°C, mild",
      highlights: [
        "Masai Mara",
        "Great Migration",
        "Nairobi National Park"
      ],
      events: [
        "Wildebeest Migration",
        "Cultural festivals"
      ],
      whyVisit: "Witness the incredible wildlife migration",
      type: "nature"
    }
  ],
  september: [
    {
      title: "Germany",
      description: "Oktoberfest and autumn colors",
      image: "germany.jpg",
      weather: "15-20°C, mild",
      highlights: [
        "Munich festivities",
        "Black Forest",
        "Rhine Valley"
      ],
      events: [
        "Oktoberfest",
        "Wine festivals"
      ],
      whyVisit: "World-famous beer festival and pleasant weather",
      type: "festival"
    },
    {
      title: "Spain",
      description: "Perfect weather for exploration",
      image: "spain.jpg",
      weather: "20-25°C, warm",
      highlights: [
        "Barcelona sights",
        "Madrid culture",
        "Andalusian charm"
      ],
      events: [
        "La Mercè Festival",
        "San Sebastián Film Festival"
      ],
      whyVisit: "Ideal temperatures and cultural events",
      type: "culture"
    },
    {
      title: "China",
      description: "Autumn colors and festivals",
      image: "china.jpg",
      weather: "15-20°C, pleasant",
      highlights: [
        "Great Wall",
        "Forbidden City",
        "Yellow Mountains"
      ],
      events: [
        "Mid-Autumn Festival",
        "National Day celebrations"
      ],
      whyVisit: "Comfortable weather and cultural celebrations",
      type: "culture"
    }
  ],
  october: [
    {
      title: "Japan",
      description: "Autumn colors and pleasant weather",
      image: "japan-autumn.jpg",
      weather: "15-20°C, mild",
      highlights: [
        "Kyoto temples",
        "Tokyo culture",
        "Mount Fuji"
      ],
      events: [
        "Autumn festivals",
        "Tokyo Film Festival"
      ],
      whyVisit: "Beautiful fall colors and comfortable temperatures",
      type: "culture"
    },
    {
      title: "Nepal",
      description: "Perfect hiking conditions",
      image: "nepal.jpg",
      weather: "15-20°C, clear",
      highlights: [
        "Everest Base Camp",
        "Kathmandu Valley",
        "Pokhara"
      ],
      events: [
        "Dashain Festival",
        "Tihar celebrations"
      ],
      whyVisit: "Ideal weather for trekking and cultural experiences",
      type: "nature"
    },
    {
      title: "Mexico",
      description: "Day of the Dead celebrations",
      image: "mexico.jpg",
      weather: "20-25°C, mild",
      highlights: [
        "Mexico City",
        "Oaxaca",
        "Guanajuato"
      ],
      events: [
        "Day of the Dead",
        "Independence celebrations"
      ],
      whyVisit: "Unique cultural celebrations and pleasant weather",
      type: "festival"
    }
  ],
  november: [
    {
      title: "India",
      description: "Festival of Lights and perfect weather",
      image: "india.jpg",
      weather: "20-25°C, dry",
      highlights: [
        "Taj Mahal",
        "Rajasthan palaces",
        "Kerala backwaters"
      ],
      events: [
        "Diwali Festival",
        "Pushkar Camel Fair"
      ],
      whyVisit: "Comfortable temperatures and vibrant festivals",
      type: "festival"
    },
    {
      title: "Vietnam",
      description: "Perfect weather for exploration",
      image: "vietnam.jpg",
      weather: "20-25°C, dry",
      highlights: [
        "Ha Long Bay",
        "Hanoi Old Quarter",
        "Hoi An"
      ],
      events: [
        "Hoi An Lantern Festival",
        "Coffee Festival"
      ],
      whyVisit: "Ideal conditions for touring and outdoor activities",
      type: "culture"
    },
    {
      title: "Argentina",
      description: "Spring in South America",
      image: "argentina.jpg",
      weather: "20-25°C, mild",
      highlights: [
        "Buenos Aires",
        "Iguazu Falls",
        "Mendoza wineries"
      ],
      events: [
        "Buenos Aires Jazz Festival",
        "Polo Open"
      ],
      whyVisit: "Perfect spring weather and cultural events",
      type: "nature"
    }
  ],
  december: [
    {
      title: "Switzerland",
      description: "Winter wonderland and festivities",
      image: "switzerland-winter.jpg",
      weather: "0-5°C, snowy",
      highlights: [
        "Swiss Alps skiing",
        "Christmas markets",
        "Mountain resorts"
      ],
      events: [
        "Christmas markets",
        "St. Moritz Snow Polo"
      ],
      whyVisit: "Perfect winter sports conditions and festive atmosphere",
      type: "winter"
    },
    {
      title: "Australia",
      description: "Summer begins down under",
      image: "australia.jpg",
      weather: "25-30°C, sunny",
      highlights: [
        "Sydney Harbour",
        "Great Barrier Reef",
        "Bondi Beach"
      ],
      events: [
        "Sydney New Year's Eve",
        "Boxing Day Cricket Test"
      ],
      whyVisit: "Perfect beach weather and summer festivities",
      type: "beach"
    },
    {
      title: "Finland",
      description: "Northern Lights and winter magic",
      image: "finland.jpg",
      weather: "-5 to 0°C, snowy",
      highlights: [
        "Lapland",
        "Northern Lights",
        "Helsinki Christmas"
      ],
      events: [
        "Santa Claus Village",
        "Independence Day"
      ],
      whyVisit: "Winter wonderland and chance to see Aurora Borealis",
      type: "winter"
    }
  ]
};