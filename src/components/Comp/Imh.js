import React from 'react'
import Card from "../../components/card/Card";

import data from '../../pages/Competitions/ImhData'

const Imh = () => {
    return (
        <div className="col-12 d-flex mx-auto">
            <div className="row justify-content-center ">
                {/* <h3 className="text-center text-uppercase ">IMH</h3> */}


                <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
                    <img
                        className="img-fluid col-6 col-lg-4"
                        src="/MSSA_LOGO.png"
                        alt="MSSA"
                    />
                    <div className="col-6 col-lg-6 my-auto">

                        <p>
                            International Mars Hackathon challenges teams from diverse disciplines to come up with insightful solutions to mind-boggling Space Exploration problems! The 48hr competition requires students to think on their feet and devise creative approaches in several thematic areas.
                        </p>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
                    <img
                        className="img-fluid col-10 mx-auto"
                        src="MSSA_Logo.png"
                        alt="MSSA"
                    />
                    <div className="col-10 mx-auto">

                        <p>
                            International Mars Hackathon challenges teams from diverse disciplines to come up with insightful solutions to mind-boggling Space Exploration problems! The 48hr competition requires students to think on their feet and devise creative approaches in several thematic areas.
                        </p>
                    </div>
                </div >



                {data.map((item) => {
                    return (
                        <Card classname="col-lg-6 col-md-6 col-8 mx-auto mx-md-5 m-4 p-3">
                            <div
                                className="d-flex flex-column align-items-center"
                            >
                                <div>
                                    <img src={item.img} alt={item.comp} className="col-12" />
                                </div>
                                <div className="text-secondary text-center mt-auto">
                                    <h3>{item.comp}</h3>
                                    <h4>{item.pos}</h4>
                                </div>
                                <p className="fs-5 text-dark text-center">{item.info}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    )
}

export default Imh
