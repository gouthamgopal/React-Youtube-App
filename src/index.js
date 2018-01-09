import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';

const API_KEY = 'AIzaSyDIh_n8YCGpDZTG2Mtjdv-rmJiC9QadOi8';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null 
        };

        this.videoSearch('surfboards');        
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            // console.log(data);
            this.setState({ 
                videos: data,
                selectedVideo: data[0] 
            });
        });
    }
    render() {
        return(
            <div>
                <SearchBar onSearchTermChange = {term => this.videoSearch(term)}></SearchBar>
                <VideoDetail video = {this.state.selectedVideo}></VideoDetail>
                <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} 
                           videos = {this.state.videos}></VideoList>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));