import React from 'react'
import data from "./Research-data"

export default function Research() {
    return (
        <div className="text-center text-light">
            <h1 >RESEARCH </h1>
            <p >
                Our work at MRM Research is inter-disciplinary, and we blend theory with practice. We work not only on great
                ideas, but also implement, deploy, experiment, contribute to and learn from the world around us. We collaborate freely
                with  academia, including some of the world's premier institutes such as the Massachusett's Institute of Technology.
                We at MRM Research come together to push the boundaries of what we know and what is possible. As an organization, we
                maintain a portfolio of projects driven by fundamental research, new product innovation, product contribution and
                infrastructure  goals, while providing our members the freedom to emphasize specific types of work. We strive to create an
                environment conducive to many different types of research across many different time scales and fields, including
                Artificial Intelligence, Electronics and Control Systems and much more! We believe the most interesting research
                questions are derived from real world problems. Working on cutting edge research with a practical focus, we push boundaries
                every day. At the same time, we publish papers and present them at some of the world's top conferences and research
                journals.
            </p>
            <h5 >PUBLICATIONS</h5>
            <div className="row justify-content-center">
                {data.map((item) => {
                    const { title, author, img, event, id } = item

                    return (

                        <div className="card research-card col-lg-3 col-md-4 col-sm-6 text-center text-dark" key={id} >
                            <h5 className="card-title">{title}</h5>
                            <img className="card-img-top" src={img} alt={title} />
                            <div className="card-body">
                                <p className="card-text">{event}</p>
                                <p className="card-text">{author}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
