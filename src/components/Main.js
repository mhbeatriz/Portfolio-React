import React, { Fragment } from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Presentation from "./Presentation";

const Main = () => {
  return (
    <Fragment>
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
};
export default Main;
