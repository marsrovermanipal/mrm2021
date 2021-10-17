import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../card/Card";

export default function SponsorSection() {
  useEffect(() => {
    AOS.init();
  });

  const data = [
    {
      name: "Mouser Electronics",
      bgpath: "sponsors/mouser.jpg",
    },
    {
      name: "Sick",
      bgpath: "sponsors/sick.jpg",
    },
    {
      name: "KelpeTech",
      bgpath: "sponsors/kelpeTech.jpg",
    },
    {
      name: "Aristo",
      bgpath: "sponsors/aristo.jpg",
    },
    {
      name: "Aeroquol",
      bgpath: "sponsors/aeroqual.jpg",
    },
    {
      name: "LPS Bossard",
      bgpath: "sponsors/lpsbossard.jpg",
    },
    {
      name: "Wheeleez",
      bgpath: "sponsors/wheeleez.jpg",
    },
    {
      name: "Nvidia",
      bgpath: "sponsors/nvidia.jpg",
    },
    {
      name: "SolidWorks",
      bgpath: "sponsors/solidworks.jpg",
    },
    {
      name: "Decopad Interiors",
      bgpath: "sponsors/decopad-logo.jpeg",
    },
    {
      name: "Stevens",
      bgpath: "sponsors/stevens.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-center">Our Sponsors</h1>
      <p
        className="col-8 mx-auto text-center fs-5"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        Sponsors have played a vital role in the emergence of Mars Rover Manipal
        as one of the leading teams of the world. It is the constant support of
        our sponsors in term of financial and technical resources which has kept
        us going to pursue our goals. We are grateful to all our sponsors for
        their support and hope to augment our relationship.
      </p>
      <div className="col-8 mx-auto d-flex justify-content-center flex-wrap">
        {data.map((d) => (
          <div
            className="col-12 col-md-6 col-lg-3 p-3"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            <Card>
              <div className="p-2">
                <img src={d.bgpath} alt={d.name} className="col-12 p-1" />
                {/* <h3 className="text-center text-dark">{d.name}</h3> */}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
