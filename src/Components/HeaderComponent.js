import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                    <div className="container">
                        <NavbarToggler className="d-lg-none mr-auto" id="navbutton" onClick={this.toggleNav}/>

                        <Collapse isOpen={this.state.isNavOpen} className="col-6 col-lg-6 col-sm-8 mr-auto d-none" navbar>
                            <Nav navbar className="d-contents">
                                <NavItem className="bodyanimate">
                                    <NavLink className="nav-link" to="/home">
                                        Home 
                                    </NavLink>
                                </NavItem>
                                <NavItem className="bodyanimate">
                                    <a className="nav-link" href="/home#aboutus">
                                        About Us
                                    </a>
                                </NavItem>
                                <NavItem className="bodyanimate">
                                    <NavLink className="nav-link" to={`/home/${'psychology'}`}>
                                        Psychology
                                    </NavLink>
                                </NavItem>
                                <NavItem className="bodyanimate">
                                    <NavLink className="nav-link" to={`/home/${'sociology'}`}>
                                        Sociology
                                    </NavLink>
                                </NavItem>
                                <NavItem className="bodyanimate">
                                    <NavLink className="nav-link" to={`/home/${'economics'}`}>
                                        Economics
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                        <NavbarBrand className="mr-auto bodyanimate" href="/">
                            The Helping Book
                        </NavbarBrand>

                        <div className="btn-group">
                            <a className="btn btn-social-icon btn-instagram" href="http://google.com/+"><i className="fa fa-instagram"><div></div></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"><div></div></i></a>
                            <a className="btn btn-social-icon btn-quora" href="http://www.linkedin.com/in/"><i className="fa fa-quora"><div></div></i></a>
                            <a className="btn btn-social-icon btn-email d-none" href="mailto:"><i className="fa fa-envelope-o"><div></div></i></a>
                        </div>
                    </div>
                    <div className="container d-lg-none justify-content-center">
                        <Collapse isOpen={this.state.isNavOpen} className="col-6 justify-content-center" navbar>
                            <Nav navbar className="d-contents">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home 
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <a className="nav-link" href="/home#aboutus">
                                        About Us
                                    </a>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to={`/home/${'psychology'}`}>
                                        Psychology
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to={`/home/${'sociology'}`}>
                                        Sociology
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to={`/home/${'economics'}`}>
                                        Economics
                                    </NavLink>
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
