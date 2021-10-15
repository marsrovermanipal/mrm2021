import React, { useState } from "react";
import Card from "../../components/card/Card";
import * as GrIcons from "react-icons/gr";
import styles from "./AboutUs.module.css";
import { Button } from "reactstrap";
import boardData from "./boardData"
import AiData from "./AiData"
import ecsData from "./ecsData"
import mgmtData from "./mgmtData"
import sciData from "./scienceData"
import researchData from "./researchData"
import mechData from "./mechData"

export default function AboutUs() {
  const [activeSub, setActiveSub] = useState("board");
  const renderMembers = (sub) => {
    switch (sub) {
      case "board":

        // board members data
        return (
          <div className="col-12 d-flex mx-auto">
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase ">Board</h3>
              {boardData.map((item) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 ">
                    <div className="col-12 d-flex  flex-wrap">
                      <Card classname="bg-dark text-light">
                        <div className="d-flex flex-column align-items-center p-4 ">
                          <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                          <h3 className="text-center text-light">{item.name}</h3>
                          <h5 className="text-center text-secondary">{item.pos}</h5 >
                          <div className="col-12 d-flex justify-content-center text-secondary">
                            <a href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        );
      case "ai":
        return (
          <>
            <div className="col-8 d-flex mx-auto">
              <div className="col-5.8">
                <img className="sub-image" src="ai.gif" alt="Ai Image" />
              </div>
              <div className="col-8">
                <h3>Artificial Intelligence & Automation</h3>
                <p>
                  The AI & Automation subsystem is an integral part of the
                  project. The subsystem deals with processing and interpreting
                  data from various sensors like cameras, GPS, LiDARS, IMUs, etc.
                  This enables the rover to traverse autonomously without human
                  interference. The subsystem also deals with designing deep
                  learning architectures to solve various state of the art
                  problems encountered while the development of rover.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {AiData.map((item) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6 ">
                    <div className="col-12 d-flex  flex-wrap bg-light text-dark">
                      <Card classname={`${styles.card}`}>
                        <div className="d-flex flex-column align-items-center p-4 ">
                          <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                          <h3 className="text-center ">{item.name}</h3>
                          <div className="col-12 d-flex justify-content-center text-secondary">
                            <a className="text-dark" href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )

              })}
            </div>
          </>
        );
      case "ecs":
        return (
          <>
            <div className="col-8 d-flex mx-auto">
              <div className="col-5.8">
                <img className="sub-image" src="https://innovoco.com/wp-content/uploads/2019/04/Illustration_AI_Optimized-380x260.png" alt="Ai Image" />
              </div>
              <div className="col-8">
                <h1>Electronics & Control Systems</h1>
                <p>The rover is brought to life by the Electronics & Controls subsytem which is responsible for powering various segments of the rover, that work together to achieve desired performance of the rover over all the tasks. The team is also responsible for control and communication of the rover and also works towards maximum customization of the products that we use on the rover. Camera feeds from various points on the rover are hauled back to the base station for maximum view of the environment.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {ecsData.map((item) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 ">
                    <div className="col-12 d-flex  flex-wrap">
                      <Card classname="bg-light text-dark">
                        <div className="d-flex flex-column align-items-center p-4 ">
                          <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                          <h3 className="text-center ">{item.name}</h3>
                          <div className="col-12 d-flex justify-content-center text-secondary">
                            <a className="text-dark" href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )

              })}
            </div>
          </>
        );

      case "mech":
        return (
          <>
            <div className="col-8 d-flex mx-auto">
              <div className="col-5.8">
                <img className="sub-image" src="mechanical.gif" alt="Ai Image" />
              </div>
              <div className="col-8">
                <h3>Mechanical Design & Manufacturing</h3>
                <p>The Mechanical Design & Manufacturing subsystem provides the basic skeleton of the rover which includes the wheels, suspension, chassis, robotic manipulator and the soil collection mechanism. The guidelines provided by URC form the basis over which each of our component is designed. Every part that is put on the rover undergoes an extensive development cycle to ensure its reliability. The development cycle includes a thorough study of the problem statement and design and analysis of each component on various CAE softwares.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {mechData.map((item) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6 ">
                    <div className="col-12 d-flex  flex-wrap bg-light text-dark">
                      <Card classname={`${styles.card}`}>
                        <div className="d-flex flex-column align-items-center p-4 ">
                          <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                          <h3 className="text-center ">{item.name}</h3>
                          <div className="col-12 d-flex justify-content-center text-secondary">
                            <a className="text-dark" href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )

              })}
            </div>
          </>
        );

      case "research":
        return (
          <>
            <div className="col-8 d-flex mx-auto">
              <div className="col-5.8">
                <img className="sub-image" src="research.gif" alt="Ai Image" />
              </div>
              <div className="col-8">
                <h3>Research</h3>
                <p>The Research subsystem of Mars Rover Manipal is responsible for publishing research papers in indexed journals and presenting them in national and international conferences. The research team works on problems which are beyond the scope of University Rover Challenge (URC). They also work on development of proprietary technology and long term projects whose solutions will be used in future rovers.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {researchData.map((item) => {
                return (
                  <div className="col-lg-4 col-md-4 col-sm-6 ">
                    <div className="col-12 d-flex  flex-wrap bg-light text-dark">
                      <Card classname={`${styles.card}`}>
                        <div className="d-flex flex-column align-items-center p-4 ">
                          <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                          <h3 className="text-center ">{item.name}</h3>
                          <div className="col-12 d-flex justify-content-center text-secondary">
                            <a className="text-dark" href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )

              })}
            </div>
          </>
        );

      case "management":

        return (
          <>
            <div className="col-8 d-flex mx-auto">
              <div className="col-5.8">
                <img className="sub-image" src="management.gif" alt="Ai Image" />
              </div>
              <div className="col-8">
                <h1>Management & Public Relations</h1>
                <p>The Management and PR subsystem of Mars Rover Manipal is responsible for all the non-technical work of the team. It is involved in the overall progress of the team by handling sponsorship, finance, public relations, publicity, media platforms and human resource management. The team designs posters and brochures, manages the website and provides videos for advertisement and sponsors. It is also responsible for the well-ordered and smooth functioning of the team’s day to day work and managing of all events.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {mgmtData.map((item) => {
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 p-3">
                    <div className="col-12 d-flex  flex-wrap">
                      <Card classname="bg-light text-dark">
                        <div className="d-flex flex-column align-items-center p-4 ">
                          <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                          <h3 className="text-center ">{item.name}</h3>
                          <div className="col-12 d-flex justify-content-center text-secondary">
                            <a className="text-dark" href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                )

              })}
            </div>
          </>
        );
      default:
        return <h1>Board</h1>;


    }
  };
  const handleClick = (e) => {
    setActiveSub(e.target.value);
    // console.log(activeSub);
    console.log(e.target.value);
  };
  return (
    <div className="container">
      <h1 className="text-center">The Team</h1>
      <div className="d-flex col-12 text-center justify-content-center p-3 flex-wrap">
        <Button
          outline
          size="lg"
          color="primary"
          className="mx-3"
          value="board"
          onClick={handleClick}
        >
          The Board
        </Button>
        <Button
          outline
          size="lg"
          value="ai"
          color="primary"
          className="mx-3"
          onClick={handleClick}
        >
          AI & Automation
        </Button>
        <Button
          outline
          value="ecs"
          onClick={handleClick}
          size="lg"
          color="primary"
          className="mx-3"
        >
          ECS
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="mech"
          className="mx-3"
        >
          Mechanical
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="research"
          className="mx-3"
        >
          Research
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="management"
          className="mx-3"
        >
          Management
        </Button>
      </div>
      {renderMembers(activeSub)}


    </div>
  );
}
