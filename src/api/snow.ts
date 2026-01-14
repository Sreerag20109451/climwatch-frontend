import axios from "axios"



const snowendpoint = import.meta.env.VITE_API_URL ||  import.meta.env.VITE_API_URL_CODESPACES;
export const getGlobalSnowCover = async (
  region: string,
  dataset: string,
  quality: string,
  masks: string
) => {
  try {
    let url = new URL(snowendpoint as string);
    if (dataset.toLowerCase() === "modis snow cover") {
      if (region.toLowerCase() !== "global") {
        console.log(region.toLowerCase())
        url.searchParams.append("region", region.toLowerCase());
      }

      if (quality) {
        url.searchParams.append("qa_mask", quality.toLowerCase());
      }
      if (masks) {
  let normalizedMask = masks.toLowerCase();

  if (normalizedMask.includes("inland")) {
    normalizedMask = "inlandw";
  } else if (normalizedMask.includes("no")) {
    normalizedMask = "nod";
  }

  url.searchParams.append("snow_class_mask", normalizedMask);
}

      // Make the GET request
      const response = await axios.get(url.toString());
      if (response.data) {
        console.log("Snow data:", response.data);
        return response.data;
      } else {
        console.error("No data returned from the server");
      }
    } else {
      console.error("Dataset not supported:", dataset);
    }
  } catch (err) {
    console.error("Error fetching snow data:", err);
  }

  return null;
};