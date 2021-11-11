import React from 'react'
import Card from "../../components/card/Card";
import * as GrIcons from "react-icons/gr";

import data from '../../pages/Alumni/data21'

const Alumni2016 = () => {
    return (
        <div className="col-12 d-flex mx-auto">
            <div className="row justify-content-center ">
                <h3 className="text-center text-uppercase ">2021</h3>
                {data.map((item) => {
                    return (
                        <Card classname="bg-dark text-light col-lg-3 col-md-6 col-8 mx-auto mx-md-3 m-3 p-2">
                            <div className="d-flex flex-column align-items-center p-4 ">
                                <img
                                    loading="lazy"
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
        </div>
    )
}

export default Alumni2016
