import React, { Component } from 'react';

class Blog extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = this.props.blogdetails.name;
    }

    render(){
        return(
            <div className="container blogpost">
                <h1 className="blog-title" dangerouslySetInnerHTML={{__html:this.props.blogdetails.name}}/>
                <div dangerouslySetInnerHTML={{__html:this.props.blogdetails.description}}/>
                <div className="mb-3" dangerouslySetInnerHTML={{__html:this.props.blogdetails.author}}/>
            </div>
        );
    }
}

export default Blog;