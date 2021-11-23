import React from "react";

const loading = () => {
  return (
    <div className="d-flex justify-content-center col-12 col-md-6 col-lg-4 m-auto">
      <video
        src="/loadingGif.mp4"
        autoPlay
        loop
        alt="loading logo"
        className="col-12"
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default loading;
