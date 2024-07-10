import { motion, AnimatePresence } from "framer-motion";
import { useReducer, useState } from "react";
import BoxPobUp from "../ui/BoxPobUp";
import Image from "../ui/Image";
import BobUpIcons from "../ui/BobUpIcons";
import Track from "../Components/Track";
import SkillsBox from "../Components/SkillsBox";
import DescriptionMe from "../Components/DescriptionMe";

function AboutMe() {
  const [click, setClick] = useState(false);

  function reducer(prevState, action) {
    switch (action.type) {
      case "click":
        return { ...prevState, clicked: true };
      case "close":
        return { ...prevState, clicked: false };
      default:
        throw new Error("sorry");
    }
  }

  const initialState = { clicked: false };
  const [clicked, dispatch] = useReducer(reducer, initialState);
  const { clicked: isClicked } = clicked;

  function handleClick() {
    setClick(true);
  }
  function handleClose() {
    console.log(clicked);
    setClick(false);
  }

  return (
    <section
      id="#aboutme"
      className="container max-w-[1440px]  mx-auto flex md:flex-row flex-col justify-center items-center gap-12 xl:flex-nowrap flex-wrap py-36"
    >
      <div className="flex justify-center md:shadow-xl overflow-hidden shadow-sm bg-white/50 backdrop-blur-[12px] rounded-[20px] md:mx-0 my-4 self-stretch lg:w-2/5 w-full">
        <Image src={"./Me/me3.jpg"} alt={"fares mohamed image"} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.3,
          type: "spring",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="lg:w-2/4 w-full flex flex-col gap-5 p-4"
      >
        <DescriptionMe handleClick={handleClick} />
        <SkillsBox dispatch={dispatch} />
        <Track />
      </motion.div>

      <AnimatePresence>
        {click && <BoxPobUp handleClose={handleClose} click={click} />};
      </AnimatePresence>
      <AnimatePresence>
        {isClicked && (
          <BobUpIcons dispatch={dispatch} clicked={isClicked} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutMe;
