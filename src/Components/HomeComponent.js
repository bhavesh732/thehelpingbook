import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/images/logo.png'
class Homepage extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){

        return(
            <div className="container-fluid" id="homepage">
                <div className="row page-heading" id="header2">
                    <div className="col-12 d-flex parallax">
                        <div className="col-lg-6 offset-lg-6 d-flex background-dark">
                            <div className="align-items-center m-auto">
                                <img src={Logo} className="img-fluid logo" alt="The Helping Book"/>
                                <span className="welcome extralarge">Welcome to</span>
                                <h1 className="bodyanimate">The Helping Book</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutus container-fluid" id="aboutus">
                    <div className="row col-12 d-flex">
                        <div className="jumbotron">
                            <h1 className="bodyanimate col-12">About Us</h1>
                            <p className="col-12">The Helping Book is an end  to end solution to all your study notes and guides. We strive to provide students with the best customized notes that help them learn the subject better.
                            Through our blogs, you can clear your concepts and get your doubts solved easily and completely free of cost. Our notes are carefully curated to avoid any sort of plagiarism and deliver the best study materials.
                            <br/><strong>We also strive to provide you with personalised assistance with any of your assignments and doubts.</strong></p>
                        </div>
                    </div>
                </div>

                <h1 className="extralarge container">Core Subjects</h1>

                <div className="container-fluid core-subjects">
                    <div className="row">
                        <div className="col-sm-6 m-15 hoverdiv">
                            <div className="row-header parallax">
                                <div className="col-12 d-flex background-dark">
                                    <div className="m-auto">
                                        <h1 className="align-items-center col-12">Economics</h1>
                                        <p className="showdiv col-12">
                                            Economics has been one of the most interesting yet a very diversified subject to study. People tend to be a part of and use this subject in their daily lives without realising the significance of the same.
                                            <br/><Link to="/home/economics"><button>Read More Blogs on Economics</button></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 m-15 hoverdiv">
                            <div className="row-header parallax">
                                <div className="col-12 d-flex background-dark">
                                    <div className="m-auto">
                                        <h1 className="align-items-center col-12">Sociology</h1>
                                        <p className="showdiv col-12">
                                            You ever wondered how society functions? Or how does a society establish a pattern of socialisation? Sociology strives to answer these questions. Sociology is one of the most diversified social sciences available.
                                            <br/><Link to="/home/sociology"><button>Read More Blogs on Sociology</button></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 m-15 hoverdiv">
                        <div className="row row-header parallax">
                            <div className="col-12 d-flex background-dark">
                                <div className="m-auto">
                                    <h1 className="align-items-center col-12">Psychology</h1>
                                    <p className="showdiv col-12">
                                        Have you ever wondered what makes people do the things they do? If the human mind and behaviour intrigues you, then Psychology is the subject for you! It deals with understanding others but more importantly analyse our behaviour and reactions.                                        <br/><Link to="/home/psychology"><button>Read More Blogs on Psychology</button></Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;