import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) { 
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-12 align-self-center">
                        <div className="text-center">
                            <h4>For Personalised Assistance Fill in Your Details:</h4>
                            <form method="post" action="">
                                <input className="col-sm-10" type="text" name="name" placeholder="Name"/>
                                <input className="col-sm-10" type="email" name="email" placeholder="Email"/>
                                    <input className="col-sm-10 col-sm-6" type="text" name="phone" placeholder="Phone Number or Instagram handle"/><br/>
                                    <input className="col-sm-10 col-sm-6" type="text" name="qualification" placeholder="Qualification"/>
                                <div id="radio-group">
                                    <label htmlFor="radio-group">What do you want Assistance For?</label><br/>
                                    <label htmlFor="classes"><input id="classes" type="radio" name="work" value="classes"/>&nbsp;Classes&nbsp;</label><br/>
                                    <label htmlFor="project"><input id="project" type="radio" name="work" value="project"/>&nbsp;Project&nbsp;</label><br/>
                                    <label htmlFor="others"><input id="others" type="radio" name="work" value="others"/>&nbsp;Others&nbsp;</label>
                                </div>
                                <div id="radio-group2">
                                    <label htmlFor="radio-group2">What Subject do you want Assistance For?</label><br/>
                                    <label htmlFor="psychology"><input id="psychology" type="radio" name="subject" value="psychology"/>&nbsp;Psychology&nbsp;</label><br/>
                                    <label htmlFor="sociology"><input id="sociology" type="radio" name="subject" value="sociology"/>&nbsp;Sociology&nbsp;</label><br/>
                                    <label htmlFor="economics"><input id="economics" type="radio" name="subject" value="economics"/>&nbsp;Economics&nbsp;</label>
                                </div>
                                <textarea className="col-sm-10" height="300" placeholder="Brief Description of the topic for which help is required."></textarea>
                                <input type="submit" className="col-6" value="Request a Call Back"/>
                            </form>
                            <h4>Connect With us On :</h4>
                            <div className="row">
                                <a className="btn btn-social-icon btn-instagram col-3 d-flex" href="http://google.com/+"><i className="fa fa-instagram"><div></div></i></a>
                                <a className="btn btn-social-icon btn-facebook col-3 d-flex" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"><div></div></i></a>
                                <a className="btn btn-social-icon btn-quora col-3 d-flex" href="http://www.linkedin.com/in/"><i className="fa fa-quora"><div></div></i></a>
                                <a className="btn btn-social-icon btn-email col-3 d-flex" href="mailto:"><i className="fa fa-envelope"><div></div></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 The Helping Book. Designed and created by
                        <a href="https://ctrlaltcreate.in" title="Ctrl Alt Create"> Ctrl Alt Create </a> &
                        <a href="https://instagram.com" title=""> Nidhi Ki Didi</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
 }

 export default Footer;