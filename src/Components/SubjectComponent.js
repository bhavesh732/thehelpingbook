import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import { Link } from 'react-router-dom';
 
class SubjectPage extends Component{

    constructor(props){
        super(props)
        this.myRef = React.createRef()  
    }

    componentDidMount() {
        window.scrollTo(0, 0)
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
            <div ref={this.myRef} className="container subjects">
                <div className="mb-5">
                    <h1 className="pagetitle">{this.props.subject.name}</h1>
                    <div className="pageimage col-12 d-flex" dangerouslySetInnerHTML={{__html:this.props.subject.titleimage}}/>
                    <h3 className="pageline" dangerouslySetInnerHTML={{__html:this.props.subject.titleline}}/>
                </div>
                <h1 className="pageline extralarge">Blogs</h1>
                {allblogs}
            </div>
        );
    }
}

export default SubjectPage;