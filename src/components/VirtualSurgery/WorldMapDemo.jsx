"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="py-40 bg-gray-100 w-full flex justify-center items-center">
      <WorldMap
        dots={[
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
            end: { lat: 48.8566, lng: 2.3522 }, // Paris, France
          },
          {
            start: { lat: 48.8566, lng: 2.3522 }, // Paris, France
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
          },
          {
            start: { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
            end: { lat: 40.7128, lng: -74.006 }, // New York, USA
          },
          {
            start: { lat: 40.7128, lng: -74.006 }, // New York, USA
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
          },
          {
            start: { lat: -1.2921, lng: 36.8219 }, // Nairobi, Kenya
            end: { lat: 55.7558, lng: 37.6173 }, // Moscow, Russia
          },
          {
            start: { lat: 55.7558, lng: 37.6173 }, // Moscow, Russia
            end: { lat: 28.7041, lng: 77.1025 }, // Delhi, India
          },
          {
            start: { lat: 28.7041, lng: 77.1025 }, // Delhi, India
            end: { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brazil
          },
        ]}
      />
    </div>
  );
}
