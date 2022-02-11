import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const AboutPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Information page</h1>
      <p>A lot information on this page</p>
      <button className="btn" onClick={() => navigate("/")}>
        Return back
      </button>
    </>
  );
};

export default AboutPage;
