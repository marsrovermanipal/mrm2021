import React from "react";
import Particles from "react-particles-js";
import TypeWriterEffect from "react-typewriter-effect";
import Typist from "react-typist";
import { NavigationBar } from "../../components/navbar/NavigationBar";
import Card from "../../components/card/Card";
import SponsorSection from "../../components/sponsorSection/SponsorSection";
import styles from "./Landing.module.css";
export default function Landing() {
  return (
    <>
      <NavigationBar />
      <div className={`col-12 ${styles.landing_anim}`}>
        <Particles
          height="800px"
          params={{
            particles: {
              number: {
                value: 500,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>
      <div
        className="col-12 p-5 d-block d-lg-flex align-items-center justify-content-between"
        style={{ height: "800px" }}
      >
        <TypeWriterEffect
          textStyle={{
            fontFamily: "",
            color: "#f7f4f2",
            fontWeight: 500,
            fontSize: "4.5em",
          }}
          startDelay={1000}
          cursorColor="#f7f4f2"
          text="Design to Discover."
          typeSpeed={150}
        />
        <img src="/gripper.svg" className="img-fluid" alt="" />
      </div>
      <div className="col-12" style={{ backgroundColor: "" }}>
        <div className="text-center mt-5">
          <h1 style={{ fontSize: "4em" }}>Mars Rover Manipal</h1>
          <p className="fs-2 col-12 col-md-6 p-3 text-start text-md-center mx-auto">
            Mars Rover Manipal is a multi-disciplinary student team from Manipal
            Academy of Higher Education (MAHE) striving to design and build next
            generation rovers for exploration of extraterrestrial environments
            and focus on applications of robotics in interplanetary missions.
          </p>
        </div>
      </div>
      <SponsorSection />
    </>
  );
}
