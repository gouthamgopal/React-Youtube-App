import React from 'react';

class VideoListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        const img_url = this.props.video.snippet.thumbnails.default.url;
        return(
            <li onClick = {() => {onVideoSelect(video)}} className="list-group-item">
                <div className= "video-list media">
                    <div className = "media-left">
                        <img className="media-object" src= {img_url}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {this.props.video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;