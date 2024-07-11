import NavBar from "../ui/NavBar";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Data = {
  name: "Fares MoHamed",
  title: "Software engineering",
  discreption:
    "I am a software engineer with a specialization in crafting exceptional digital experiences, with occasional forays into design. Presently, I am dedicated to the development of accessible and user-centered products as a Freelancer. My focus lies in leveraging technology to create intuitive and inclusive solutions that resonate with users and drive meaningful engagement.",
};
function Home() {
  return (
    <>
      <NavBar />
      <section
        id="#home"
        className=" bg-no-repeat bg-cover bg-[url('/wave/blob-scene-haikei.svg')] h-screen flex items-center justify-center space-y-12"
      >
        <div className="mt-20">
          <div className="max-h-fit xl:px-[30px] px-5 xl:pr-[121px] my-12 xl:py-[50px] py-8 xl:rounded-2xl bg-white/50  backdrop-blur-[12px] ">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 1,
                delay: 1,
                type: "Tween",

                ease: [0.17, 0.55, 0.55, 1],
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-200 text-lg font-bold font-azeretMono pl-1 sm:tracking-[2px]"
            >
              Hi, My Name is
            </motion.h1>
            <motion.h5
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 1,
                delay: 1.3,
                type: "Tween",

                ease: [0.17, 0.55, 0.55, 1],
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="2xl:text-7xl md:text-6xl min-[400px]:text-4xl text-3xl my-2 font-bold"
            >
              {Data.name}
              <br />
              <span className="text-primary-200 ">
                {Data.title}
              </span>
            </motion.h5>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 1,
                delay: 1.6,
                type: "Tween",
                bounce: 0.3,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-4 md:max-w-[600px] mb-8 text-slate-600 min-[400px]:text-lg text-sm"
            >
              {Data.discreption}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{
                duration: 1,
                delay: 1.9,
                type: "Tween",
                bounce: 0.3,
                ease: [0.17, 0.55, 0.55, 1],
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-[30px] rounded-xl items-center"
            >
              <Link
                className={`font-Josefin-Sans w-full sm:w-auto main-button !px-4 !py-2 text-center  !border-4  border-primary-600 text-primary-600 !rounded-lg font-medium xl:text-xl text-lg cursor-pointer hover:bg-primary-600 hover:border-transparent hover:text-sky-50 transition-all duration-300`}
                to={"#work"}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={500}
                isDynamic={true}
              >
                My Work
              </Link>

              <Link
                className="cursor-pointer button font-semibold hidden sm:block"
                to={"#aboutme"}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={500}
                isDynamic={true}
              >
                <span className="actual-text relative before:bg-slate-950 before:absolute before:left-0 before:bottom-[-5px] before:w-0 before:h-[2px] hover:before:w-full before:transition-all before:duration-300">
                  About Me
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
