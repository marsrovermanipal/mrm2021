import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

import data from "./urcData";
import Urc from "../../components/Comp/Urc1"
import Erc from "../../components/Comp/Erc"
import Irdc from "../../components/Comp/Irdc"
import Irc from "../../components/Comp/Irc"
import Imh from "../../components/Comp/Imh"

export default function Comp() {


  const [activeYear, setActiveYear] = useState("ERC");
  const renderMembers = (year) => {
    switch (year) {

      case "URC":
        return (
          <Urc />
        )
      case "IRDC":
        return (
          <Irdc />
        );
      case "ERC":
        return (
          <Erc />
        );
      case "IRC":
        return (
          <Irc />
        );
      case "IMH":
        return (
          <Imh />
        );

      default:
        <Urc />
    }
  };
  const handleClick = (e) => {
    setActiveYear(e.target.value);

    console.log(e.target.value);
  };


  return (
    <div className="container">
      <h1 className="text-center">COMPETITIONS</h1>
      <div className="d-flex col-12 text-center justify-content-center p-3 flex-wrap">
        <Button
          outline
          size="lg"
          color="primary"
          className="mx-3"
          value="URC"
          onClick={handleClick}
        >
          URC
        </Button>
        <Button
          outline
          size="lg"
          value="IRDC"
          color="primary"
          className="mx-3"
          onClick={handleClick}
        >
          IRDC
        </Button>
        <Button
          outline
          value="ERC"
          onClick={handleClick}
          size="lg"
          color="primary"
          className="mx-3"
        >
          ERC
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="IRC"
          className="mx-3"
        >
          IRC
        </Button>
        <Button
          outline
          size="lg"
          color="primary"
          onClick={handleClick}
          value="IMH"
          className="mx-3"
        >
          IMH
        </Button>


      </div>
      {renderMembers(activeYear)}
    </div>
  );
}




