import LeftSocial from "./Components/LeftSocial";
import AboutMe from "./Layout/AboutMe";
import Contact from "./Layout/Contact";
import Experience from "./Layout/Experience";
import Home from "./Layout/Home";
import Work from "./Layout/Work";
import Loader from "./ui/Loader";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


function App() {
  const pathname = window.location.pathname;
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)}></Loader>
      ) : (
          <>
          <LeftSocial/>
          <Home />
            <AboutMe />
            <Experience />
            <Work />
            <Contact/>
            </>
      )}
    </>
  );
}

export default App;
