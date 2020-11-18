import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Adsense from 'react-adsense';
import { Link } from 'react-router-dom';
 
class SubjectPage extends Component{

    constructor(props){
        super(props)
        this.myRef = React.createRef()  
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        document.title = "THB | "+this.props.subject.name.charAt(0).toUpperCase() + this.props.subject.name.slice(1);
    }

    render(){

        const allblogs = this.props.bloglist.map((blog) => {
                return(
                    <Card className="mb-5" key= {blog.id}>
                        <CardTitle className="mt-3"><h1>{blog.name}</h1></CardTitle>
                        <CardBody>
                            <CardText dangerouslySetInnerHTML={{__html:blog.mainpara}}></CardText>
                            <Link to={`/home/${this.props.subject.name}/${blog.id}`} className="blog-button"><button>Continue Reading...</button></Link>
                        </CardBody>
                    </Card>
                );
            }
        );

        return(
            <div ref={this.myRef} className="container-fluid subjects">
                <div className="row">
                    <div className="col-sm-2 d-none d-sm-block position-fixed left-0"></div>
                    <div className="col-sm-8 offset-sm-2">
                        <div className="mb-5">
                            <h1 className="pagetitle">{this.props.subject.name}</h1>
                            <div className="pageimage col-12 d-flex" dangerouslySetInnerHTML={{__html:this.props.subject.titleimage}}/>
                            <h3 className="pageline" dangerouslySetInnerHTML={{__html:this.props.subject.titleline}}/>
                        </div>
                        <Adsense.Google className="mb-3" client="ca-pub-3213534843834091" slot="3568463357" style={{ display: 'block' }} layout="in-article" format="fluid"/>
                        <h1 className="pageline extralarge">Blogs</h1>
                        {allblogs}
                        <Adsense.Google className="mb-3" client="ca-pub-3213534843834091" slot="3568463357" style={{ display: 'block' }} layout="in-article" format="fluid"/>
                    </div>
                    <div className="col-sm-2 d-none d-sm-block position-fixed right-0"></div>
                </div>
            </div>
        );
    }
}

export default SubjectPage;