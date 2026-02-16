import { useState } from "react";
import MapComponent from "@/components/map";
import { VisualizationData } from "@/pages/snowvisualisation";

export interface DatasetConfig<T> {
  id: string;
  label: string;
  fetchData: (params: T) => Promise<VisualizationData>;
  FormComponent: React.ComponentType<{ onSubmit: (params: T) => void }>;
}

interface MultiVisualisationShellProps {
  datasets: DatasetConfig<any>[];
}

export function MultiVisualisationShell({ datasets }: MultiVisualisationShellProps) {
  const [activeDataset, setActiveDataset] = useState<DatasetConfig<any> | null>(null);
  const [visualization, setVisualization] = useState<VisualizationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = async (params: any) => {
    if (!activeDataset) return;
    setIsLoading(true);
    try {
      const responseData = await activeDataset.fetchData(params);
      setVisualization(responseData);
    } catch (error) {
      console.error(`Error loading ${activeDataset.label}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden bg-slate-950">
      {/* Map Layer */}
      {visualization && (
        <div className="absolute inset-0 z-0 animate-in fade-in duration-1000">
          <MapComponent 
            legend={visualization.legend!!} 
            overlaytileurl={visualization.url} 
            resolution={visualization.resolution}
          />
        </div>
      )}

      {/* Control Overlay */}
      {/* Fixed: Simplified positioning to prevent map overflow on small screens */}
      <div className="absolute top-0 left-0 right-0 md:top-6 md:left-6 z-10 p-4 md:p-0 w-full md:max-w-sm space-y-4">
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-2xl text-white">
          
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-3 block">
            Select Observation Source
          </label>
          
          {/* FIXED: Changed 'flex' to 'flex-col md:flex-row' to stack buttons on mobile */}
          <div className="flex flex-col md:flex-row bg-zinc-900/50 p-1.5 rounded-xl mb-6 border border-white/5 gap-1.5 md:gap-0">
            {datasets.map((ds) => (
              <button
                key={ds.id}
                onClick={() => {
                  setActiveDataset(ds);
                  setVisualization(null);
                }}
                className={`w-full md:flex-1 py-2.5 md:py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  activeDataset?.id === ds.id 
                    ? "bg-white text-black shadow-lg scale-[1.01]" 
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {ds.label}
              </button>
            ))}
          </div>

          {activeDataset ? (
            <div className="animate-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-base md:text-lg font-bold tracking-tight uppercase">
                    {activeDataset.label}
                </h1>
                {isLoading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-emerald-500 border-t-transparent" />
                )}
              </div>
              
              <activeDataset.FormComponent onSubmit={handleFetchData} />
            </div>
          ) : (
            <p className="text-xs text-zinc-400 italic">Please select a dataset to configure parameters.</p>
          )}
        </div>
      </div>

      {/* Global Initial State */}
      {!visualization && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
           <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <span className="text-2xl">🏔️</span>
              </div>
              <p className="text-zinc-500 text-sm bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/5 max-w-xs mx-auto">
                {activeDataset ? `Configure ${activeDataset.label} parameters` : "Select a dataset to begin visualization"}
              </p>
           </div>
        </div>
      )}
    </div>
  );
}