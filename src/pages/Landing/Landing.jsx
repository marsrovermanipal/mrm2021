/* eslint-disable no-unused-vars */
import React, { useEffect, Suspense, useState } from "react";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Particles from "react-particles-js";
import TypeWriterEffect from "react-typewriter-effect";
import Card from "../../components/card/Card";
import styles from "./Landing.module.css";
import { FcLike } from "react-icons/fc"
import { FaRegBookmark } from "react-icons/fa"
import { FaRegComment } from "react-icons/fa"
import { IoPaperPlaneOutline } from "react-icons/io5"
import { IoEllipsisVertical } from "react-icons/io5"

// function Model() {
//   const { scene } = useGLTF("/MarsRotating.glb");
//   return <primitive object={scene} />;
// }
import Model from "../../components/roverModel/Curiosity_static";
// function Model() {
//   const { scene } = useGLTF("/Curiosity_static.glb");
//   return <primitive object={scene} />;
// }

export default function Landing() {
  const [instaData, setInstaData] = useState([]);
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    async function getInstaData() {
      const data = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.REACT_APP_INSTA_TOKEN}`
      );
      data.data.data.splice(3, data.data.data.length - 3);
      setInstaData(data.data.data);
    }
    getInstaData();
  }, []);
  return (
    <>
      <div className={`col-12 ${styles.landing_anim}`}>
        <Particles
          height="550px"
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
      // style={{ height: "800px" }}
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
      </div>

      {/* <img className={`col-12 img-fluid d-none d-sm-flex  ${styles.landing_img}`} src="/MARS1.png" />
      <img className={`col-12 img-fluid d-flex d-sm-none  ${styles.landing_img}`} src="/MARSphone.png" /> */}
      <div className="d-flex">
        <div className="col-6 text-end" style={{ height: "100vh" }}>
          <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
            <pointLight position={[10, 10, 10]} intensity={1.3} />
            <Suspense fallback={null}>
              <Model scale={(0.05, 0.05, 0.05)} />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div
        className="col-12"
        data-aos="fade-in"
        data-aos-delay="200"
        style={{ backgroundColor: "" }}
      >
        <div className="text-center mt-5">
          {/* <h1>Mars Rover Manipal</h1> */}
          <p className="fs-4 col-12 col-md-8 p-3 text-start text-md-center mx-auto text-center">
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
      {/* <SponsorSection /> */}

      <div className=" d-flex flex-wrap">

        {instaData.map((post) => (
          <Card classname=" col-lg-3 col-md-5 col-10 mx-auto m-3 p-2" style={{ fontFamily: "Ubuntu" }}>
            <a href="https://www.instagram.com/marsrovermanipal/?hl=en">
              <div className="d-flex text-dark">
                <img className="col-1  m-1" src="logo.png" />
                <span className="my-1">marsrovermanipal</span>
                <IoEllipsisVertical className="ms-auto" />
              </div>
              <div className="d-flex flex-column align-items-center p-2 ">
                <img className="col-lg-8 col-md-6 col-8 " src={post.media_url} alt={post.caption} />

              </div>
              <div className="d-flex text-dark my-2">
                <FcLike className="mx-2" />
                <FaRegComment className="mx-2" />
                <IoPaperPlaneOutline className="mx-2" />
                < FaRegBookmark className="ms-auto" />

              </div>
              {/* <h6 className="text-dark text-center">{post.caption}</h6> */}
            </a>
          </Card>
        ))}

      </div>
    </>
  );
}
