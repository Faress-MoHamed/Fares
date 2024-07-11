import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function Cards({ category, title, repo, live, img }) {
  const [hover, setHover] = useState(false);
  function hanldeSetHover() {
    setHover(true);
  }
  function hanldeRemoveHover() {
    setHover(false);
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.3 }}
      onClick={() => (window.location.href = live)}
      onMouseEnter={() => hanldeSetHover()}
      onMouseLeave={() => hanldeRemoveHover()}
      className={`bg-white flex flex-col justify-center items-center shadow-2xl rounded-lg cursor-pointer gap-1 pb-5 overflow-hidden hover:!-translate-y-[6px] transition-all duration-300`}
    >
      <div className="min-h-[250px]">
        <img src={img} alt={title} className="rounded-t-lg w-full " />
      </div>
      <h3
        className={`${hover ? "text-primary-700" : ""} transition-all duration-300 text-lg font-semibold capitalize mt-2`}
      >
        {title}
      </h3>
      <p className="uppercase text-sm">{category}</p>

      <div className="self-end mx-5 w-16 h-8">
        <ul className="flex justify-between items-center">
          <li>
            <a aria-label={title} href={repo} className="">
              <FaGithub className="text-2xl text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-all duration-300" />
            </a>
          </li>
          <li>
            <a aria-label={title} href={live}>
              <TbWorld className="text-[1.8rem] text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-all duration-300" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Cards;
