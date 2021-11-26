import React from 'react'
import Card from "../../components/card/Card";
import data from '../../pages/Competitions/ErcData'

const Erc = () => {
    return (
        <div className="col-12 d-flex mx-auto">
            <div className="row justify-content-center ">
                {/* <h3 className="text-center text-uppercase ">ERC</h3> */}

                <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
                    <img
                        loading="lazy"
                        className="img-fluid col-6 col-lg-4"
                        src="/comp_logo/ERC_Logo.png"
                        alt="ERC"
                    />
                    <div className="col-6 col-lg-6 my-auto">

                        <p className="fs-5">
                            The European Rover Challenge is an international robotics competition, where academic teams from around the world present their mobile robot designs, competing in competitions based on real ESA and NASA missions. The competition takes place on the world’s largest artificial Martian track, that is directly derived from the surface of the Red Planet. Since 2021, the competition is held in both formulas: ON-SITE (teams compete with self-constructed robots on MarsYard in Poland) and REMOTE (competitors from several continents will remotely control the robot, physically moving along a track located in Poland, on the campus of the Kielce University of Technology).
                        </p>
                    </div>
                </div>
                <div className="col-12 d-flex flex-column d-sm-none justify-content-around mx-auto">
                    <img
                        loading="lazy"
                        className="img-fluid col-11 mx-auto"
                        src="/comp_logo/ERC_Logo.png"
                        alt="ERC"
                    />
                    <div className="col-11 mx-auto">

                        <p className="text-center">
                            The European Rover Challenge is an international robotics competition, where academic teams from around the world present their mobile robot designs, competing in competitions based on real ESA and NASA missions. The competition takes place on the world’s largest artificial Martian track, that is directly derived from the surface of the Red Planet. Since 2021, the competition is held in both formulas: ON-SITE (teams compete with self-constructed robots on MarsYard in Poland) and REMOTE (competitors from several continents will remotely control the robot, physically moving along a track located in Poland, on the campus of the Kielce University of Technology).
                        </p>
                    </div>
                </div >

                <div className=" justify-content-center d-none d-sm-flex ">
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

                <div className=" justify-content-center d-flex d-sm-none ">
                    {data.map((item) => {
                        return (
                            <Card classname=" col-lg-12 col-md-6 col-11 mx-auto p-2">
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
                                    <p className="fs-6 text-dark text-center">{item.info}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Erc
