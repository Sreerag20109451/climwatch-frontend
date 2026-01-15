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
  // Initialize without a selection to force user to pick one
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
          />
        </div>
      )}

      {/* Control Overlay */}
      <div className="absolute top-6 left-6 z-10 w-full max-w-sm space-y-4">
        <div className="bg-black/70 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl text-white">
          
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 block">
            Select Observation Source
          </label>
          
          <div className="flex bg-zinc-900/50 p-1 rounded-xl mb-6 border border-white/5">
            {datasets.map((ds) => (
              <button
                key={ds.id}
                onClick={() => {
                  setActiveDataset(ds);
                  setVisualization(null); // Clear previous map on source switch
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  activeDataset?.id === ds.id 
                    ? "bg-white text-black shadow-lg scale-[1.02]" 
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
                <h1 className="text-lg font-bold tracking-tight">{activeDataset.label}</h1>
                {isLoading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-emerald-500 border-t-transparent" />
                )}
              </div>
              
              {/* Inject the specific form */}
              <activeDataset.FormComponent onSubmit={handleFetchData} />
            </div>
          ) : (
            <p className="text-sm text-zinc-400 italic">Please select a dataset to configure parameters.</p>
          )}
        </div>
      </div>

      {/* Global Initial State */}
      {!visualization && !isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="text-center">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                <span className="text-2xl">🏔️</span>
              </div>
              <p className="text-zinc-500 text-sm bg-black/40 px-6 py-2 rounded-full backdrop-blur-md border border-white/5">
                {activeDataset ? `Configure ${activeDataset.label} parameters` : "Select a dataset to begin visualization"}
              </p>
           </div>
        </div>
      )}
    </div>
  );
}