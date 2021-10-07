import React, { useState } from "react";
import { Modal } from "reactstrap";
import Card from "../../components/card/Card";
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
      <Card classname="col-10 col-md-3 mx-auto mx-md-5 m-5 p-3">
        <div style={{ cursor: "pointer" }} onClick={() => openModal("2020")}>
          <img src="/2020Rover.JPG" alt="" className="col-12" />
          <div className="text-secondary text-center">
            <h3>URC 2020</h3>
            <h4>8th Worldwide</h4>
          </div>
        </div>
      </Card>
      <Modal isOpen={modal === "2020"} toggle={closeModal} centered size="xl">
        <div className="text-dark text-center col-12">
          <h2>URC 2020</h2>
          <img src="/2020Rover.JPG" alt="" className="col-6 p-3" />
          <p className="col-8 mx-auto fs-5">
            The 14th edition of University Rover Challenge was cancelled due to
            the Corona virus Pandemic. URC had released the System Acceptance
            Review (SAR) result in July and MRM stood 1st in India, 2nd in Asia
            and 7th wordwide. We also continued our run of being the best Indian
            Rover Team for the fourth consecutive year.
          </p>
          <div className="col-8 mx-auto">
            <table className="table table-dark table-striped">
              <tbody>
                <tr>
                  <td>
                    <strong>Maximum Speed</strong>
                  </td>
                  <td>1.7m/s</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tires</strong>
                  </td>
                  <td>Low Pressure Polyurethane Balloon Tires</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tractive Effort</strong>
                  </td>
                  <td>600N</td>
                </tr>
                <tr>
                  <td>
                    <strong>Wheels</strong>
                  </td>
                  <td>Full Floating Axle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </>
  );
}
