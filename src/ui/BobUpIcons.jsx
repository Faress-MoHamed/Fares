import { useEffect, useState } from "react";
import {
  Bootstrap,
  Css,
  Expressjs,
  Git,
  Html,
  Javascript,
  MeterialUi,
  MongoDB,
  NodeJs,
  Reactjs,
  Redux,
  TailwindCSS,
  Vite,
  figma,
  FramerMotion,
} from "../../public/skills/export";
import { motion } from "framer-motion";
function BobUpIcons({ dispatch, clicked }) {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (clicked && !animationCompleted) {
      // You can set a timeout to delay the animation if needed
      setTimeout(() => {
        setAnimationCompleted(true);
      }, 100);
    }
  }, [clicked, animationCompleted]);

  const skills = [
    { name: "bootstrap", image: Bootstrap },
    { name: "css", image: Css },
    { name: "Expressjs", image: Expressjs },
    { name: "git", image: Git },
    { name: "html", image: Html },
    { name: "javaScript", image: Javascript },
    { name: "MeterialUi", image: MeterialUi },
    { name: "MongoDB", image: MongoDB },
    { name: "NodeJs", image: NodeJs },
    { name: "Reactjs", image: Reactjs },
    { name: "Redux", image: Redux },
    { name: "TailwindCSS", image: TailwindCSS },
    { name: "Vite", image: Vite },
    { name: "figma", image: figma },
    { name: "FramerMotion", image: FramerMotion },
  ];
  return (
    <>
      {
        <motion.div
          initial={{ opacity: 0 }}
          animate={clicked && animationCompleted ? { opacity: 1 } : {}}
          exit={{ opacity: 0 }}
          onClick={() => dispatch({ type: "close" })}
          className={` block fixed left-0 top-[0] h-full w-full z-40 backdrop-blur-xl`}
        ></motion.div>
      }
      {
        <div className="flex w-screen h-[100dvh] fixed inset-0 z-50 overflow-x-auto justify-center items-center sm:items-center">
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={clicked && animationCompleted ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`bg-white p-6 flex flex-col relative z-50 w-full box-border bg-content1 outline-none mx-1 my-1 sm:mx-6 sm:my-16 max-w-5xl shadow-small max-h-[calc(100%_-_7.5rem)] rounded-none md:rounded-xl !m-0`}
          >
            <motion.button
              aria-label="exit"
              className="absolute right-3 top-3 z-20"
              onClick={() => dispatch({ type: "close" })}
            >
              <i className="fa-regular fa-circle-xmark text-2xl text-primary-600 hover:text-primary-900 transition-colors duration-300"></i>
            </motion.button>
            <header className="text-lg mb-7">My Skills</header>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto
            overflow-x-hidden place-items-center"
            >
              {skills.map((el, i) => (
                <motion.li
                  initial={{ opacity: 0, x: 100 * (i + 10) }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="flex flex-col justify-center items-center"
                  key={el.name}
                >
                  <img className="" src={el.image} alt={el.name} />
                  <p className="text-center text-lg font-semibold">{el.name}</p>
                </motion.li>
              ))}
            </ul>
            {/* <div className="bg-red-500"></div> */}
          </motion.section>
        </div>
      }
    </>
  );
}

export default BobUpIcons;
