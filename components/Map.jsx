"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Map_marker.svg", // Example custom icon
  iconRetinaUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Map_marker.svg",
  iconSize: [30, 40], // Size of the icon
  iconAnchor: [15, 40], // Point of the icon which will correspond to marker's location
});

const Map1 = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-black">
      <div className="w-full max-w-4xl h-[400px] rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[19.06437, 73.01582]} // Latitude, Longitude
          zoom={16}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Free OpenStreetMap tiles
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={[19.06437, 73.01582]} icon={customIcon}>
            <Popup>Plot No. 39, Sector 20, Om Arcade Ground Floor</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map1;
