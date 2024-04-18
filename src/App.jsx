import LeftSocial from "./Components/LeftSocial";
import AboutMe from "./Layout/AboutMe";
import Contact from "./Layout/Contact";
import Experience from "./Layout/Experience";
import Home from "./Layout/Home";
import Work from "./Layout/Work";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      {
        <>
          <LeftSocial />
          <Home />
          <AboutMe />
          <Experience />
          <Work />
          <Contact />
        </>
      }
    </>
  );
}

export default App;
