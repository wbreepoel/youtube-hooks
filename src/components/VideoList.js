import React from "react"
import VideoItem from "./VideoItem"

const VideoList = ({videos, VideoSelect})=> {
    const videosList = videos.map((video)=> {
        return <VideoItem key={video.id.videoId} VideoSelect={VideoSelect} videoContent = {video} />
    })

    return (
        <div className="ui relaxed divided list">{videosList}</div>
    )
}

export default VideoList