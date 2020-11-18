import React, { Component } from 'react';
import Adsense from 'react-adsense';

class Blog extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = this.props.blogdetails.name;
    }

    render(){
        return(
            <div className="container-fluid subjects">
                <div className="row">
                    <div className="offset-sm-2 blogpost col-sm-8">
                        <h1 className="blog-title" dangerouslySetInnerHTML={{__html:this.props.blogdetails.name}}/>
                        <div dangerouslySetInnerHTML={{__html:this.props.blogdetails.description}}/>
                        <div className="mb-3" dangerouslySetInnerHTML={{__html:this.props.blogdetails.author}}/>
                        <Adsense.Google className="mb-3" client="ca-pub-3213534843834091" data-adtest="on" slot="9356810808" style={{ display: 'block' }} layout="in-article" format="fluid"/>
                    </div>
                    <Adsense.Google className="col-sm-2 d-sm-block left" client='ca-pub-3213534843834091' slot='8370198046' format='auto' responsive='true' />
                    <Adsense.Google className="col-sm-2 d-sm-block right" client='ca-pub-3213534843834091' slot='4289490418' format='auto' responsive='true' />
                </div>
            </div>
        );
    }
}

export default Blog;