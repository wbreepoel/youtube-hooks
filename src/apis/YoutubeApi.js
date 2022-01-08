import axios from "axios"

const KEY = "AIzaSyACby94zd3x1QtwT8Yg24I8XpZ1EMGHJN4"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part:"snippet",
        type: "video",
        maxResults: 5,
        key: KEY

    }
})

