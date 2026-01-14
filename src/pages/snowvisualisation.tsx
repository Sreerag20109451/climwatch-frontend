// pages/snow.tsx
import { useState } from "react";
import DefaultLayout from "@/layouts/default";
import MapComponent, { Legend } from "@/components/map";
import { ModisForm, ModisParams } from "@/components/modis/modisform";
import { getGlobalSnowCover } from "@/api/snow";

export interface Visualization {
  url: string;
  vis_params: object;
  legend: Legend;
}

export default function SnowPage() {
  const [visualization, setVisualization] = useState<Visualization | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchData = async (params: ModisParams) => {
    setIsLoading(true);
    try {
      const responseData = await getGlobalSnowCover(
        params.region,
        params.dataset,
        params.quality,
        params.masks
      );
      setVisualization(responseData);
    } catch (error) {
      console.error("Failed to fetch snow cover data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col lg:flex-row items-center justify-start lg:items-start min-h-screen gap-4 p-4">
        {/* MODIS Control Component */}
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold mb-4">Snow Cover Analysis</h1>
          <ModisForm onSubmit={handleFetchData} />
          {isLoading && <p className="text-blue-400 mt-2">Loading Map Data...</p>}
        </div>

        {/* Map Display Component */}
        <div className="w-full h-[600px] lg:h-screen sticky top-4">
          {visualization ? (
            <MapComponent 
              legend={visualization.legend} 
              overlaytileurl={visualization.url} 
            />
          ) : (
            <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center text-gray-500 border border-gray-800">
              Select parameters and click submit to view data
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}