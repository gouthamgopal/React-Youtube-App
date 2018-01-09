import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};
    }
    render() {
        return(
            <div className = "search-bar">
                <input value = {this.state.term} onChange = { (event) => this.setState({term: event.target.value}) }/>
                <button className="btn btn-primary" onClick = {() => this.onInputChange(this.state.term)}>Search</button>
            </div>
        );
    }

    onInputChange(term) {
        this.props.onSearchTermChange(term);
    }
 
}

export default SearchBar;