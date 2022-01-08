import "./VideoItem.css"
import React from "react"


const VideoItem = ({videoContent, VideoSelect}) => {
   
        return (
            <div onClick={() => VideoSelect(videoContent)} className="video-item item">
                <img alt = {videoContent.snippet.title} className="ui image" src={videoContent.snippet.thumbnails.medium.url}/>
                <div className="content video-content">
                    <div className="header video-header">
                        {videoContent.snippet.title}
                    </div>
                </div>
            </div>
        )
   
}

export default VideoItem