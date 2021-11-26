import React, { Suspense, lazy } from "react";

import data from "./Research-data";
import Loading from "../../components/Loading/loading"
const Card = lazy(() => import("../../components/card/Card"));

export default function Research() {
  return (
    <div className="text-center col-10 mx-auto text-light">
      <h1 className="mt-4">RESEARCH </h1>
      <p className="mx-auto fs-5">
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
      <p className="fs-2 text-decoration-underline">PUBLICATIONS</p>
      <div className="row justify-content-center ">
        <Suspense fallback={<Loading />}>
          {data.map((item) => {
            return (
              <Card classname="bg-light text-dark col-lg-3 col-md-5 col-10 mx-auto mx-md-3 m-3 p-4">
                <div >
                  <h5 className="">{item.title}</h5>
                  {item.img && <img className="col-12" src={item.img} loading="lazy" alt={item.title} />}
                  <p className="">{item.event}</p>
                  <p className="">{item.author}</p>
                </div>
              </Card>
            );
          })}
        </Suspense>
      </div>
    </div>
  );
}
