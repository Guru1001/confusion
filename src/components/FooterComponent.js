import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPhoneAlt, 
    FaFax } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { baseUrl, urlRoot } from '../shared/baseUrl';

function Footer(props){
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to={urlRoot+"/home"}>Home</Link></li>
                        <li><Link to={urlRoot+"/aboutus"}>About Us</Link></li>
                        <li><Link to={urlRoot+"/menu"}>Menu</Link></li>
                        <li><Link to={urlRoot+"/contactus"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		                121, Clear Water Bay Road<br/>
		                Clear Water Bay, Kowloon<br/>
		                HONG KONG<br/>
		                <FaPhoneAlt/> : +852 1234 5678<br/>
		                <FaFax/> : +852 8765 4321<br/>
                        <FiMail/> : 
                        <a href="mailto:confusion@food.net">
                        &nbsp;confusion@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon" 
                        href="http://google.com/+">
                            <FaGoogle/></a>
                        <a className="btn btn-social-icon" 
                        href="http://www.facebook.com/profile.php?id=">
                            <FaFacebookF/></a>
                        <a className="btn btn-social-icon" 
                        href="http://www.linkedin.com/in/">
                            <FaLinkedinIn/></a>
                        <a className="btn btn-social-icon" 
                        href="http://twitter.com/">
                            <FaTwitter/></a>
                        <a className="btn btn-social-icon" 
                        href="http://youtube.com/">
                            <FaYoutube/></a>
                        <a className="btn btn-social-icon" 
                        href="mailto:">
                            <FiMail/></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;