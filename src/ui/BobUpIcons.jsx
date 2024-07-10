import { useContext, useEffect, useState } from "react";
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
import Modal from "../Components/Modal";
import Header from "./Header";
import { MobileHandlerContext } from "../utils/MobileHandlerProvider";

function BobUpIcons({ dispatch }) {
  const { isMobile } = useContext(MobileHandlerContext);
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

  const handleClose = () => {
    dispatch({ type: "close" });
  };

  return (
    <Modal col={true} handleClose={handleClose}>
      <Header className={"w-full"}>My Skills</Header>
      <ul
        className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto
            overflow-x-hidden place-items-center"
      >
        {skills.map((el, i) => {
          const row = Math.floor(i / 4);
          const delay = isMobile ? 0 : row * 0.8; // Adjust the delay multiplier as needed

          return (
            <motion.li
              initial={{ opacity: 0, x: 100 * (i + 10) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay }}
              className="flex flex-col justify-center items-center"
              key={el.name}
            >
              <img className="" src={el.image} alt={el.name} />
              <p className="text-center text-lg font-semibold">{el.name}</p>
            </motion.li>
          );
        })}
      </ul>
    </Modal>
  );
}

export default BobUpIcons;
