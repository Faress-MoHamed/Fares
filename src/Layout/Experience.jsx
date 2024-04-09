import { motion } from "framer-motion";
import Header from "../ui/Header";

function Experience() {
  return (
    <section
      id="#experience"
      className="container mx-auto max-w-4xl py-36 overflow-hidden"
    >
      <Header>{"Where I`ve Worked"}</Header>
      <motion.article
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.7,
          type: "spring",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="lg:mx-0 mx-5"
      >
        <h3 className={`text-3xl font-bold font-Josefin-Sans`}>Freelancer</h3>
        <div className="mx-9 my-5">
          <h4 className="text-lg">
            Fullstack developer{" "}
            <a
              href="https://www.upwork.com/freelancers/~012d0d83636f48808e"
              target="_blank"
              className="text-cyan-600"
              rel="noreferrer"
            >
              @Freelancer
            </a>
          </h4>
          <p className="text-gray-400">sep 2023 to present</p>
          <div>
            <div className="flex justify-center">
              <p className="text-sm w-[80%] my-5">
                <p>
                  My journey as a front-end developer on Upwork has been an
                  exciting and enriching experience, marked by continuous
                  learning, collaboration, and the pursuit of excellence.
                  Joining the Upwork platform opened doors to a world of
                  opportunities, allowing me to showcase my skills, connect with
                  clients from around the globe, and contribute to diverse
                  projects.
                </p>
                <p>
                  Throughout my journey on Upwork, I had the opportunity to
                  collaborate with clients from diverse industries and
                  backgrounds. I worked closely with them to understand their
                  requirements, translate their vision into reality, and deliver
                  solutions that exceeded their expectations. These
                  collaborations not only honed my technical skills but also
                  strengthened my communication, problem-solving, and project
                  management abilities.
                </p>
              </p>
            </div>
          </div>
        </div>
      </motion.article>
      <motion.article
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.7,
          type: "spring",
        }}
        whileInView={{ opacity: 1, y: 0 }}
        className="lg:mx-0 mx-5"
      >
        <h3 className={`text-3xl font-bold font-Josefin-Sans`}>
          GDSC coreTeam
        </h3>
        <div className="mx-9 my-5">
          <h4 className="text-lg">
            Front-End developer{" "}
            <a
              href="https://developers.google.com/community/gdsc"
              target="_blank"
              className="text-cyan-600"
              rel="noreferrer"
            >
              @GDSC
            </a>
          </h4>
          <p className="text-gray-400">sep 2023 to mar 2024</p>
          <div>
            <div className="flex justify-center">
              <p className="text-md w-[80%] my-5">
                <p>
                  My journey with GDSC (Google Developer Student Clubs) as a
                  front-end developer began with enthusiasm and curiosity.
                  Joining the club opened doors to a community of like-minded
                  individuals passionate about technology and innovation.
                  Through workshops, meetups, and networking events, I was
                  introduced to various aspects of front-end development and the
                  opportunities it offers.
                </p>
                <div className="hidden md:block my-5 p-3 shadow-2xl md:w-[725px] w-full">
                  <img src="./Me/family.jpg" alt="" />
                </div>
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

export default Experience;
