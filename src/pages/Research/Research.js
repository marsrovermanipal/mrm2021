import React from "react";
import Card from "../../components/card/Card";
import data from "./Research-data";

export default function Research() {
  return (
    <div className="text-center col-10 mx-auto text-light">
      <h1>RESEARCH </h1>
      <p className="mx-auto fs-6">
        Our work at MRM Research is inter-disciplinary, and we blend theory with
        practice. We work not only on great ideas, but also implement, deploy,
        experiment, contribute to and learn from the world around us. We
        collaborate freely with academia, including some of the world's premier
        institutes such as the Massachusetts Institute of Technology. We at MRM
        Research come together to push the boundaries of what we know and what
        is possible. As an organization, we maintain a portfolio of projects
        driven by fundamental research, new product innovation, product
        contribution and infrastructure goals, while providing our members the
        freedom to emphasize specific types of work. We strive to create an
        environment conducive to many different types of research across many
        different time scales and fields, including Artificial Intelligence,
        Electronics and Control Systems and much more! We believe the most
        interesting research questions are derived from real world problems.
        Working on cutting edge research with a practical focus, we push
        boundaries every day. At the same time, we publish papers and present
        them at some of the world's top conferences and research journals.
      </p>
      <h5>PUBLICATIONS</h5>
      <div className="row justify-content-center">
        {data.map((item) => {
          const { title, author, img, event, id } = item;

          return (
            <div
              className="research-card m-3 col-lg-3 col-md-6 col-sm-8 text-center text-dark"
              key={id}
            >
              <Card>
                <div className="research">
                  <h5 className="">{title}</h5>
                  {img && <img className="" src={img} alt={title} />}

                  <p className="">{event}</p>
                  <p className="">{author}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
