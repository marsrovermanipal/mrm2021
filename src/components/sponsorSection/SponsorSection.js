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
      bgpath: "",
    },
    {
      name: "Sick",
      bgpath: "",
    },
    {
      name: "KelpeTech",
      bgpath: "",
    },
    {
      name: "Aristo",
      bgpath: "",
    },
    {
      name: "Decopad Interiors",
      bgpath: "",
    },
    {
      name: "Aeroquol",
      bgpath: "",
    },
    {
      name: "LPS Bossard",
      bgpath: "",
    },
    {
      name: "Wheeleez",
      bgpath: "",
    },
    {
      name: "Nvidia",
      bgpath: "",
    },
    {
      name: "SolidWorks",
      bgpath: "",
    },
    {
      name: "Stevens",
      bgpath: "",
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
            className="col-4 p-3"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            <Card>
              <div className="p-5">
                <h3 className="text-center text-dark">{d.name}</h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
