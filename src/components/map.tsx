import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export interface LegendItem {
  color: string;
  label: string;
}

export interface Legend {
  legend: Record<string, string>;
  chartname: string;
}

export interface MapProps {
  overlaytileurl: string;
  legend: Legend;
}

const convertLegendToItems = (legend: Legend): LegendItem[] =>
  Object.entries(legend.legend).map(([color, label]) => ({ color, label }));

export default function MapComponent({ overlaytileurl, legend }: MapProps) {
  const legendItems = convertLegendToItems(legend);

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        minZoom={2}
        maxZoom={5}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {overlaytileurl && (
          <TileLayer 
            key={overlaytileurl} 
            url={overlaytileurl} 
            attribution="Google Earth Engine" 
          />
        )}
      </MapContainer>

      {/* Legend Overlay - Moved to Bottom Right to avoid Controller overlap */}
      <div className="absolute bottom-10 right-6 z-[1000] pointer-events-none">
        <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl text-white min-w-[180px]">
          <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              {legend.chartname || "Map Legend"}
            </h4>
          </div>
          
          <div className="space-y-2.5">
            {legendItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-2.5 rounded-sm shadow-sm ring-1 ring-white/10"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[11px] font-medium text-zinc-300 capitalize">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}