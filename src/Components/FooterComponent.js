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