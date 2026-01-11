import axios from "axios"


const snowendpoint = "http://127.0.0.1:8000/apiv0/snow/global_snow_cover"

export const getGlobalSnowCover = async (region : string, dataset : string) =>{

    console.log('global scover caled')

    let response = null

    if(region == 'Global' && dataset == 'Modis Snow Cover'){

        response = await axios.get(snowendpoint)
        if(response.data){
            console.log(response.data)
            return response.data
        }
        else console.log('Error happend')
    }
  

    else if(region != 'Global') {
        region = region.toLowerCase()
        console.log(region)
        response = await axios.get(`${snowendpoint}?region=${region}`)
        if(response.data){
            console.log(response.data)
            return response.data
        }
        else console.log('Error happend')
        
    }


    

}
