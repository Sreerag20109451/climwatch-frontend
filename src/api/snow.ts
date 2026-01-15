
import axios from "axios"


const snowendpoint = import.meta.env.VITE_API_URL ||  import.meta.env.VITE_API_URL_CODESPACES;

export const getGlobalSnowCover = async (
  region: string,
  quality: string,
  masks: string
) => {
  try {
    const url = new URL(snowendpoint as string);

    url.searchParams.append("region", region.toLowerCase());

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

    // Execute the request using axios
    const response = await axios.get(url.toString());
    
    if (response.data) {
      return response.data;
    } else {
      console.error("No data returned from the server");
    }
  } catch (err) {
    console.error("Error fetching geospatial data:", err);
  }

  return null;
};