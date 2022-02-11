import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: FC = () => {
  const naviate = useNavigate();

  return (
    <>
      <h1>Information page</h1>
      <p>A lot of information on this page</p>
      <button className="btn" onClick={() => naviate("/")}>
        Return back
      </button>
    </>
  );
};

export default AboutPage;
