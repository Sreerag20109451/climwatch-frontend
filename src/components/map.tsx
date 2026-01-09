"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
  return (
    <div className="w-full h-screen max-h-screen px-4">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
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
          url="https://earthengine.googleapis.com/v1/projects/earthengine-legacy/maps/ccd836d141291ed4fc276bf407950aad-0054f7ed353ae2c8b13f18a0330ebc35/tiles/{z}/{x}/{y}"
          attribution="Earth Engine"
        />
      </MapContainer>
    </div>
  );
}
