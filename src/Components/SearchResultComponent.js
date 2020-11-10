import React,{ Component } from 'react';
import { BLOGS } from '../data/blogs';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';

class SearchResult extends Component{

    constructor(props){
        super(props);
        this.state = {
            blogs: BLOGS
        }
    }

    render(){

        const searchresults = this.props.display.map((blog) => {
                return(
                    <Card className="mb-5" key= {blog.id}>
                        <CardTitle className="mt-3"><h1>{blog.name}</h1></CardTitle>
                        <CardBody>
                            <CardText dangerouslySetInnerHTML={{__html:blog.mainpara}}></CardText>
                            <Link to={`/home/${blog.category}/${blog.id}`} className="blog-button"><button>Continue Reading...</button></Link>
                        </CardBody>
                    </Card>
                );
            }
        );

        return(
            <div className="container">
                {searchresults}
            </div>
        );
    }
}

export default SearchResult;