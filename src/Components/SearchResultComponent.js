import React,{ Component } from 'react';
import { BLOGS } from '../data/blogs';

class SearchResult extends Component{
    constructor(props){
        super(props);
        this.state = {
            blogs: BLOGS
        }
    }

    render(){
        return(
            <div></div>
        );
    }
}

export default SearchResult;