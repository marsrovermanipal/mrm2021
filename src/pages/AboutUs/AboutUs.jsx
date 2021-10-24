import React, { useState } from "react";
import Card from "../../components/card/Card";
import * as GrIcons from "react-icons/gr";
// import styles from "./AboutUs.module.css";
import { Button } from "reactstrap";

import boardData from "./boardData"
import AiData from "./AiData"
import ecsData from "./ecsData"
import mgmtData from "./mgmtData"
import sciData from "./scienceData"
import researchData from "./researchData"
import mechData from "./mechData"
import FAdata from "./FAdata"


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
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <p className="fs-3 text-center text-light">
                        {item.name}
                      </p>
                      <p className="fs-5 text-center text-secondary">
                        {item.pos}
                      </p>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a href={item.linkedin}>
                          {" "}
                          <GrIcons.GrLinkedin />
                        </a>
                      </div>

                    </div>
                  </Card>

                );
              })}
            </div>
          </div>
        );
      case "ai":
        return (
          <>

            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
              <img
                className="col-6 col-lg-4 img-fluid"
                src="SubsystemLogo/ai.gif"
                alt="Ai"
              />
              <div className="col-6 col-lg-4 my-auto">
                <p className="fs-3">Artificial Intelligence & Automation</p>
                <p className="fs-6">
                  The AI & Automation subsystem is an integral part of the
                  project. The subsystem deals with processing and interpreting
                  data from various sensors like cameras, GPS, LiDARS, IMUs,
                  etc. This enables the rover to traverse autonomously without
                  human interference. The subsystem also deals with designing
                  deep learning architectures to solve various state of the art
                  problems encountered while the development of rover.
                </p>

              </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
              <img
                className="col-10 mx-auto img-fluid"
                src="SubsystemLogo/ai.gif"
                alt="Ai"
              />
              <div className="col-10 mx-auto">
                <p className="fs-3">Artificial Intelligence & Automation</p>
                <p className="fs-6">
                  The AI & Automation subsystem is an integral part of the
                  project. The subsystem deals with processing and interpreting
                  data from various sensors like cameras, GPS, LiDARS, IMUs,
                  etc. This enables the rover to traverse autonomously without
                  human interference. The subsystem also deals with designing
                  deep learning architectures to solve various state of the art
                  problems encountered while the development of rover.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {AiData.map((item) => {
                return (
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <h3 className="text-center ">{item.name}</h3>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a className="text-light" href={item.linkedin}>
                          {" "}
                          <GrIcons.GrLinkedin />
                        </a>
                      </div>
                    </div>
                  </Card>

                );
              })}
            </div>
          </>
        );
      case "ecs":
        return (
          <>

            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
              <img
                className="col-6 col-lg-4 img-fluid"
                src="SubsystemLogo/ecs.gif"
                alt="Ecs"
              />
              <div className="col-6 col-lg-4 my-auto">
                <p className="fs-3">Electronics & Control Systems</p>
                <p className="fs-6">
                  The rover is brought to life by the Electronics & Controls
                  subsytem which is responsible for powering various segments of
                  the rover, that work together to achieve desired performance
                  of the rover over all the tasks. The team is also responsible
                  for control and communication of the rover and also works
                  towards maximum customization of the products that we use on
                  the rover. Camera feeds from various points on the rover are
                  hauled back to the base station for maximum view of the
                  environment.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
              <img
                className="col-10 mx-auto img-fluid"
                src="SubsystemLogo/ecs.gif"
                alt="Ecs"
              />
              <div className="col-10 mx-auto">
                <p className="fs-3">Electronics & Control Systems</p>
                <p className="fs-6">

                  The rover is brought to life by the Electronics & Controls
                  subsytem which is responsible for powering various segments of
                  the rover, that work together to achieve desired performance
                  of the rover over all the tasks. The team is also responsible
                  for control and communication of the rover and also works
                  towards maximum customization of the products that we use on
                  the rover. Camera feeds from various points on the rover are
                  hauled back to the base station for maximum view of the
                  environment.
                </p>
              </div>
            </div >
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {ecsData.map((item) => {
                return (
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <h3 className="text-center ">{item.name}</h3>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a className="text-light" href={item.linkedin}>
                          {" "}
                          <GrIcons.GrLinkedin />
                        </a>
                      </div>

                    </div>
                  </Card>

                );
              })}
            </div>
          </>
        );

      case "mech":
        return (
          <>
            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
              <img
                className="img-fluid col-6 col-lg-4"
                src="SubsystemLogo/mechanical.gif"
                alt="Mech"
              />
              <div className="col-6 col-lg-4 my-auto">
                <p className="fs-3">Mechanical Design & Manufacturing</p>
                <p className="fs-6">
                  The Mechanical Design & Manufacturing subsystem provides the
                  basic skeleton of the rover which includes the wheels,
                  suspension, chassis, robotic manipulator and the soil
                  collection mechanism. The guidelines provided by URC form the
                  basis over which each of our component is designed. Every part
                  that is put on the rover undergoes an extensive development
                  cycle to ensure its reliability. The development cycle
                  includes a thorough study of the problem statement and design
                  and analysis of each component on various CAE softwares.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
              <img
                className="col-10 mx-auto img-fluid"
                src="SubsystemLogo/mechanical.gif"
                alt="Mech"
              />
              <div className="col-10 mx-auto">
                <p className="fs-3">Mechanical Design & Manufacturing</p>
                <p className="fs-6">
                  The Mechanical Design & Manufacturing subsystem provides the
                  basic skeleton of the rover which includes the wheels,
                  suspension, chassis, robotic manipulator and the soil
                  collection mechanism. The guidelines provided by URC form the
                  basis over which each of our component is designed. Every part
                  that is put on the rover undergoes an extensive development
                  cycle to ensure its reliability. The development cycle
                  includes a thorough study of the problem statement and design
                  and analysis of each component on various CAE softwares.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {mechData.map((item) => {
                return (
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img src={item.img} className="col-12 col-md-5 rounded-circle" alt={item.name} />
                      <h3 className="text-center ">{item.name}</h3>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a className="text-light" href={item.linkedin}> <GrIcons.GrLinkedin /></a>
                      </div>

                    </div>
                  </Card>

                )


              })}
            </div>
          </>
        );

      case "research":
        return (
          <>
            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
              <img
                className="img-fluid col-6 col-lg-4"
                src="SubsystemLogo/research.gif"
                alt="Research"
              />
              <div className="col-6 col-lg-4 my-auto">
                <p className="fs-3">Research</p>
                <p className="fs-6">
                  The Research subsystem of Mars Rover Manipal is responsible
                  for publishing research papers in indexed journals and
                  presenting them in national and international conferences. The
                  research team works on problems which are beyond the scope of
                  University Rover Challenge (URC). They also work on
                  development of proprietary technology and long term projects
                  whose solutions will be used in future rovers.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
              <img
                className="img-fluid col-10 mx-auto"
                src="SubsystemLogo/research.gif"
                alt="Research"
              />
              <div className="col-10 mx-auto">
                <p className="fs-3">Research</p>
                <p className="fs-6">
                  The Research subsystem of Mars Rover Manipal is responsible
                  for publishing research papers in indexed journals and
                  presenting them in national and international conferences. The
                  research team works on problems which are beyond the scope of
                  University Rover Challenge (URC). They also work on
                  development of proprietary technology and long term projects
                  whose solutions will be used in future rovers.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {researchData.map((item) => {
                return (
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <h3 className="text-center ">{item.name}</h3>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a className="text-light" href={item.linkedin}>
                          {" "}
                          <GrIcons.GrLinkedin />
                        </a>
                      </div>
                    </div>
                  </Card>

                );
              })}
            </div>
          </>
        );
      case "science":
        return (
          <>
            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
              <img
                className="img-fluid col-6 col-lg-4"
                src="SubsystemLogo/science.gif"
                alt="Science"
              />
              <div className="col-6 col-lg-4 my-auto">
                <p className="fs-3">Science</p>
                <p className="fs-6">
                  The Science subsystem is responsible for comprehensive
                  analysis of the biological, geological and chemical aspects of
                  a given area, based on which inferences on the presence of
                  life ,extinct or extant, are drawn. The required observations
                  are formed by techniques including but not limited to - in
                  situ soil analysis, sensor technology and observable geology.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
              <img
                className="img-fluid col-10 mx-auto"
                src="SubsystemLogo/science.gif"
                alt="Science"
              />
              <div className="col-10 mx-auto">
                <p className="fs-3">Science</p>
                <p className="fs-6">
                  The Science subsystem is responsible for comprehensive
                  analysis of the biological, geological and chemical aspects of
                  a given area, based on which inferences on the presence of
                  life ,extinct or extant, are drawn. The required observations
                  are formed by techniques including but not limited to - in
                  situ soil analysis, sensor technology and observable geology.
                </p>
              </div>
            </div>
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {sciData.map((item) => {
                return (

                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <h3 className="text-center ">{item.name}</h3>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a className="text-light" href={item.linkedin}>
                          {" "}
                          <GrIcons.GrLinkedin />
                        </a>
                      </div>
                    </div>
                  </Card>

                );

              })}
            </div>
          </>
        );
      case "management":
        return (
          <>

            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
              <img
                className="img-fluid col-6 col-lg-4"
                src="SubsystemLogo/management.gif"
                alt="Management"
              />
              <div className="col-6 col-lg-4 my-auto">
                <h1>Management & Public Relations</h1>
                <p>
                  The Management and PR subsystem of Mars Rover Manipal is
                  responsible for all the non-technical work of the team. It is
                  involved in the overall progress of the team by handling
                  sponsorship, finance, public relations, publicity, media
                  platforms and human resource management. The team designs
                  posters and brochures, manages the website and provides videos
                  for advertisement and sponsors. It is also responsible for the
                  well-ordered and smooth functioning of the team’s day to day
                  work and managing of all events.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
              <img
                className="img-fluid col-10 mx-auto"
                src="SubsystemLogo/management.gif"
                alt="Management"
              />
              <div className="col-10 mx-auto">

                <h1>Management & Public Relations</h1>
                <p>
                  The Management and PR subsystem of Mars Rover Manipal is
                  responsible for all the non-technical work of the team. It is
                  involved in the overall progress of the team by handling
                  sponsorship, finance, public relations, publicity, media
                  platforms and human resource management. The team designs
                  posters and brochures, manages the website and provides videos
                  for advertisement and sponsors. It is also responsible for the
                  well-ordered and smooth functioning of the team’s day to day
                  work and managing of all events.
                </p>
              </div>
            </div >
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase">Team Members </h3>
              {mgmtData.map((item) => {
                return (
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <p className="fs-3 text-center ">{item.name}</p>
                      <div className="col-12 d-flex justify-content-center text-secondary fixed-bottom mb-3">
                        <a className="text-light" href={item.linkedin}>
                          {" "}
                          <GrIcons.GrLinkedin />
                        </a>
                      </div>

                    </div>
                  </Card>

                );
              })}
            </div>
          </>
        );
      case "fa":
        // board members data
        return (
          <div className="col-12 d-flex mx-auto">
            <div className="row justify-content-center ">
              <h3 className="text-center text-uppercase ">Faculty Advisors </h3>
              {FAdata.map((item) => {
                return (
                  <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                    <div className="d-flex flex-column align-items-center p-4 ">
                      <img
                        src={item.img}
                        className="col-12 col-md-5 rounded-circle"
                        alt={item.name}
                      />
                      <p className="fs-3 text-center text-light">
                        {item.name}
                      </p>
                      <p className="fs-5 text-center text-secondary">
                        {item.pos}
                      </p>
                      <p className="fs-5 text-center text-secondary">
                        {item.dept}
                      </p>
                    </div>
                  </Card>

                );
              })}
            </div>
          </div>
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
      <div className="d-flex col-12 text-center justify-content-center p-3 flex-wrap d-none d-sm-flex">
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
          value="science"
          className="mx-3"
        >
          Science
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
      <div className="d-flex col-12 text-center justify-content-center p-3 flex-wrap d-flex d-sm-none">
        <Button
          outline
          size="sm"
          color="primary"
          className="mx-3"
          value="board"
          onClick={handleClick}
        >
          The Board
        </Button>
        <Button
          outline
          size="sm"
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
          size="sm"
          color="primary"
          className="mx-3"
        >
          ECS
        </Button>
        <Button
          outline
          size="sm"
          color="primary"
          onClick={handleClick}
          value="mech"
          className="mx-3"
        >
          Mechanical
        </Button>
        <Button
          outline
          size="sm"
          color="primary"
          onClick={handleClick}
          value="research"
          className="mx-3"
        >
          Research
        </Button>
        <Button
          outline
          size="md"
          color="primary"
          onClick={handleClick}
          value="science"
          className="mx-3"
        >
          Science
        </Button>
        <Button
          outline
          size="md"
          color="primary"
          onClick={handleClick}
          value="management"
          className="mx-3"
        >
          Management
        </Button>
        <Button
          outline
          size="md"
          color="primary"
          onClick={handleClick}
          value="fa"
          className="mx-3"
        >
          Faculty Advisors
        </Button>
      </div>
      {renderMembers(activeSub)}
    </div>
  );
}
