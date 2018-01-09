import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const videoItem = this.props.videos.map((video) => {
            return <VideoListItem 
                                    key = {video.etag} 
                                    video = {video}
                                    onVideoSelect = {this.props.onVideoSelect}
                                                    ></VideoListItem>
        })
        return(
            <ul className="col-md-4 list-group">
                {videoItem}
            </ul>
        )
    }
}

export default VideoList;