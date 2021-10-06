import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { SiGooglemaps } from "react-icons/si";


export default function Footer() {
  return (
    <div className="footer text-light text-center text-lg-start ">
      {/* <div className="container  p-1"> */}
      <div className="row">
        <div className="footer-1 col-lg-4 col-md-6 mb-4 mb-md-0  ">
          <h5 className="text-uppercase text-light text-center contact-us">CONTACT US</h5>

          <div className="">
            <div className="footer-contact text-center ">
              <p>
                {" "}
                <HiMail /> marsrovermanipal@gmail.com
              </p>
            </div>
            <div className="footer-contact text-center p-2">
              <p>
                {" "}
                <HiPhone /> Jyotishka Duttagupta : +91 99302 25063
              </p>

            </div>
            <div className="footer-contact text-center p-2">
              <p>
                {" "}
                <HiPhone /> Piyush Raj : +91 93072 88911
              </p>

            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
          <h5 className="text-uppercase text-light contact-us">Address</h5>
          <div>
            <p>
              {" "}
              <SiGooglemaps /> Mars Rover Manipal, MAHE Automobile Workshop,
              MIT, Manipal, India - 576104
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0440507888843!2d74.78978331482607!3d13.34753599060999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4af633139eb%3A0x456976d3d4c75562!2sMars%20Rover%20Manipal!5e0!3m2!1sen!2sin!4v1633473539913!5m2!1sen!2sin" width="280vw" height="100vh" allowFullScreen="" loading="lazy"></iframe>

          </div>
        </div>



        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
          <h5 className="text-uppercase text-light text-center">Follow us</h5>
          <a
            className="btn btn-link btn-floating btn-md text-light m-1"
            href="https://www.facebook.com/MarsRoverManipal/"
            role="button"
            data-mdb-ripple-color="light"
          >
            <TiSocialFacebook />
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://www.instagram.com/marsrovermanipal/?hl=en"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <TiSocialInstagram />
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://in.linkedin.com/company/marsrovermanipal"
            role="button"
            data-mdb-ripple-color="light"
          >
            <TiSocialLinkedin />
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-light m-1"
            href="https://www.youtube.com/results?search_query=mars+rover+manipal"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <TiSocialYoutube />
          </a>
        </div>
      </div>
      {/* </div> */}

      <div className="text-center p-3">
        {/* style="background-color: rgba(0, 0, 0, 0.2);" */}© 2021 Copyright:
        <a
          className="text-light"
          href="http://www.marsrovermanipal.com/index.html"
        >
          MRM
        </a>
      </div>
    </div>
  );
}
