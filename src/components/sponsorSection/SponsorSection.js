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
      name: "Sujanand Engineers & Contractors",
      bgpath: "/sponsors/Sujanand.png",
      link: "",
    },
    {
      name: "Wheeleez",
      bgpath: "/sponsors/Wheeleez.png",
      link: "https://wheeleez.com/",
    },
    {
      name: "Nvidia",
      bgpath: "/sponsors/NVIDIA.jpg",
      link: "https://nvidia.com",
    },
    {
      name: "Solidworks",
      bgpath: "/sponsors/Solidworks.png",
      link: "https://solidworks.com",
    },
    {
      name: "Altium Designer",
      bgpath: "/sponsors/altium_designer.png",
      link: "https://www.altium.com/altium-designer",
    },
    {
      name: "ANSYS",
      bgpath: "/sponsors/ansys.png",
      link: "https://www.ansys.com/en-in",
    },
    {
      name: "PCB Power",
      bgpath: "/sponsors/PCB_Power.png",
      link: "https://www.pcbpower.com/",
    },
  ];
  return (
    <>
      <h1 className="text-center ">Our Sponsors</h1>
      <p
        className="col-10 mx-auto text-center fs-5"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        Sponsors have played a vital role in the emergence of Mars Rover Manipal
        as one of the leading teams of the world. It is the constant support of
        our sponsors in term of financial and technical resources which has kept
        us going to pursue our goals. We are grateful to all our sponsors for
        their support and hope to augment our relationship.
      </p>
      <div className="col-9 mx-auto d-flex justify-content-center flex-wrap">
        {data.map((d) => (
          <div
            className="col-12 col-md-6 col-lg-3 p-3"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="flip-left"
          >
            <a href={d.link}>
              <Card>
                <div className="p-2">
                  <img src={d.bgpath} alt={d.name} className="col-12 p-1" />
                  {/* <h3 className="text-center text-dark">{d.name}</h3> */}
                </div>
              </Card>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
