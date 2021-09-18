import React from "react";
import Particles from "react-particles-js";
<<<<<<< HEAD
import Card from "../components/card/Card";
=======
import { NavigationBar } from "../components/navbar/NavigationBar";
>>>>>>> main

export default function Landing() {
  return (
    <>
      <NavigationBar />
      <div className="col-12">
        <Particles
          params={{
            particles: {
              number: {
                value: 600,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.05,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <div className="col-4"></div>
    </>
  );
}
