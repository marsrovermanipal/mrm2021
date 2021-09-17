import React from 'react';
import { DiGithubBadge } from 'react-icons/di';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';

import { TiMail } from "react-icons/ti";
import { BiPhoneCall } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";


export default function Footer() {
    return (
        <footer className="footer text-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="footer-1 col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light contact-us">CONTACT US</h5>
                        <div>
                            <div className="footer-contact">
                                <p>  <TiMail />      marsrovermanipal@gmail.com</p>
                            </div>
                            <div>
                                <p>  <BiPhoneCall />       Jyotishka Duttagupta</p>
                                <p>  +91 99302 25063</p>
                            </div>
                            <div>
                                <p> <BiPhoneCall /> Piyush Raj</p>
                                <p> +91 93072 88911</p>
                            </div>

                            <div>
                                <p> <FiMapPin /> Mars Rover Manipal,
                                    MAHE Automobile Workshop,
                                    MIT, Manipal, India - 576104</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Follow us</h5>
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.facebook.com/MarsRoverManipal/"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><TiSocialFacebook /></a>


                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="light"
                        >
                            <TiSocialTwitter />
                        </a>

                        {/* <!-- Instagram --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.instagram.com/marsrovermanipal/?hl=en"
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><TiSocialInstagram /></a>


                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://in.linkedin.com/company/marsrovermanipal"
                            role="button"
                            data-mdb-ripple-color="light"
                        ><TiSocialLinkedin /></a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-light m-1"
                            href="https://www.youtube.com/results?search_query=mars+rover+manipal"
                            role="button"
                            data-mdb-ripple-color="dark"
                        >
                            < TiSocialYoutube />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center p-3">
                {/* style="background-color: rgba(0, 0, 0, 0.2);" */}
                © 2021 Copyright:
                <a className="text-light" href="http://www.marsrovermanipal.com/index.html">MRM</a>
            </div>
        </footer>
    )
}
