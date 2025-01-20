import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Card from "../../components/card/Card";
import data from "../../pages/Competitions/IrcData";
const Irc = () => {
    return (
        <>
            <div className="col-12 d-none d-sm-flex justify-content-around mx-auto">
                <img loading="lazy" className="img-fluid col-6 col-lg-4" src="/comp_logo/SPROS_IRC_logo.png" alt="MSSA" />
                <div className="col-6 col-lg-6 my-auto">
                    <p className="fs-5">
                        The International Rover Challenge (formerly known as the Indian Rover Challenge), organized by the Space Robotics Society, is
                        an annual robotics competition designed to provide students worldwide with an engineering challenge in the realm of space
                        exploration. Distinguished as the sole competition of its kind in the Asia-Pacific region, the IRC serves the critical
                        objective of fostering innovation and inspiring aspiring engineers. Participants are tasked with the mission of designing and
                        constructing advanced Mars Rovers, with the ultimate goal of competing in simulated Martian conditions. This competition
                        serves as a platform for college students to showcase their skills and ingenuity in the pursuit of advancing space exploration
                        technologies.
                    </p>
                </div>
            </div>
            <div>
                <p className="fs-4 font-light"><b>INTERNATIONAL ROVER CHALLENGE FINALS 2025</b></p>
            </div>
            <div>
                <p className="fs-10">
                    The Finals of IRC 2025 will take place within the meticulously crafted Sproscape, an expansive simulated landscape spanning 20,000
                    square meters. Notably, Sproscape stands as the largest arena of its kind globally. The event is scheduled to transpire from the
                    28th of January to the 2nd of February at the Birla Institute of Technology and Science, Pilani, K K Birla Goa Campus. Take a look at our rover for the competition missions!
                </p>
            </div>
            <div className="max-w-10 py-8 ">
                <UncontrolledCarousel
                    items={[
                        {
                            src: "/comp/ircTasks/abex.jpg",
                            altText: "Astrobiology Expedition",
                            caption:
                                "The mission involves the rover serving as a Mobile Science Laboratory to collect and evaluate samples from designated Martian sites",
                            header: "Astrobiology Expedition",
                            key: 1,
                        },
                        {
                            src: "/comp/ircTasks/autex.jpeg",
                            altText: "Autonomous Expedition",
                            caption:
                                "Throughout this mission, the rover will need to navigate autonomously through moderately rugged terrain, moving between designated markers.",
                            header: "Autonomous Expedition",
                            key: 2,
                        },
                        {
                            src: "/comp/ircTasks/rdo.jpg",
                            altText: "Reconnaissance and Delivery Operation",
                            caption:
                                "Rovers in the mission must search, pick up, and deliver objects to specified coordinates or store them for later retrieval.",
                            header: "Reconnaissance and Delivery Operation",
                            key: 3,
                        },
                        {
                            src: "/comp/ircTasks/idmo.jpg",
                            altText: "Instrument Deployment and Maintenance Operation",
                            caption:
                                "The rover is to cover a brief distance to engage with a simulated instrument panel, executing a series of specific maintenance and deployment tasks using robotic manipulators.",
                            header: "Instrument Deployment and Maintenance Operation",
                            key: 4,
                        },
                    ]}
                />
            </div>
            <div className="py-2">
                <p className="fs-4 font-light"><b>OUR PREVIOUS RESULTS</b></p>
            </div>
            <div className="row justify-content-center d-none d-sm-flex">
                {data.map((item) => {
                    return (
                        <Card classname="col-lg-3 col-md-3 col-11 mx-auto mx-md-5 m-3 p-2">
                            <div className="d-flex flex-column align-items-center">
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
            </div>
        </>
    );
};

export default Irc;
