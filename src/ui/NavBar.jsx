import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
const navLinks = [
  {
    id: 0,
    name: "Home",
    link: "home",
  },
  {
    id: 1,
    name: "About Me",
    link: "aboutme",
  },
  {
    id: 2,
    name: "Experience",
    link: "experience",
  },
  {
    id: 3,
    name: "Work",
    link: "work",
  },
  {
    id: 4,
    name: "Contact",
    link: "contact",
  },
];
const navLinksMobile = [
  {
    id: 0,
    name: "Home",
    link: "home",
  },
  {
    id: 1,
    name: "About Me",
    link: "aboutme",
  },
  {
    id: 2,
    name: "Experience",
    link: "experience",
  },
  {
    id: 3,
    name: "Work",
    link: "work",
  },
  {
    id: 4,
    name: "Resume",
    link: "/docs/Resume.pdf",
  },
  {
    id: 5,
    name: "Contact",
    link: "contact",
  },
];
function NavBar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const controls = useAnimation();
  useEffect(() => {
    if (open) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: -100, opacity: 0 });
    }
  }, [open, controls]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Loop through each section and check if it's in view
      navLinks.forEach((item) => {
        const section = document.getElementById("#" + item.link);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveLink(item.name);
        }
      });
    };
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Listen to changes in items array
  function handleActiveLink(item) {
    setActiveLink(item);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <nav className="container fixed left-1/2 top-0  z-30  mx-auto flex  -translate-x-1/2 items-center justify-between bg-white/40 px-6 py-4 backdrop-blur-lg transition-all lg:top-5 lg:rounded-2xl ">
        <h2 className=" cursor-pointer  font-logo md:text-5xl uppercase text-3xl font-bold text-stone-900 transition-colors duration-300">
          Fares
        </h2>
        <ul className="hidden items-center justify-between lg:flex  lg:gap-4 xl:w-2/5">
          {navLinks.map((item) => {
            return (
              <motion.li
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * item.id,
                  ease: [0.17, 0.55, 0.55, 1],
                }}
                onClick={() => handleActiveLink(item.name)}
                className={`relative text-lg before:absolute before:bottom-[-5px] before:left-0 before:h-[2px] before:w-0 before:bg-slate-950 before:transition-all before:duration-300 hover:before:w-full ${activeLink === item.name ? "before:w-full" : ""}`}
                key={item.id}
              >
                <Link
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={20}
                  duration={500}
                  delay={500}
                  isDynamic={true}
                  to={`#${item.link}`}
                  className="cursor-pointer"
                  onClick={() => {
                    handleActiveLink(item.name);
                  }}
                >
                  {item.name}
                </Link>
              </motion.li>
            );
          })}
        </ul>
        <motion.a
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={0}
          duration={500}
          delay={500}
          isDynamic={true}
          href="./Me/fares_mohamed_ahmed.pdf"
          className="hidden w-32 cursor-pointer rounded-xl bg-primary-800 py-2 text-center text-white outline-none lg:block"
        >
          Resume
        </motion.a>

        <button
          aria-label="show bars"
          onClick={() => handleOpen()}
          className="block md:text-3xl text-2xl text-black lg:hidden"
        >
          <i className="fa-solid fa-bars" />
        </button>
      </nav>
      {
        <AnimatePresence>
          {open && (
            <>
              <div
                onClick={handleClose}
                className="left-0 top-0 h-full z-[99] fixed inset-0 overflow-x-hidden bg-black bg-opacity-50"
              ></div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={open ? { opacity: 1, x: 0 } : {}}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed ${open ? "" : "hidden"} right-0 top-0 z-[99999] w-2/4 lg:top-5`}
              >
                <ul className="flex  h-screen w-full flex-col items-start justify-start gap-5 bg-primary-200 p-3 backdrop-blur-lg lg:hidden">
                  <button
                    aria-label="clos sidebar"
                    className="text-4xl text-primary-900"
                    onClick={() => handleClose()}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                  {navLinksMobile.map((item) => {
                    return (
                      <>
                        <motion.li
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.2 * item.id,
                            ease: [0.17, 0.55, 0.55, 1],
                          }}
                          className={`relative text-lg before:absolute before:bottom-[-5px] before:left-0 before:h-[3px] before:w-0 before:bg-slate-950 before:transition-all before:duration-300 hover:before:w-full ${activeLink === item.name ? "before:w-full" : ""}`}
                          key={item.id}
                        >
                          <Link
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-20} // adjust this value based on the height of the padding or border
                            duration={500}
                            delay={500}
                            isDynamic={true}
                            to={`#${item.link}`}
                            onClick={() => {
                              handleActiveLink(item.name);
                              handleClose();
                            }}
                            className="cursor-pointer"
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      </>
                    );
                  })}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      }
    </>
  );
}

export default NavBar;
