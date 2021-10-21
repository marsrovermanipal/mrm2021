import React, { useState } from "react";
import { Button } from "reactstrap";

import Alumni2016 from '../../components/Alumni/Alumni2016'
import Alumni2017 from '../../components/Alumni/Alumni2017'
import Alumni2018 from '../../components/Alumni/Alumni2018'
import Alumni2019 from '../../components/Alumni/Alumni2019'
import Alumni2020 from '../../components/Alumni/Alumni2020'
import Alumni2021 from '../../components/Alumni/Alumni2021'



export default function Alumni() {
  const [activeYear, setActiveYear] = useState("2021");
  const renderMembers = (year) => {
    switch (year) {

      case "2021":
        return (
          <Alumni2021 />
        )
      case "2020":
        return (
          <Alumni2020 />
        );
      case "2019":
        return (
          <Alumni2019 />
        );
      case "2018":
        return (
          <Alumni2018 />
        );
      case "2017":
        return (
          <Alumni2017 />
        );
      case "2016":
        return (
          <Alumni2016 />
        );
      default:
        <Alumni2021 />
    }
  };
  const handleClick = (e) => {
    setActiveYear(e.target.value);

    console.log(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center">The Team</h1>
      <div className="d-flex col-12 text-center justify-content-center p-3 flex-wrap">
        <Button
          outline
          size="lg"
          color="primary"
          className="mx-3"
          value="2021"
          onClick={handleClick}
        >
          2021
        </Button>
        <Button
          outline
          size="lg"
          value="2020"
          color="primary"
          className="mx-3"
          onClick={handleClick}
        >
          2020
        </Button>
        <Button
          outline
          value="2019"
          onClick={handleClick}
          size="lg"
          color="primary"
          className="mx-3"
        >
          2019
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="2018"
          className="mx-3"
        >
          2018
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="2017"
          className="mx-3"
        >
          2017
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="2016"
          className="mx-3"
        >
          2016
        </Button>

      </div>
      {renderMembers(activeYear)}
    </div>
  );
}


