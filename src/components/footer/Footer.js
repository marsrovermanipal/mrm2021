import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { HiMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { SiGooglemaps } from "react-icons/si";

export default function Footer() {
  return (
    <div className="p-4 text-dark bg-light text-center text-lg-start mt-4 ">
      {/* <div className="container  p-1"> */}
      <div className="row">
        <div className="footer-1 col-lg-4 col-md-6  mb-md-0  ">
          <h5 className="text-uppercase text-dark text-center mb-4">
            CONTACT US
          </h5>

          <div className="">
            <div className="footer-contact text-center ">
              <p>
                {" "}
                <HiMail /> marsrovermanipal@gmail.com
              </p>
            </div>
             <div className="footer-contact text-center p-0">
              <p>
                {" "}
                <HiPhone /> Yashash Rao P : +91 99482 21663
              </p>
            </div>
            <div className="footer-contact text-center p-0">
              <p>
                {" "}
                <HiPhone /> Akhilesh Jhawar : +91 98740 75160
              </p>
            </div>
            <div className="footer-contact text-center p-0">
              <p>
                {" "}
                <HiPhone /> Ankit Aggarwal : +91 88001 72784
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
          <h5 className="text-uppercase text-dark mb-4">Address</h5>
          <div>
            <p>
              {" "}
              <SiGooglemaps /> Mars Rover Manipal, MAHE Automobile Workshop,
              MIT, Manipal, India - 576104
            </p>
            <iframe
              title="address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0440507888843!2d74.78978331482607!3d13.34753599060999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4af633139eb%3A0x456976d3d4c75562!2sMars%20Rover%20Manipal!5e0!3m2!1sen!2sin!4v1633473539913!5m2!1sen!2sin"
              width="250vw"
              height="100vh"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-center">
          <h5 className="text-uppercase text-dark text-center">Follow us</h5>
          <a
            className="btn btn-link btn-floating btn-xl text-dark m-1"
            href="https://www.facebook.com/MarsRoverManipal/"

            data-mdb-ripple-color="light"
          >
            <TiSocialFacebook />
          </a>

          <a
            className="btn btn-link btn-floating btn-xl text-dark m-1"
            href="https://www.instagram.com/marsrovermanipal/?hl=en"
            data-mdb-ripple-color="dark"
          >
            <TiSocialInstagram />
          </a>

          <a
            className="btn btn-link btn-floating btn-xl text-dark m-1"
            href="https://in.linkedin.com/company/marsrovermanipal"
            data-mdb-ripple-color="light"
          >
            <TiSocialLinkedin />
          </a>

          <a
            className="btn btn-link btn-floating btn-xl text-dark m-1"
            href="https://www.youtube.com/marsrovermanipal"
          // data-mdb-ripple-color="dark"
          >
            <TiSocialYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
