import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Resolution } from "@/pages/snowvisualisation";

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
  resolution: Resolution;
}

const convertLegendToItems = (legend: Legend): LegendItem[] =>
  Object.entries(legend.legend).map(([color, label]) => ({ color, label }));

export default function MapComponent({ overlaytileurl, legend, resolution }: MapProps) {
  const legendItems = convertLegendToItems(legend);

  let maxZom = 0;
  switch (resolution) {
    case "high": maxZom = 9; break;
    case "mid": maxZom = 5; break;
    case "low": maxZom = 3; break;
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        minZoom={2}
        maxZoom={maxZom}
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

      {/* Controller/Legend Overlay */}
      {/* Changed: Use left-4 right-4 for mobile to prevent horizontal overflow, then md:left-auto for desktop */}
      <div className="absolute bottom-6 left-4 right-4 md:left-auto md:right-6 md:bottom-10 z-[1000] pointer-events-none">
        <div className="bg-slate-950/80 backdrop-blur-xl border border-white/10 p-4 md:p-5 rounded-2xl shadow-2xl text-white md:min-w-[180px] pointer-events-auto">
          <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 truncate">
              {legend.chartname || "Map Legend"}
            </h4>
          </div>
          
          {/* Added max-height and overflow-y-auto to prevent vertical overflow on small screens */}
          <div className="space-y-2.5 max-h-[25vh] overflow-y-auto pr-1">
            {legendItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-5 h-2.5 rounded-sm shadow-sm ring-1 ring-white/10 shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-[11px] font-medium text-zinc-300 capitalize truncate">
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