export interface ItineraryItem {
    day: number;
    title: string;
    description: string;
  }
  
  export interface Tour {
    id: string;
    title: string;
    rating: number;
    reviews: number;
    duration: string;
    tourType: string;
    groupSize: string;
    languages: string[];
    about: string;
    highlights: string[];
    highlightsX: string[];
    included: string[];
    excluded: string[];
    sliderimages: string[];
    itinerary: ItineraryItem[];
  }