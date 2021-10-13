import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticleImage, { ParticleOptions } from "react-particle-image";
import Particles from "react-particles-js";
import TypeWriterEffect from "react-typewriter-effect";
import SponsorSection from "../../components/sponsorSection/SponsorSection";
import styles from "./Landing.module.css";

export default function Landing() {
  // const {innerWidth,innerHeight } = useWindowSize();
  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#61dafb",
  };
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
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
        <ParticleImage
          src={"/temp2.png"}
          scale={2}
          entropy={20}
          maxParticles={4200}
          backgroundColor={"#34393f"}
          particleOptions={particleOptions}
        />
      </div>
      <div
        className="col-12"
        data-aos="fade-in"
        data-aos-delay="200"
        style={{ backgroundColor: "" }}
      >
        <div className="text-center mt-5">
          {/* <h1>Mars Rover Manipal</h1> */}
          <p className="fs-4 col-12 col-md-8 p-3 text-start text-md-center mx-auto">
            Mars Rover Manipal is a multi-disciplinary student team from Manipal
            Academy of Higher Education (MAHE) striving to design and build next
            generation rovers for exploration of extraterrestrial environments
            and focus on applications of robotics in interplanetary missions.
            <br />
            We participate in the annual University Rover Challenge (URC)
            organized by the Mars Society, USA. In URC 2019, our team finished
            8th out of 84 teams across the globe and stood 1st among the Asian
            teams. Since our inception, the team has provided a platform to
            aspiring engineering students by pushing them beyond the theoretical
            knowledge they gain in classrooms to inculcate technical and
            practical skills. The team is also working on research related to
            the role of a rover in the field of space exploration and future
            Mars missions.
          </p>
        </div>
      </div>
      <SponsorSection />
    </>
  );
}
