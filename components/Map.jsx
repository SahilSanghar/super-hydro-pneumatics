"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt } from "react-icons/fa";

// Custom image marker icon (using an SVG or PNG image)
const customIcon = new L.Icon({
  iconUrl: "/marker.png", // You can replace this with any marker image URL (SVG/PNG)
  iconSize: [40, 40], // Size of the icon
  iconAnchor: [20, 40], // Anchor point of the icon
  popupAnchor: [0, -40], // Popup anchor
});

const Map1 = () => {
  const address = "Shop Number 17/18 Sheetal Shagun Industrial Estate, Sativali Road Opposite Mahindra Show Room, Near Valive Phata, Vasai East, Maharashtra, India";

  const googleMapsUrl = `https://google.com/maps/place/Super+Pneumatic+%26+Hydraulic+Co./@19.4067258,72.8620703,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a8cd4e3fce7d:0xa00362ddd8b1c9fd!8m2!3d19.4067208!4d72.8646452!16s%2Fg%2F11hbvw42vq?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D`;

  
  return (
    <div className="flex justify-center items-center py-10 bg-black">
      <div className="w-full max-w-4xl h-[400px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[19.3032, 72.8477]} // Latitude, Longitude
          zoom={16}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Free OpenStreetMap tiles
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={[19.3032, 72.8477]} icon={customIcon}>
          <Popup>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View on Google Maps
              </a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map1;
