import React, { useState } from "react";
import { Modal } from "reactstrap";
import Card from "../../components/card/Card";
import data from "./compData"

export default function Comp() {
  const [modal, setModal] = useState("");
  const openModal = (name) => {
    setModal(name);
  };
  const closeModal = () => {
    setModal("");
  };
  return (
    <>
      <h1 className="text-center">Competitions</h1>
      <div className="row justify-content-center ">
        {data.map((item) => {

          return (
            <>
              <Card classname="col-lg-3 col-md-6 mx-auto mx-md-5 m-4 p-3">
                <div style={{ cursor: "pointer" }} onClick={() => openModal("2020")}>
                  <img src={item.img} alt={item.comp} className="col-12" />
                  <div className="text-secondary text-center">
                    <h3>{item.comp}</h3>
                    <h4>{item.pos}</h4>
                  </div>
                </div>
              </Card>
              <Modal isOpen={modal === "2020"} toggle={closeModal} centered size="xl">
                <div className="text-dark text-center col-12">
                  <h2>{item.comp}</h2>
                  <img src={item.img} alt={item.comp} className="col-6 p-3" />
                  <h3>{item.roverName}</h3>
                  <p className="col-8 mx-auto fs-5">
                    {item.info}
                  </p>
                  <div className="col-8 mx-auto">
                    <table className="table table-dark table-striped">
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
                        <tr>
                          <td>
                            <strong>Chassis</strong>
                          </td>
                          <td>{item.Chassis}</td>
                        </tr>
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
                        <tr>
                          <td>
                            <strong>Batteries</strong>
                          </td>
                          <td>{item.Batteries}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Communication frequencies</strong>
                          </td>
                          <td>{item.CommunicationFrequencies}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Feedback</strong>
                          </td>
                          <td>{item.Feedback}</td>
                        </tr>
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
              </Modal>
            </>
          )
        })}
      </div>
    </>
  );
}
