import { NewsItems } from "@/components/newsfeed/newsfeed"
import axios from "axios"

const endpoint = import.meta.env.VITE_API_URL

const newsfeedendpoint = `${endpoint}/newsfeed/getdailynews`


interface NewsFeedResponse {
    message: string; 
    data: NewsItems; 
}
export const getnewsfeed = async () => {

    const response = await axios.get(newsfeedendpoint, {
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (response.status== 200) {

        const newsdataresponse : NewsFeedResponse = response.data

        console.log(newsdataresponse.data)
        return newsdataresponse.data 
    }
    else throw new Error("Failed to fetch newsfeed");
}