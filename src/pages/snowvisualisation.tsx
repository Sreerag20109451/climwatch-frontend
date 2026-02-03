import DefaultLayout from "@/layouts/default";
import { ModisForm } from "@/components/modis/modisform";
import { getGlobalSnowCover, getRegionalSentinelNDSI } from "@/api/snow";
import { MultiVisualisationShell } from "@/components/visualizationshell";
import { Legend } from "@/components/map";
import { SentinelForm } from "@/components/sentinel/sentinelform";




export type Resolution  = "high" | "mid" | "low"

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
  resolution : Resolution
}

export default function SnowPage() {
  const configs = [
    {
      id: "modis",
      label: "MODIS (NDSI)",
      fetchData: (p: any) => getGlobalSnowCover(p.region, p.quality, p.masks),
      FormComponent: ModisForm
    },
      {
      id: "sentinel",
      label: "SENTINEL (REGIONAL NDSI)",
      fetchData: (p: any) => getRegionalSentinelNDSI(p.region, p.mask),
      FormComponent: SentinelForm
    },
    

  ];

  return (
    <DefaultLayout>
      <MultiVisualisationShell datasets={configs} />
    </DefaultLayout>
  );
}