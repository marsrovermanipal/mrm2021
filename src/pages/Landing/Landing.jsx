/* eslint-disable no-unused-vars */
import React, { useEffect, Suspense, useState, lazy } from "react";
import "aos/dist/aos.css";
import styles from "./Landing.module.css";
import NewsData from "./NewsData";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import AOS from "aos";
import axios from "axios";
import Model from "../../components/roverModel/Curiosity_static";
// import Particles from "react-particles";
import TypeWriterEffect from "react-typewriter-effect";
import { FcLike } from "react-icons/fc";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
import { Alert } from "reactstrap";
const Card = lazy(() => import("../../components/card/Card"));
function Loading() {
  const myMesh = React.useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <mesh rotation={[0, 0, 0]} scale={(0.04, 0.04, 0.04)} ref={myMesh}>
      {/* <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="#8c4808"
        opacity={1}
        roughness={0.1}
        metalness={0}
      /> */}
      <Text scale={(6, 6, 6)}>Loading</Text>
    </mesh>
  );
}

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
  function checkVideo(url) {
    if (url.includes("video", 0)) return true;
    return false;
  }
  return (
    <>
      <div
        className={`d-none d-lg-flex flex-column mx-auto ${styles.landing_container}`}
      >
        <div className="col-12 m-auto justify-content-between mx-5">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "",
              color: "#f7f4f2",
              fontWeight: 600,
              fontSize: "5em",
              position: "absolute",
              top: "35vh",
              textAlign: "left",
            }}
            startDelay={100}
            cursorColor="#f7f4f2"
            text="Design to Discover."
            typeSpeed={150}
          />
        </div>

        <img
          src="starsfinal.webp"
          alt="landing"
          className="col-12 img-fluid"
          style={{ height: "90vh" }}
        />
      </div>

      <div
        className={`d-flex d-lg-none col-lg-6 col-12 flex-column ${styles.landing_container}`}
      >
        <div className="col-12 mx-auto">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "",
              color: "#f7f4f2",
              fontWeight: 600,
              fontSize: "2.5em",
              position: "absolute",
              top: "10vh",
              left: 0,
              right: 0,
              textAlign: "center",
            }}
            startDelay={1000}
            cursorColor="#f7f4f2"
            text="Design to Discover."
            typeSpeed={150}
          />
        </div>
        <img className="col-12 img-fluid " alt="mars" src="/stars.webp" />
      </div>

      <div
        className="col-12"
        data-aos="fade-in"
        data-aos-delay="200"
        style={{ backgroundColor: "" }}
      ></div>

      <div className="d-none d-lg-flex mx-auto col-12 p-3">
        <div className={`col-6 ${styles.landing_anim}`}>
          {/* <Particles
            className="d-none d-lg-flex"
            height="85vh"
            params={{
              particles: {
                number: {
                  value: 200,
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
          /> */}
        </div>
        <div className="text-center d-flex align-items-center">
          <p className="fs-4 col-12  p-2">
            <strong>MARS ROVER MANIPAL</strong>
            <br />
            <br />
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

        <div
          className="d-none d-md-flex mx-auto col-lg-6 col-12 img-fluid align-items-center"
          style={{ height: "85vh" }}
        >
          <div className={`col-6 ${styles.landing_anim}`}>
            {/* <Particles
              className="d-none d-lg-flex"
              height="85vh"
              params={{
                particles: {
                  number: {
                    value: 300,
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
            /> */}
          </div>
          <Canvas
            style={{ marginTop: "15vh" }}
            camera={{ position: [10, 18, 23], fov: 0.5 }}
          >
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
            <pointLight position={[10, 10, 10]} intensity={1.3} />
            <Suspense fallback={<Loading />}>
              <Model scale={(0.05, 0.05, 0.05)} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="d-none d-md-flex flex-column d-lg-none mx-auto col-12 p-3">
        <div className={`col-6 ${styles.landing_anim}`}>
          {/* <Particles
            className="d-none d-lg-flex"
            height="85vh"
            params={{
              particles: {
                number: {
                  value: 200,
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
          /> */}
        </div>
        <div className="text-center d-flex align-items-center">
          <p className="fs-4 col-12  p-2">
            <strong>MARS ROVER MANIPAL</strong>
            <br />
            <br />
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

        <div
          className="d-none d-md-flex mx-auto col-lg-6 col-12 img-fluid align-items-center"
          style={{ height: "85vh" }}
        >
          <div className={`col-6 ${styles.landing_anim}`}>
            {/* <Particles
              className="d-none d-lg-flex"
              height="85vh"
              params={{
                particles: {
                  number: {
                    value: 300,
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
            /> */}
          </div>
          <Canvas
            style={{ marginTop: "15vh" }}
            camera={{ position: [10, 18, 23], fov: 0.5 }}
          >
            <ambientLight />
            <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2}
            />
            <pointLight position={[10, 10, 10]} intensity={1.3} />
            <Suspense fallback={<Loading />}>
              <Model scale={(0.05, 0.05, 0.05)} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      <div className="col-12 d-block d-flex flex-column d-md-none">
        <div>
          <h1 className="text-center m-4">
            <strong>Mars Rover Manipal</strong>
          </h1>
          <p className="fs-4 col-12  text-center px-3">
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
      <div className="d-flex justify-content-center">
        <img
          className="col-lg-4  col-10 d-flex justify-content-center"
          src="/BarSearch1.gif"
          alt="search"
        />
      </div>
      <div className=" d-flex flex-wrap bg-dark">
        <Suspense fallback={<loading />}>
          {instaData.map((post) => (
            <Card
              classname=" col-lg-3 col-md-5 col-10 mx-auto m-3 p-2"
              style={{ fontFamily: "Ubuntu" }}
            >
              <a
                href="https://www.instagram.com/marsrovermanipal/?hl=en"
                className={styles.instaLink}
              >
                <div className="d-flex text-dark">
                  <img
                    className="col-1  m-1"
                    src="logo.webp"
                    loading="lazy"
                    alt="mrm logo"
                  />
                  <span className="mt-1 mt-lg-1 pt-0 pt-lg-1 fs-6">
                    marsrovermanipal
                  </span>
                  <IoEllipsisVertical className="ms-auto" />
                </div>
                <div className="d-flex flex-column align-items-center p-2 ">
                  {checkVideo(post.media_url) ? (
                    <video
                      controls
                      autoplay
                      src={post.media_url}
                      className="col-12"
                    />
                  ) : (
                    <img
                      loading="lazy"
                      className="col-lg-8 col-md-6 col-8 "
                      src={post.media_url}
                      alt={post.caption}
                    />
                  )}
                </div>
                <div className="d-flex text-dark my-2">
                  <FcLike className="mx-2" />
                  <FaRegComment className="mx-2" />
                  <IoPaperPlaneOutline className="mx-2" />
                  <FaRegBookmark className="ms-auto" />
                </div>
              </a>
            </Card>
          ))}
        </Suspense>
      </div>

      <div className="my-3 p-4 mb-0">
        <p className="fs-3 text-center ">
          We have been featured in leading newspapers, technical blogs and
          international magazines from time to time. Our achievements have been
          highlighted by all forms of media.{" "}
        </p>
      </div>
      <div className=" d-flex flex-wrap bg-dark mb-5">
        <Suspense fallback={<loading />}>
          {NewsData.map((news) => (
            <Card classname="col-lg-3 col-md-5 col-10 mx-auto m-3 p-2">
              <div className="d-flex flex-column align-items-center p-4 ">
                <img
                  loading="lazy"
                  src={news.logo}
                  className="col-6 mb-3  text-dark "
                  alt={news.heading}
                />
                <img
                  loading="lazy"
                  src={news.img}
                  className="col-12  text-dark "
                  alt={news.heading}
                />
                <p className="fs-5 text-center text-dark ">{news.heading}</p>
                <div className="col-12 d-flex justify-content-center fixed-bottom mb-3">
                  <a className="text-dark " href={news.link}>
                    Read More
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </Suspense>
      </div>
    </>
  );
}
