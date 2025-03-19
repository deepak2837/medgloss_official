import Image from "next/image"
import { WorldMapDemo } from "./WorldMapDemo"
import { WorldMap } from "../ui/world-map"


export default function Worldwide() {
  return (
    <div className="h-auto  bg-white relative overflow-hidden">
      {/* Gradient Orbs for visual interest */}
      

      {/* VR Images Arc */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 md:mb-10 md:block hidden">
        <div className="flex justify-center items-center mb-10">
          <div className="grid grid-cols-5 gap-4 md:gap-8">
            {[
              { city: "Tokyo", offset: "translate-y-8" },
              { city: "Madrid", offset: "translate-y-4" },
              { city: "Los Angeles", offset: "" },
              { city: "Sydney", offset: "translate-y-4" },
              { city: "Paris", offset: "translate-y-8" },
            ].map((location, index) => (
              <div
                key={location.city}
                className={`transform transition-transform duration-500 hover:-translate-y-2 ${location.offset}`}
              >
                <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-2xl overflow-hidden shadow-xl">
                  
                  <Image src="/4.gif" alt={`VR User in ${location.city}`} fill className="object-cover" />
                </div>
                <p className="text-black text-center mt-3 text-sm md:text-base font-medium">{location.city}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        {/* Hero Content */}
        <div className="text-center mt-4 max-w-4xl mx-auto">
          <h1 className="text-black text-2xl md:text-3xl font-serif leading-tight tracking-tight ">
            Advance your healthcare strategy with expert guidance across the world.
          </h1>
          <div className="mt-10">
           <WorldMap 
           dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
          ]}
           />
          </div>
        </div>
       
      
    </div>
  )
}

