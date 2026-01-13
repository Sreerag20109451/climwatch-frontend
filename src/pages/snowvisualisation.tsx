import DefaultLayout from "@/layouts/default";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import { Button } from "@heroui/button";
import { getGlobalSnowCover } from "@/api/snow";
import MapComponent, { Legend } from "@/components/map";


  export interface Visualization {

    url : string,
    vis_params :object,
    legend : Legend


  }

export default function SnowPage() {
  const [formData, setFormData] = useState({
    dataset: "",
    region: "",
    quality: "",
    masks: ""
  });




 const [visualisation, setVisualization] =useState<Visualization | null>(null);


  const datasets = ["Modis Snow Cover"];
  const regions = ["Global", "Himalayas", "Alps", "Greenland", "Antarctic"];
  const quality_pixels = ["default", "best" , "good" , "ok" ]
  const masks = ["default" , "night" , "ocean", "inland water", "cloud",  "saturated" , "all"]


  const resetAll = () =>{

    setFormData ({
      ...formData,
      dataset : '',
      region :'',
      quality : '',
      masks: ''
    })

  }

  const handleDatasetChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      dataset: e.target.value,
      region: "", 
      quality : "",
      masks: ""

    });
  };

  const handleRegionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("gtd");
    setFormData({
      ...formData,
      region: e.target.value,
    });
  };

    const handleMaskChange = (e: ChangeEvent<HTMLSelectElement>) => {

    setFormData({
      ...formData,
      masks: e.target.value,
    });

    console.log(e.target.value)
  };



const handleQuality = (e : ChangeEvent<HTMLInputElement>) => {

setFormData({
      ...formData,
      quality: e.target.value,
    });

    console.log(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const responsedata = await getGlobalSnowCover(
        formData.region,
        formData.dataset,
        formData.quality,
        formData.masks
      );
      setVisualization(responsedata);

      // resetAll()
    } catch (ex) {
      // Alert goes here

      console.log(visualisation);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-start min-h-screen gap-4 p-4">
        <form
          className="flex flex-col gap-6 w-full max-w-md text-white"
          onSubmit={handleSubmit}
        >
          {/* Dataset */}
          <div className="flex flex-col gap-2 " id="dataset-container">
            <label className="text-sm">Select Dataset</label>
            <select id="dataset-select"
              value={formData.dataset}
              onChange={handleDatasetChange}
              className="bg-black border border-gray-500 rounded px-3 py-2"
            >
              <option value="">-- Select dataset --</option>
              {datasets.map((dataset) => (
                <option id={`dataset-option-${dataset}`} key={dataset} value={dataset}>
                  {dataset}
                </option>
              ))}
            </select>
          </div>

          {/* Region */}
          {formData.dataset && (
            <div className="flex flex-col gap-2" id="region-container">
              <label className="text-sm">Select Region</label>
              <select
              id="region-select"
                value={formData.region}
                onChange={handleRegionChange}
                className="bg-black border border-gray-500 rounded px-3 py-2"
              >
                <option value="">-- Select region --</option>
                {regions.map((region) => (
                  <option id={`dataset-option-${region}`} key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          )}
             {formData.region && (

              <div className="flex flex-col gap-2" id="quality-container">
                <label>Set Pixel Quality</label>
            <div className="flex flex-row md:flex-col gap-2">
              {
                quality_pixels.map(quality => (
                         <div className="text-sm flex flex-row gap-2 justify-start">
                   <input
                type="radio"
                name="quality"
                value={quality}
                id={`quality-option-${quality}`}
                checked={formData.quality == quality}
                onChange={handleQuality}
                className="bg-black border border-gray-500 rounded px-3 py-2"
              >
              </input>
              <p className="capitalize">{quality}</p>
              </div>
              

                ))
              }
             
            </div>
            </div>
          )}

               {/* Region */}
          {formData.quality && (
            <div className="flex flex-col gap-2" id="masks-container">
              <label className="text-sm">Select Masks</label>
              <select
              id="region-select"
                value={formData.masks}
                onChange={handleMaskChange}
                className="bg-black border border-gray-500 rounded px-3 py-2"
              >
                <option value="">-- Select Masks --</option>
                {masks.map((mask) => (
                  <option className="capitalize" id={`dataset-option-${mask}`} key={mask} value={mask}>
                    {mask}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Submit */}
          {formData.region && (
            <Button id="submit-form" type="submit" color="primary">
              Submit
            </Button>
          )}
        </form>

        {visualisation != null &&  
        <MapComponent legend={visualisation.legend} overlaytileurl={visualisation.url}/>
        }
      </section>
    </DefaultLayout>
  );
}
