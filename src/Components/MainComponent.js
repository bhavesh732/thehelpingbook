import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Homepage from './HomeComponent';
import SubjectPage from './SubjectComponent';
import Blog from './BlogPostComponent';
import { BLOGS } from '../data/blogs';
import { SUBJECTS } from '../data/subjects';

class Main extends Component{

    constructor(props){
        super(props)

        this.state = {
            subjects: SUBJECTS,
            blogs: BLOGS
        }
    }

    
    render(){
        const PageDetails = ({match}) => {
            // console.log(this.state.subjects.filter((subject) => subject.name === match.params.subjectname)[0]);
            // console.log(this.state.blogs.filter((blog) => blog.category === match.params.subjectname));
			return(
				<SubjectPage subject={this.state.subjects.filter((subject) => subject.name === match.params.subjectname)[0]}
				bloglist={this.state.blogs.filter((blog) => blog.category === match.params.subjectname)}
				/>
			);
        }
        
        const BlogPost = ({match}) => {
            console.log(this.state.blogs.filter((blog) => blog.id === parseInt(match.params.blogId))[0]);
			return(
				<Blog blogdetails={this.state.blogs.filter((blog) => blog.id === parseInt(match.params.blogId))[0]}/>
			);
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/home" component={Homepage}/>
                    <Route exact path="/home/:subjectname" component={PageDetails}/>
                    <Route path="/home/:subjectname/:blogId" component={BlogPost}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;