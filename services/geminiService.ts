
import { GoogleGenAI, Type } from "@google/genai";
import { HotelContent } from "../types";
import { INITIAL_CONTENT } from "../constants";

const getGeminiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
};

export const generateHotelDetails = async (): Promise<HotelContent> => {
  const ai = getGeminiClient();
  
  if (!ai) {
    console.warn("No API Key found, using static content.");
    return INITIAL_CONTENT;
  }

  try {
    const prompt = `
      You are a luxury hotel copywriter for 'Hotel Devtara'.
      The hotel themes are Red, Gold, and Warm Yellow. It is a luxury property with affordable pricing (starting around 1500 INR).
      
      Generate a JSON object with the following structure:
      {
        "tagline": "A short, elegant tagline",
        "about": "A 2-paragraph inviting description of the hotel emphasizing luxury, passion, warmth and the color themes.",
        "rooms": [
           // Array of 3 rooms. 
           // Room 1: 'Royal Deluxe' (Approx 1500 INR)
           // Room 2: 'Golden Sovereign' (Approx 2500 INR)
           // Room 3: 'Imperial Suite' (Approx 4000 INR)
           // Include fields: id, name, description, price, capacity, features (array of strings)
        ]
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING },
            about: { type: Type.STRING },
            rooms: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  name: { type: Type.STRING },
                  description: { type: Type.STRING },
                  price: { type: Type.STRING },
                  capacity: { type: Type.STRING },
                  features: { 
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      const data = JSON.parse(response.text);
      
      // Safety check: ensure rooms is an array
      if (!data || !Array.isArray(data.rooms)) {
        console.warn("Gemini returned invalid structure, fallback to initial content.");
        return INITIAL_CONTENT;
      }

      // Merge with static images since AI can't generate real image URLs we want to use here
      const mergedRooms = data.rooms.map((room: any, index: number) => ({
        ...room,
        image: INITIAL_CONTENT.rooms[index]?.image || "https://picsum.photos/800/600"
      }));
      
      return {
        ...data,
        rooms: mergedRooms
      };
    }
    
    return INITIAL_CONTENT;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return INITIAL_CONTENT;
  }
};