import React from 'react'
import Card from "../../components/card/Card";

import data from '../../pages/Competitions/IrcData'

const Irc = () => {
    return (
        <div className="col-12 d-flex mx-auto">
            <div className="row justify-content-center ">
                {/* <h3 className="text-center text-uppercase ">IRC </h3> */}


                <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
                    <img
                        loading="lazy"
                        className="img-fluid col-6 col-lg-4"
                        src="/comp_logo/MSSA_Logo.png"
                        alt="MSSA"
                    />
                    <div className="col-6 col-lg-6 my-auto">

                        <p className="fs-5">
                            The International Rover Challenge (formerly Indian Rover Challenge) is an annual robotics competition which features an engineering challenge to engage students worldwide in the next phase of space exploration. IRC is the only robotics and space exploration competition of its kind in Asia-Pacific which aims to ignite and encourage the spirit of innovation amongst budding engineers as they set on a quest to build a space exploration rovers, using their skills and ideas. The competition challenges college students to design and build next-generation Mars Rovers and compete in Mars Simulated conditions. IRC is part of the Rover Challenge Series (RCS) of The Mars Society.
                        </p>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
                    <img
                        loading="lazy"
                        className="img-fluid col-10 mx-auto"
                        src="/comp_logo/MSSA_Logo.png"
                        alt="MSSA"
                    />
                    <div className="col-11 mx-auto">

                        <p className="text-center">
                            The International Rover Challenge (formerly Indian Rover Challenge) is an annual robotics competition which features an engineering challenge to engage students worldwide in the next phase of space exploration. IRC is the only robotics and space exploration competition of its kind in Asia-Pacific which aims to ignite and encourage the spirit of innovation amongst budding engineers as they set on a quest to build a space exploration rovers, using their skills and ideas. The competition challenges college students to design and build next-generation Mars Rovers and compete in Mars Simulated conditions. IRC is part of the Rover Challenge Series (RCS) of The Mars Society.
                        </p>
                    </div>
                    {data.map((item) => {
                        return (
                            <Card classname="col-lg-6 col-md-6 col-11 mx-auto mx-md-5 m-3 p-2">
                                <div
                                    className="d-flex flex-column align-items-center"
                                >
                                    <div>
                                        <img src={item.img} alt={item.comp} loading="lazy" className="col-12" />
                                    </div>
                                    <div className="text-secondary text-center mt-auto">
                                        <h3>{item.comp}</h3>
                                        <h4>{item.pos}</h4>
                                    </div>
                                    <p className="fs-6 text-dark text-center">{item.info}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div >


                <div className="justify-content-center d-none d-sm-flex ">
                    {data.map((item) => {
                        return (
                            <Card classname=" col-lg-6 col-md-6 col-8 mx-auto mx-md-5 m-4 p-3">
                                <div
                                    className="d-flex flex-column align-items-center"
                                >
                                    <div>
                                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pOXV26B_EI0" title="YouTube video player" frameborder="0" allow=" autoplay; " allowfullscreen></iframe> */}
                                        <img src={item.img} alt={item.comp} loading="lazy" className="col-12" />
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
        </div>
    )
}

export default Irc
