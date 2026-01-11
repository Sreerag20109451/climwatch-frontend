import DefaultLayout from "@/layouts/default";
import { ChangeEvent, useState } from "react";
import { Button } from "@heroui/button";
import { getGlobalSnowCover } from "@/api/snow";
import MapComponent from "@/components/map";


  export interface Visualization {

    url : string,
    vis_params :object,
    legend : object


  }

export default function SnowPage() {
  const [formData, setFormData] = useState({
    dataset: "",
    region: "",
  });




 const [visualisation, setVisualization] =useState<Visualization | null>(null);


  const datasets = ["Modis Snow Cover"];
  const regions = ["Global", "Himalayas", "Alps", "Greenland", "Antarctic"];

  const handleDatasetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      dataset: e.target.value,
      region: "", // reset region when dataset changes
    });
  };

  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("gtd");
    setFormData({
      ...formData,
      region: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("submitted");

    try {
      const responsedata = await getGlobalSnowCover(
        formData.region,
        formData.dataset
      );
      setVisualization(responsedata);
    } catch (ex) {
      // Alert goes here

      console.log(visualisation);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex items-start justify-center min-h-screen p-4">
        <form
          className="flex flex-col gap-6 w-full max-w-md text-white"
          onSubmit={handleSubmit}
        >
          {/* Dataset */}
          <div className="flex flex-col gap-2">
            <label className="text-sm">Select Dataset</label>
            <select
              value={formData.dataset}
              onChange={handleDatasetChange}
              className="bg-black border border-gray-500 rounded px-3 py-2"
            >
              <option value="">-- Select dataset --</option>
              {datasets.map((dataset) => (
                <option key={dataset} value={dataset}>
                  {dataset}
                </option>
              ))}
            </select>
          </div>

          {/* Region */}
          {formData.dataset && (
            <div className="flex flex-col gap-2">
              <label className="text-sm">Select Region</label>
              <select
                value={formData.region}
                onChange={handleRegionChange}
                className="bg-black border border-gray-500 rounded px-3 py-2"
              >
                <option value="">-- Select region --</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit */}
          {formData.region && (
            <Button type="submit" color="primary">
              Submit
            </Button>
          )}
        </form>

        {visualisation != null &&  
        <MapComponent overlaytileurl={visualisation.url}/>
        }
      </section>
    </DefaultLayout>
  );
}
