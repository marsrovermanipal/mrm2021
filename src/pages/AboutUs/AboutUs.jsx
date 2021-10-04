import React, { useState } from "react";
import Card from "../../components/card/Card";
import * as GrIcons from "react-icons/gr";
import styles from "./AboutUs.module.css";
import { Button } from "reactstrap";
export default function AboutUs() {
  const [activeSub, setActiveSub] = useState("board");
  const renderMembers = (sub) => {
    switch (sub) {
      case "board":
        return (
          // board members data
          <h1>Board data</h1>
        );
      case "ai":
        return (
          <div className="col-8 d-flex mx-auto">
            <div className="col-3">
              <img src="" alt="" />
            </div>
            <div className="col-5">
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
        );
      case "ecs":
        return <h1>ecs</h1>;
      case "mech":
        return <h1>mech</h1>;
      case "research":
        return <h1>research</h1>;
      case "management":
        return <h1>management</h1>;
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
      <div className="col-12 d-flex justify-content-center flex-wrap">
        <div className="col-3 m-3">
          <Card classname="bg-light">
            <div className="d-flex flex-column align-items-center p-4 ">
              <img src="/logo.png" className="col-12 col-md-5" alt="" />
              <h3 className="text-center text-secondary">Aayush Shah</h3>
              <div className="col-12 d-flex justify-content-center text-secondary">
                <GrIcons.GrLinkedin />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
