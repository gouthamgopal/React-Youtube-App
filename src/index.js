import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './Components/search_bar';

const API_KEY = 'AIzaSyD329y11g-8qdCkXdMGvNut0pdl0iJxYS0';

class App extends Component {
    render() {
        return(
            <div>
                <SearchBar/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));