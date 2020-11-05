import React, { Component } from 'react';


class Footer extends Component{ 

    render() {
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">             
                        <div className="col-12 align-self-center">
                            <div className="text-center">
                                <h4>For Personalised Assistance Fill in Your Details:</h4>
                                <form action="javascript: postToGoogle()">
                                    <input className="col-sm-10" type="text" name="entry.2005620554" placeholder="Name"/>
                                    <input className="col-sm-10" type="email" name="entry.1045781291" placeholder="Email"/>
                                        <input className="col-sm-10 col-sm-6" type="text" name="entry.1166974658" placeholder="Phone Number or Instagram handle"/><br/>
                                        <input className="col-sm-10 col-sm-6" type="text" name="entry.839337160" placeholder="Qualification"/>
                                    <div id="radio-group" name="entry.123645729">
                                        <label htmlFor="radio-group">What do you want Assistance For?</label><br/>
                                        <label htmlFor="classes"><input id="classes" type="radio" name="entry.123645729" value="classes" required/>&nbsp;Classes&nbsp;</label><br/>
                                        <label htmlFor="project"><input id="project" type="radio" name="entry.123645729" value="project" required/>&nbsp;Project&nbsp;</label><br/>
                                        <label htmlFor="others"><input id="others" type="radio" name="entry.123645729" value="others" required/>&nbsp;Others&nbsp;</label>
                                    </div>
                                    <div id="radio-group2" name="entry.1498671018">
                                        <label htmlFor="radio-group2">What Subject do you want Assistance For?</label><br/>
                                        <label htmlFor="psychology"><input id="psychology" type="radio" name="entry.1498671018" value="psychology" required/>&nbsp;Psychology&nbsp;</label><br/>
                                        <label htmlFor="sociology"><input id="sociology" type="radio" name="entry.1498671018" value="sociology" required/>&nbsp;Sociology&nbsp;</label><br/>
                                        <label htmlFor="economics"><input id="economics" type="radio" name="entry.1498671018" value="economics" required/>&nbsp;Economics&nbsp;</label>
                                    </div>
                                    <textarea className="col-sm-10" name="entry.1065046570" height="300" placeholder="Brief Description of the topic for which help is required."></textarea>
                                    <input type="submit" className="col-6" value="Request a Call Back"/>
                                </form>
                                <h4>Connect With us On :</h4>
                                <div className="row">
                                    <a className="btn btn-social-icon btn-instagram col-3 d-flex" target="_blank" rel="noopener noreferrer" href="http://instagram.com/"><i className="fa fa-instagram"><div></div></i></a>
                                    <a className="btn btn-social-icon btn-facebook col-3 d-flex" target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"><div></div></i></a>
                                    <a className="btn btn-social-icon btn-quora col-3 d-flex" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/"><i className="fa fa-quora"><div></div></i></a>
                                    <a className="btn btn-social-icon btn-email col-3 d-flex" target="_blank" rel="noopener noreferrer" href="mailto:thehelpingbookk@gmail.com"><i className="fa fa-envelope"><div></div></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2020 The Helping Book. Designed and created by
                            <a target="_blank" rel="noopener noreferrer" href="https://ctrlaltcreate.in" title="Ctrl Alt Create"> Ctrl Alt Create </a> &
                            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/bafna_shivani_" title=""> Shivani Bafna</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
 }

 export default Footer;