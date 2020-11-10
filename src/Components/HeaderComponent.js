import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        // this.navhide = this.navhide.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="lg" className="header" id="header">
                    <div className="container-fluid">
                        <NavbarToggler className="d-lg-none mr-auto" id="navbutton" onClick={this.toggleNav}/>

                        <Collapse isOpen={this.state.isNavOpen} className="col-5 mr-auto d-none" navbar>
                            <Nav navbar className="d-contents">
                                <NavItem >
                                    <a className="nav-link" href="/home">
                                        Home
                                    </a>
                                </NavItem>
                                <NavItem >
                                    <a className="nav-link" href="/home#aboutus">
                                        About Us
                                    </a>
                                </NavItem>
                                <NavItem >
                                    <a className="nav-link" href="/home/economics">
                                        Economics
                                    </a>
                                </NavItem>
                                <NavItem >
                                    <a className="nav-link" href="/home/sociology">
                                        Sociology
                                    </a>
                                </NavItem>
                                <NavItem >
                                    <a className="nav-link" href="/home/psychology">
                                        Psychology
                                    </a>
                                </NavItem>
                            </Nav>
                        </Collapse>

                        <NavbarBrand className="mr-auto" href="/">
                            <h3 className="header-heading one">
                                <div>THE</div>
                                <div>&nbsp;HELPING</div>
                                <div>&nbsp;BOOK</div>
                            </h3>
                        </NavbarBrand>

                        <form className="col-4 search-button d-none d-lg-flex" action="javascript: searchresult()">
                            <input type="text" id="searchinput" name="query" className="col-10" required="required"/>
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>

                        <div className="btn-group">
                            <a className="btn btn-social-icon btn-instagram" target="_blank" rel="noopener noreferrer" href="http://instagram.com/thehelpingbookk"><i className="fa fa-instagram"><div></div></i></a>
                            <a className="btn btn-social-icon btn-facebook" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"><div></div></i></a>
                            <a className="btn btn-social-icon btn-quora" target="_blank" rel="noopener noreferrer" href="https://www.quora.com/profile/The-Helping-Book"><i className="fa fa-quora"><div></div></i></a>
                            <a className="btn btn-social-icon btn-email d-none" target="_blank" rel="noopener noreferrer" href="mailto:thehelpingbookk@gmail.com"><i className="fa fa-envelope-o"><div></div></i></a>
                        </div>
                    </div>
                    <div className="container d-lg-none justify-content-center">
                        <Collapse isOpen={this.state.isNavOpen} className="col-12 justify-content-center" navbar>

                            <form className="col-12 d-flex search-button" action="javascript: searchresult2()">
                                <input type="text" name="query" id="searchinput2" className="col-10" required="required"/>
                                <button className="col-2"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>

                            <Nav navbar className="d-contents">
                                <NavItem>
                                    <a className="nav-link" href="/home">
                                        Home
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="/home#aboutus">
                                        About Us
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="/home/economics">
                                        Economics
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="/home/sociology">
                                        Sociology
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="/home/psychology">
                                        Psychology
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <div className="btn-group">
                                        <a className="btn btn-social-icon btn-instagram" target="_blank" rel="noopener noreferrer" href="http://instagram.com/thehelpingbookk"><i className="fa fa-instagram"><div></div></i></a>
                                        <a className="btn btn-social-icon btn-facebook" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"><div></div></i></a>
                                        <a className="btn btn-social-icon btn-quora" target="_blank" rel="noopener noreferrer" href="https://www.quora.com/profile/The-Helping-Book"><i className="fa fa-quora"><div></div></i></a>
                                        <a className="btn btn-social-icon btn-email d-none" target="_blank" rel="noopener noreferrer" href="mailto:thehelpingbookk@gmail.com"><i className="fa fa-envelope-o"><div></div></i></a>
                                    </div>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;
