import { motion } from "framer-motion";
import {
  Expressjs,
  NodeJs,
  Reactjs,
  TailwindCSS,
} from "../../public/skills/export";
import { useState } from "react";
const track = [
  { name: "Expressjs", image: Expressjs },
  { name: "NodeJs", image: NodeJs },
  { name: "Reactjs", image: Reactjs },
  { name: "TailwindCSS", image: TailwindCSS },
];
function Track() {
  const [hover, setHover] = useState(false);
  const [item, setItem] = useState(null);

  function handleItem(item) {
    setItem(item);
  }
  function handleHover(item) {
    setHover((e) => !e);
    handleItem(item);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-10 shadow-2xl overflow-hidden xl:py-10 md:py-8  xl:px-8 md:px-6 px-5 rounded-[20px] backdrop-blur-lg flex flex-col gap-4"
    >
      <h2 className="text-cyan-700 text-3xl font-bold">My recent track</h2>
      <ul className="flex justify-center flex-wrap gap-7 my-4">
        {track.map((el) => (
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
              className={`${hover && item === el.name ? "block" : "hidden"} shadow-small rounded-full px-2 opacity-0 absolute top-[-38px] bg-cyan-950 text-white p-1`}
            >
              {el.name}
            </motion.p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Track;
