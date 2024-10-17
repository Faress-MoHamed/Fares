import { useState } from "react";
import {
  Bootstrap,
  Expressjs,
  Javascript,
  NextJs,
  NodeJs,
  Reactjs,
  Redux,
  Sass,
  TailwindCSS,
  dots,
} from "../../public/skills/export";
import { motion } from "framer-motion";

function Icons({ dispatch }) {
  const [hover, setHover] = useState(false);
  const [item, setItem] = useState(null);

  function handleItem(item) {
    setItem(item);
  }
  function handleHover(item) {
    setHover((e) => !e);
    handleItem(item);
  }

  const altSkills = [
    { name: "Expressjs", image: Expressjs },
    { name: "javaScript", image: Javascript },
    { name: "bootstrap", image: Bootstrap },
    { name: "NodeJs", image: NodeJs },
    { name: "Reactjs", image: Reactjs },
    { name: "Redux", image: Redux },
    { name: "TailwindCSS", image: TailwindCSS },
    { name: "Nextjs", image: NextJs },
    { name: "Sass", image: Sass },
  ];

  return (
    <>
      <ul className="flex  flex-wrap gap-5 my-4">
        {altSkills.map((el) => (
          <li
            onMouseEnter={() => handleHover(el.name)}
            onMouseLeave={() => handleHover(el.name)}
            key={el.name}
            className="relative flex flex-col items-center justify-center"
          >
            <img src={el.image} alt={el.name} />
            <motion.p
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.3,

                ease: "easeIn",
              }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${hover && item === el.name ? "block" : "hidden"} shadow-small rounded-full px-2 opacity-0 absolute top-[-38px] bg-primary-950 text-white p-1`}
            >
              {el.name}
            </motion.p>
          </li>
        ))}
        <li
          onClick={() => dispatch({ type: "click" })}
          className="cursor-pointer"
        >
          <img src={dots} alt="" />
        </li>
      </ul>
    </>
  );
}
export default Icons;
