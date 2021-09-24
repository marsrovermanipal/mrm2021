import React from "react";
import Card from "../card/Card";

export default function SponsorSection() {
  const data = [
    {
      name: "s1",
      bgpath: "",
    },
    {
      name: "s1",
      bgpath: "",
    },
    {
      name: "s1",
      bgpath: "",
    },
    {
      name: "s1",
      bgpath: "",
    },
    {
      name: "s1",
      bgpath: "",
    },
    {
      name: "s1",
      bgpath: "",
    },
  ];
  return (
    <>
      <h1 className="text-center">Our Sponsors</h1>
      <div className="col-12 d-flex justify-content-center flex-wrap">
        {data.map((d) => (
          <div className="col-4 p-3">
            <Card>
              <div className="p-5">
                <h3 className="text-center">{d.name}</h3>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
