import React, { useState, useEffect } from "react";
import { Modal, ModalHeader } from "reactstrap";
import AOS from "aos";
import Card from "../../components/card/Card";
import ImageCarousel from "../../components/carousel/ImageCarousel";
import styles from "./Urc1.module.css";

import data from "../../pages/Competitions/urcData";

function Urc1() {
  useEffect(() => {
    AOS.init();
  });

  const [modal, setModal] = useState("");

  const openModal = (name) => {
    setModal(name);
  };
  const closeModal = () => {
    setModal("");
  };

  return (
    <div className="col-12 d-flex mx-auto">
      <div className="row justify-content-center ">
        <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
          <img
            loading="lazy"
            className="img-fluid col-6 col-lg-4"
            src="/comp_logo/URC_Logo.webp"
            alt="ERC"
          />
          <div className="col-6 col-lg-6 my-auto">
            <p className="fs-5">
              The University Rover Challenge is a premier robotics competition
              organized annually by the Mars Society USA during summer at Mars
              Desert Research Station (MDRS) in Utah, USA.The challenge is to
              build a next-generation Mars Rover capable of working alongside
              humans in future Martian colonies.Each edition of the competition
              has a problem statement.The problem statement is designed to
              capture the complex system design requirements in such a
              scenario.We target the competition as a platform for us to hone
              our overall engineering skills in design and deployment of an
              Intelligent Rover System.The system can further be an effective
              tool for emulating a futuristic life on Mars.
            </p>
          </div>
        </div>

        <div className="row justify-content-center d-none d-sm-flex ">
          {data.map((item) => {
            return (
              <>
                <Card classname="col-lg-4 col-md-6 col-8 mx-auto mx-md-5 m-4 p-3">
                  <div
                    key={item.id}
                    id={`item${item.id}`}
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column align-items-center"
                    onClick={() => openModal(item.comp)}
                    dataToggle="tooltip"
                    dataPlacement="right"
                    title="Click here"
                  >
                    <div>
                      <img
                        src={item.img}
                        alt={item.comp}
                        loading="lazy"
                        className="col-12"
                      />
                    </div>
                    <div className="text-secondary text-center mt-auto">
                      <h3>{item.comp}</h3>
                      <h4>{item.pos}</h4>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>

        <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
          <img
            loading="lazy"
            className="img-fluid col-10 mx-auto"
            src="/comp_logo/URC_Logo.webp"
            alt="Urc"
          />
          <div className="col-11 mx-auto">
            <p className="text-center">
              The University Rover Challenge is a premier robotics competition
              organized annually by the Mars Society USA during summer at Mars
              Desert Research Station (MDRS) in Utah, USA. The challenge is to
              build a next-generation Mars Rover capable of working alongside
              humans in future Martian colonies. Each edition of the competition
              has a problem statement. The problem statement is designed to
              capture the complex system design requirements in such a scenario.
              We target the competition as a platform for us to hone our overall
              engineering skills in design and deployment of an Intelligent
              Rover System. The system can further be an effective tool for
              emulating a futuristic life on Mars.
            </p>
          </div>
          {data.map((item) => {
            return (
              <>
                <Card classname="col-lg-4 col-md-6 col-11 mx-auto mx-md-5 m-4 p-3">
                  <div
                    style={{ cursor: "pointer" }}
                    className="d-flex flex-column align-items-center"
                    onClick={() => openModal(item.comp)}
                  >
                    <div>
                      <img
                        src={item.img}
                        alt={item.comp}
                        loading="lazy"
                        className="col-12"
                      />
                    </div>
                    <div className="text-secondary text-center mt-auto">
                      <h3>{item.comp}</h3>
                      <h4>{item.pos}</h4>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>

        {data.map((item) => {
          return (
            <Modal
              isOpen={modal === item.comp}
              toggle={closeModal}
              centered
              size="xl"
            >
              <ModalHeader toggle={closeModal} className={`${styles.header}`}>
                <h2 className="text-dark text-center col-12">{item.comp}</h2>
              </ModalHeader>
              <div className="text-dark text-center col-12">
                {/* <img src={item.img} alt={item.comp} className="col-6 p-3" /> */}
                <iframe
                  // width="560"
                  height="315"
                  className="col-12 col-md-6"
                  src={item.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>

                <h3>{item.roverName}</h3>
                <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
                  <p className="col-8 mx-auto fs-6">{item.info}</p>
                </div>
                <div className="col-12 d-none flex-column d-sm-flex justify-content-around mx-auto">
                  <p className="col-8 mx-auto fs-5">{item.info}</p>
                </div>

                <div className="col-12 col-sm-8 mx-auto">
                  <table className="table table-dark table-striped ">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Maximum Speed</strong>
                        </td>
                        <td>{item.MaximumSpeed}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tires</strong>
                        </td>
                        <td>{item.Tires}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Tractive Effort</strong>
                        </td>
                        <td>{item.TractiveEffort}</td>
                      </tr>
                      {item.DriveSystemPower && (
                        <tr>
                          <td>
                            <strong>Drive System Power</strong>
                          </td>
                          <td>{item.DriveSystemPower}</td>
                        </tr>
                      )}
                      <tr>
                        <td>
                          <strong>Wheels</strong>
                        </td>
                        <td>{item.Wheels}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Suspension</strong>
                        </td>
                        <td>{item.Suspension}</td>
                      </tr>
                      {item.MaxTraversableHeight && (
                        <tr>
                          <td>
                            <strong>Max Traversable Height</strong>
                          </td>
                          <td>{item.MaxTraversableHeight}</td>
                        </tr>
                      )}
                      <tr>
                        <td>
                          <strong>Chassis</strong>
                        </td>
                        <td>{item.Chassis}</td>
                      </tr>
                      {item.ChassisWeight && (
                        <tr>
                          <td>
                            <strong>ChassisWeight</strong>
                          </td>
                          <td>{item.ChassisWeight}</td>
                        </tr>
                      )}
                      <tr>
                        <td>
                          <strong>Robotic arm</strong>
                        </td>
                        <td>{item.RoboticArm}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Horizontal reach</strong>
                        </td>
                        <td>{item.HorizontalReach}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Vertical reach</strong>
                        </td>
                        <td>{item.VerticalReach}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Soil collector</strong>
                        </td>
                        <td>{item.SoilCollector}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Centre of Gravity</strong>
                        </td>
                        <td>{item.CentreOfGravity}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Microcontrollerr</strong>
                        </td>
                        <td>{item.Microcontroller}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Single Board Computer</strong>
                        </td>
                        <td>{item.SingleBoardComputer}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Motor drivers</strong>
                        </td>
                        <td>{item.MotorDrivers}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Wheel motors</strong>
                        </td>
                        <td>{item.WheelMotors}</td>
                      </tr>
                      {item.AutonomousSystem && (
                        <tr>
                          <td>
                            <strong>Autonomous System</strong>
                          </td>
                          <td>{item.AutonomousSystem}</td>
                        </tr>
                      )}

                      <tr>
                        <td>
                          <strong>Communication frequencies</strong>
                        </td>
                        <td>{item.CommunicationFrequencies}</td>
                      </tr>
                      {item.Feedback && (
                        <tr>
                          <td>
                            <strong>Feedback</strong>
                          </td>
                          <td>{item.Feedback}</td>
                        </tr>
                      )}
                      <tr>
                        <td>
                          <strong>Sensors</strong>
                        </td>
                        <td>{item.Sensors}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-12 p-1 p-md-5">
                <ImageCarousel Items={item.pics} />
              </div>
            </Modal>
          );
        })}
      </div>
    </div>
  );
}

export default Urc1;
