import React, { useState, lazy, Suspense } from "react";
import { Button } from "reactstrap";
import Loading from "../../components/Loading/loading";
const Alumni2016 = lazy(() => import("../../components/Alumni/Alumni2016"));
const Alumni2017 = lazy(() => import("../../components/Alumni/Alumni2017"));
const Alumni2018 = lazy(() => import("../../components/Alumni/Alumni2018"));
const Alumni2019 = lazy(() => import("../../components/Alumni/Alumni2019"));
const Alumni2020 = lazy(() => import("../../components/Alumni/Alumni2020"));
const Alumni2021 = lazy(() => import("../../components/Alumni/Alumni2021"));

export default function Alumni() {
  const [activeYear, setActiveYear] = useState("2021");
  const renderMembers = (year) => {
    switch (year) {
      case "2021":
        return (
          <Suspense fallback={<Loading />}>
            <Alumni2021 />
          </Suspense>
        );
      case "2020":
        return (
          <Suspense fallback={<Loading />}>
            <Alumni2020 />
          </Suspense>
        );
      case "2019":
        return (
          <Suspense fallback={<Loading />}>
            <Alumni2019 />
          </Suspense>
        );
      case "2018":
        return (
          <Suspense fallback={<Loading />}>
            <Alumni2018 />
          </Suspense>
        );
      case "2017":
        return (
          <Suspense fallback={<Loading />}>
            <Alumni2017 />
          </Suspense>
        );
      case "2016":
        return (
          <Suspense fallback={<Loading />}>
            <Alumni2016 />
          </Suspense>
        );
      default:
        <Suspense fallback={<Loading />}>
          <Alumni2021 />
        </Suspense>;
    }
  };
  const handleClick = (e) => {
    setActiveYear(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">OUR ALUMNI</h1>
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
