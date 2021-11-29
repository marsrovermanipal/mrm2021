import React, { useState, Suspense, lazy } from "react";
import { Button } from "reactstrap";

import Loading from "../../components/Loading/loading";
const Erc = lazy(() => import("../../components/Comp/Erc"));
const Urc = lazy(() => import("../../components/Comp/Urc1"));
const Irdc = lazy(() => import("../../components/Comp/Irdc"));
const Irc = lazy(() => import("../../components/Comp/Irc"));
const Imh = lazy(() => import("../../components/Comp/Imh"));

export default function Comp() {
  const [activeComp, setActiveComp] = useState("URC");

  const renderComp = (comp) => {
    switch (comp) {
      case "URC":
        return (
          <Suspense fallback={<Loading />}>
            <Urc />
          </Suspense>
        );
      case "IRDC":
        return (
          <Suspense fallback={<Loading />}>
            <Irdc />
          </Suspense>
        );
      case "ERC":
        return (
          <Suspense fallback={<Loading />}>
            <Erc />
          </Suspense>
        );
      case "IRC":
        return (
          <Suspense fallback={<Loading />}>
            <Irc />
          </Suspense>
        );
      case "IMH":
        return (
          <Suspense fallback={<Loading />}>
            <Imh />
          </Suspense>
        );

      default:
        <Suspense fallback={<Loading />}>
          <Urc />
        </Suspense>;
    }
  };
  const handleClick = (e) => {
    setActiveComp(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">COMPETITIONS</h1>
      <div className="d-flex col-12 text-center justify-content-center p-3 flex-wrap">
        <Button
          outline
          size="lg"
          color="primary"
          className="mx-3 "
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
          className="mx-3 "
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
          className="mx-3 "
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
      {renderComp(activeComp)}
    </div>
  );
}
