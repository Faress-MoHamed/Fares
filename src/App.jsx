import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LeftSocial from "./Components/LeftSocial";
import AboutMe from "./Layout/AboutMe";
import Contact from "./Layout/Contact";
import Experience from "./Layout/Experience";
import Home from "./Layout/Home";
import Work from "./Layout/Work";
import { MobileHandlerProvider } from "./utils/MobileHandlerProvider";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  return (
    <>
      {
        <QueryClientProvider client={queryClient}>
            <MobileHandlerProvider>
              <LeftSocial />
              <Home />
              <AboutMe />
              <Experience />
              <Work />
              <Contact />
            </MobileHandlerProvider>
        </QueryClientProvider>
      }
    </>
  );
}

export default App;
