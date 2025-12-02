export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  capacity: string;
  features: string[];
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
}

export interface HotelContent {
  about: string;
  tagline: string;
  rooms: Room[];
}