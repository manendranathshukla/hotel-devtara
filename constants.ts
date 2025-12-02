
export const BOOKING_URL = "https://www.booking.com/searchresults.en.html?dest_id=14305945&highlighted_hotels=14305945&dest_type=hotel&checkin=2025-12-03&checkout=2025-12-04&group_adults=2&req_adults=2&show_room=1430594503_414619872_3_1_0&lang=en&selected_currency=INR&exrt=89.90202332&ext_price_total=1497.23&ext_price_tax=279.97&xfc=USD&hca=m&group_children=0&req_children=0&&ts=1764682783&no_rooms=1&&utm_source=metagha&utm_medium=mapresults&utm_campaign=IN&utm_term=hotel-14305945";

export const IMAGES = {
  logo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135479.jpg?k=71fbc4869f31a1f539cd6b8baf98a47c180869fa17d2ad9c377a9abe029e7275&o=", 
  
  hero: "https://cf.bstatic.com/xdata/images/hotel/max300/693135506.jpg?k=6f402b721f63fcba01f89007b716209c959d01eb39d46eaf4d36f93557046432&o=",
  about: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135399.jpg?k=29d18696a7b44f2b44315427a1ef0ccaaed4df0d6268a3f79392bf4130b8c7be&o=",
  room1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135504.jpg?k=5730fd26bb98f92b6a026d27b41582d930bb30c908de89139c858a7f803f374d&o=",
  room2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135519.jpg?k=fea70437a85efce71bb498c4d2dd65263d0505d88995823c9fa1ae18cb365f94&o=",
  room3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135467.jpg?k=1e6200c866471f9b6740c515665f17c0ea97aa87bbed19a44135751349f2897d&o=",
  gallery1: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135516.jpg?k=56236e21dd5d6f8f08a61b7397c991f66fc5c92c9b271881f0db8e833b96c111&o=",
  gallery2: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135496.jpg?k=e4c7f06f4ba523973d354c1d5292fdc25a7eecb00ac56cec3239901e6a8ad1cf&o=",
  gallery3: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135518.jpg?k=5906be91a82045f334a2724a75496245565dd68e954fd5f6f2b1eab8896056c1&o=",
  gallery4: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135471.jpg?k=e5e86ef71612577ab4495d22fa3a06bab0568efc6b54d50da3c95869250bdf46&o=",
  gallery5: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135474.jpg?k=a5ef59faa527e1f5079a58086fa63c46d89a3c8966e346380bf6e653e257a328&o=",
  gallery6: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/693135510.jpg?k=f64cc3b4e783821d14ff0023ffcdc7e5d0a77a19743be691f83f7ba589627925&o=",
};

export const INITIAL_CONTENT = {
  tagline: "Experience the Divine at Hotel Devtara",
  about: "Welcome to Hotel Devtara, a sanctuary of luxury nestled in the heart of serenity. We offer a perfect blend of traditional hospitality and modern comfort. Whether you are here for a spiritual journey or a relaxing getaway, our exquisite amenities and dedicated staff ensure a memorable stay.",
  rooms: [
    {
      id: "std",
      name: "Deluxe Royal Room",
      description: "A cozy retreat featuring rich crimson accents and garden views.",
      price: "₹1,500",
      image: IMAGES.room1,
      capacity: "2 Adults",
      features: ["Free Wi-Fi", "Air Conditioning", "Garden View"]
    },
    {
      id: "sup",
      name: "Gold Imperial Suite",
      description: "Spacious suite with golden decor, a private balcony, and premium bedding.",
      price: "₹2,800",
      image: IMAGES.room2,
      capacity: "2 Adults, 1 Child",
      features: ["King Bed", "Bathtub", "Minibar", "Balcony"]
    },
    {
      id: "fam",
      name: "Maharaja Family Suite",
      description: "Perfect for families, featuring warm yellow tones and ample living space.",
      price: "₹3,500",
      image: IMAGES.room3,
      capacity: "4 Adults",
      features: ["2 Queen Beds", "Living Area", "Kitchenette"]
    }
  ]
};