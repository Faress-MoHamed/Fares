import LeftSocial from "./Components/LeftSocial";
import AboutMe from "./Layout/AboutMe";
import Contact from "./Layout/Contact";
import Experience from "./Layout/Experience";
import Home from "./Layout/Home";
import Work from "./Layout/Work";
import { MobileHandlerProvider } from "./MobileHandler";
function App() {
  return (
    <>
      {
        <MobileHandlerProvider>
          <LeftSocial />
          <Home />
          <AboutMe />
          <Experience />
          <Work />
          <Contact />
        </MobileHandlerProvider>
      }
    </>
  );
}

export default App;
