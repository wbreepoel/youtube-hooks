import React, {useEffect, useState} from "react"
import YoutubeApi from "../apis/YoutubeApi"

const useVideos = ({defaultSearchTerm}) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    },[defaultSearchTerm]) 

    const search = async(term) => { 
        const response = await YoutubeApi.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                q: term
            }
        })

        setVideos(response.data.items)
        
        }

    return [videos, search]
}

export default useVideos