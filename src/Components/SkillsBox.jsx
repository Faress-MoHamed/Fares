import { motion } from "framer-motion";
import Icons from "../ui/Icons";

function SkillsBox({dispatch}) {
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
      <h2 className="text-cyan-700 text-3xl font-bold">Skills I Work With</h2>
      <div>
        <Icons dispatch={dispatch}></Icons>
      </div>
    </motion.div>
  );
}

export default SkillsBox;
