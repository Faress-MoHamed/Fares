import { useState } from "react";
import { motion } from "framer-motion";
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
      <div className="">
        <img src={img} alt={title} className="rounded-t-lg w-full " />
      </div>
      <h3
        className={`${hover ? "text-primary-700" : ""} transition-all duration-300 text-lg font-semibold capitalize mt-2`}
      >
        {title}
      </h3>
      <p className="uppercase text-sm">{category}</p>

      <div className="self-end mx-5 w-16 h-8">
        <ul className="flex justify-between">
          <li>
            <a aria-label={title} href={repo} className="">
              <i class="fa-brands fa-github text-2xl text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-all duration-300"></i>
            </a>
          </li>
          <li>
            <a aria-label={title} href={live}>
              <i class="fa-solid fa-globe text-2xl text-neutral-700 hover:text-neutral-900 hover:scale-110 transition-all duration-300"></i>
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Cards;
