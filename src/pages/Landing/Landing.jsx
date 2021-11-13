/* eslint-disable no-unused-vars */
import React, { useEffect, Suspense, useState, lazy } from "react";
import "aos/dist/aos.css";
import styles from "./Landing.module.css";
import NewsData from "./NewsData";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import AOS from "aos";
import axios from "axios";
import Model from "../../components/roverModel/Curiosity_static";
import Particles from "react-particles-js";
import TypeWriterEffect from "react-typewriter-effect";
import { FcLike } from "react-icons/fc";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoEllipsisVertical } from "react-icons/io5";
const Card = lazy(() => import("../../components/card/Card"));

function Loading() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

export default function Landing() {
  const [instaData, setInstaData] = useState([]);
  const [youtubeData, setYoutubeData] = useState([]);

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

  useEffect(() => {
    async function getYoutubeData() {
      fetch(
        'https://www.googleapis.com/youtube/v3/channels?key="AIzaSyBWRM_R23XEMkLXiIM2DtgVFzWyeDGTlrQ"&channelId="Nb6nzqQDC2_-5Uhg32ASEQ"&part=snippet,id&order=date&maxResults=2'
      ).then((results) => {
        const videosObj = results.json();
        this.setState(
          {
            videos: videosObj,
            playingVideoId: videosObj[this.index],
          },
          (updatedState) => {
            console.log("videos", updatedState.videos);
            console.log("videos", updatedState.playingVideoId);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <div className={`col-12 ${styles.landing_anim}`}>
        <Particles
          className="d-none d-md-flex"
          height="120vh"
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

      <div className="d-none d-lg-flex flex-column  mx-auto">
        <div className="col-lg-6 col-12 m-auto p-3 ">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "",
              color: "#f7f4f2",
              fontWeight: 600,
              fontSize: "4.5em",
              textAlign: "center",
            }}
            startDelay={1000}
            cursorColor="#f7f4f2"
            text="Design to Discover."
            typeSpeed={150}
          />
        </div>

        <div
          className="d-none d-lg-flex mx-auto col-lg-6 col-12 img-fluid "
          style={{ height: "100vh" }}
        >
          <Canvas camera={{ position: [10, 18, 23], fov: 0.5 }}>
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

      <div
        className={`d-flex d-lg-none col-lg-6 col-12 flex-column  text-center  ${styles.designtodiscover}`}
        style={{ height: "85vh" }}
      >
        <div classname="m-5 p-5 justify-content-center">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "",
              color: "#f7f4f2",
              fontWeight: 200,
              fontSize: "2em",
              textAlign: "center",
            }}
            startDelay={1000}
            cursorColor="#f7f4f2"
            text="Design to Discover."
            typeSpeed={150}
          />
        </div>
        <img
          className={`col-12 img-fluid ${styles.landing_img}`}
          alt="mars"
          src="/mars.png"
        />
      </div>

      <div
        className="col-12"
        data-aos="fade-in"
        data-aos-delay="200"
        style={{ backgroundColor: "" }}
      ></div>

      <div
        className={`d-flex flex-column d-lg-none text-center ${styles.roverPhone}`}
      >
        <h3 className="mt-5">Mars Rover Manipal</h3>
        <p className="fs-8 col-12  p-2">
          Mars Rover Manipal is a multi-disciplinary student team from Manipal
          Academy of Higher Education (MAHE) striving to design and build next
          generation rovers for exploration of extraterrestrial environments and
          focus on applications of robotics in interplanetary missions.
          <br />
          We participate in the annual University Rover Challenge (URC)
          organized by the Mars Society, USA. In URC 2019, our team finished 8th
          out of 84 teams across the globe and stood 1st among the Asian teams.
          Since our inception, the team has provided a platform to aspiring
          engineering students by pushing them beyond the theoretical knowledge
          they gain in classrooms to inculcate technical and practical skills.
          The team is also working on research related to the role of a rover in
          the field of space exploration and future Mars missions.
        </p>
      </div>

      <div
        className={`col-12 d-block d-none flex-column  d-lg-flex ${styles.rover}`}
      >
        <img
          loading="lazy"
          src="/photos20/Rover autonomous.webp"
          alt="rover"
          width="100%"
          height="100%"
        />
        <div className={` ${styles.roverText}`}>
          <h1>Mars Rover Manipal</h1>
          <p className="fs-4 col-12  text-center p-2">
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
        {/* <video
          loading="lazy"
          src="/searchBar.webm"
          alt="Search bar"
          className="col-lg-5 col-10"
          autoPlay
          muted 
        />*/}

        <img className="col-4 d-flex justify-content-center" src="/searchBarr.gif" alt="search" />
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
                  <img
                    loading="lazy"
                    className="col-lg-8 col-md-6 col-8 "
                    src={post.media_url}
                    alt={post.caption}
                  />
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
