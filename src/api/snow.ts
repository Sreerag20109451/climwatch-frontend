
import axios from "axios"


const snowendpoint = import.meta.env.VITE_API_URL 

export const getGlobalSnowCover = async (
  region: string,
  quality: string,
  masks: string,
  threshold : string
) => {
  try {
    const url = new URL(snowendpoint as string);
    console.log(threshold)
     url.searchParams.append("dataset", "modis");

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

    if (threshold == 'apply thresholds') {
      url.searchParams.append("threshold", "40");
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

export const getRegionalSentinelNDSI = async (region: string, mask: string,threshold : string ) =>{

  try {
    console.log(threshold)
    const url = new URL(snowendpoint as string);
     url.searchParams.append("dataset", "sentinel");

    url.searchParams.append("region", region.toLowerCase());
    if (mask == 'true') {
      url.searchParams.append("sentnel_cloud_mask", "true");
    }
    if (threshold == 'apply thresholds') {
      url.searchParams.append("threshold", "0.4");
    }
  
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

}