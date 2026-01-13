import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface LegendItem {
  color: string;
  label: string;
}

interface Legend {
  legend: Record<string, string>;
  chartname: string;
}

interface MapProps {
  overlaytileurl: string;
  legend: Legend;
}

// Helper to convert backend legend to array
const convertLegendToItems = (legend: Legend): LegendItem[] =>
  Object.entries(legend.legend).map(([color, label]) => ({ color, label }));

export default function MapComponent({ overlaytileurl, legend }: MapProps) {
  const legendItems = convertLegendToItems(legend);

  return (
    <div className="w-full h-screen max-h-screen px-4">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        minZoom={2}
        maxZoom={5}
        scrollWheelZoom={true}
        className="w-full h-full relative"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <TileLayer url={overlaytileurl} attribution="Earth Engine" />

        {/* Legend as overlay inside MapContainer */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1000,
            background: "#fff",
            padding: 10,
            borderRadius: 6,
            boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            pointerEvents: "none",
          }}
        >
          <strong>{legend.chartname}</strong>
          {legendItems.map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", marginTop: 4 }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: item.color,
                  marginRight: 6,
                }}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </MapContainer>
    </div>
  );
}
