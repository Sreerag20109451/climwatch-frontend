"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


interface MapProps {

  overlaytileurl : string
}

export default function MapComponent ( mapProp : MapProps) {
  return (
    <div className="w-full h-screen max-h-screen px-4">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        minZoom={2}
        maxZoom={5}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        {/* OpenStreetMap base layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Earth Engine overlay */}
        <TileLayer
          url={mapProp.overlaytileurl}
          attribution="Earth Engine"
        />
      </MapContainer>
    </div>
  );
}
