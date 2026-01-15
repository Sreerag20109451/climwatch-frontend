import DefaultLayout from "@/layouts/default";
import { ModisForm } from "@/components/modis/modisform";
import { getGlobalSnowCover } from "@/api/snow";
import { MultiVisualisationShell } from "@/components/visualizationshell";
import { Legend } from "@/components/map";





export interface VisualizationData {
  url: string;
  vis_params: {
    min?: number;
    max?: number;
    palette?: string[];
    bands?: string[];
    [key: string]: any; 
  };
  legend: Legend;
}

export default function SnowPage() {
  const configs = [
    {
      id: "modis",
      label: "MODIS (NDSI)",
      fetchData: (p: any) => getGlobalSnowCover(p.region, p.quality, p.masks),
      FormComponent: ModisForm
    },

  ];

  return (
    <DefaultLayout>
      <MultiVisualisationShell datasets={configs} />
    </DefaultLayout>
  );
}