import React, { useState } from "react";
import Header from "../ui/Header";
import Cards from "../Components/Cards";

const data = [
  {
    id: 8,
    category: "Reactjs",
    title: "Blood Sample",
    repo: "https://github.com/Faress-MoHamed/Blood",
    live: "https://blood-flame.vercel.app/",
    imgPath: "./Projects/blood-sample.png",
  },
  {
    id: 9,
    category: "Reactjs",
    title: "Pl girls",
    repo: "https://github.com/Faress-MoHamed/PL.Girles",
    live: "https://pl-girles.vercel.app/",
    imgPath: "./Projects/plgirls.png",
  },
  {
    id: 1,
    category: "Reactjs",
    title: "React Quiz",
    live: "https://react-quiz-vxdk.vercel.app/",
    repo: "https://github.com/Faress-MoHamed/React-Quiz",
    imgPath: "./Projects/reactQuiz.png",
  },
  {
    id: 2,
    category: "Reactjs",
    title: "worldWise",
    repo: "https://github.com/Faress-MoHamed/World-Wise",
    live: "https://world-wise-fares-mohamed.netlify.app/",
    imgPath: "./Projects/worlwise.png",
  },
  {
    id: 3,
    category: "responsive",
    title: "Company website",
    repo: "https://github.com/Faress-MoHamed/company",
    live: "https://faress-mohamed.github.io/company/",
    imgPath: "./Projects/company.png",
  },
  {
    id: 4,
    category: "responsive",
    title: "Leon website",
    repo: "https://github.com/Faress-MoHamed/leon",
    live: "https://faress-mohamed.github.io/leon/",
    imgPath: "./Projects/leon.png",
  },
  {
    id: 5,
    category: "JavaScript",
    title: "MultiStep Form",
    repo: "https://github.com/Faress-MoHamed/Multi-stepform",
    live: "https://faress-mohamed.github.io/Multi-stepform/",
    imgPath: "./Projects/MultiStep.png",
  },
  {
    id: 6,
    category: "Reactjs",
    title: "Far Away",
    repo: "https://github.com/Faress-MoHamed/Far-Away",
    live: "https://faraway-eta.vercel.app/",
    imgPath: "./Projects/farAway.png",
  },
  {
    id: 7,
    category: "responsive",
    title: "huddle landing page",
    repo: "https://github.com/Faress-MoHamed/huddle-landing-page",
    live: "https://faress-mohamed.github.io/huddle-landing-page/",
    imgPath: "./Projects/Huddle.png",
  },
  {
    id: 8,
    category: "JavaScript",
    title: "newsletter sign up with",
    repo: "https://github.com/Faress-MoHamed/newsletter-sign-up-with-success-message-main",
    live: "https://faress-mohamed.github.io/newsletter-sign-up-with-success-message-main/index.html",
    imgPath: "./Projects/newsletter.png",
  },
];
const categories = ["All", "responsive", "JavaScript", "Reactjs"];
const Work = () => {
  // const [Active, SetActive] = useState("All");
  const [seeMore, setSeeMore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  // const handleActive = (category) => {
  //   SetActive((e) => (e = category));
  // };
  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);
  return (
    <section
      id="#work"
      className="container mx-auto px-3 max-w-7xl md:py-36 py-4 overflow-hidden"
    >
      <Header>Examples of My Work</Header>
      <div className="flex justify-center w-full items-center">
        <div
          className={`h-12 flex md:w-2/4 w-full justify-center pl-2 md:rounded-full rounded-[5px] mb-10`}
        >
          <ul className="bg-white md:py-7 py-1 px-4 w-full flex md:gap-0 gap-4 md:rounded-full rounded-[5px] justify-between items-center overflow-x-scroll">
            {categories.map((el, index) => (
              <li
                aria-label="select category"
                role="button"
                onClick={() => {
                  handleCategoryChange(el);
                }}
                className={`min-w-[100px] text-center capitalize font-semibold hover:bg-slate-200 
              hover:text-primary-700 p-2 w-[${100 / categories.length}%] text-sm md:rounded-full rounded-[5px] transition-colors duration-300 ${selectedCategory === el ? "text-primary-700 bg-slate-200" : "text-neutral-800"}`}
                key={index}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        {!seeMore
          ? filteredData
              .slice(0, 6)
              .map((el) => (
                <Cards
                  category={el.category}
                  level={el.level}
                  live={el.live}
                  repo={el.repo}
                  title={el.title}
                  key={el.id}
                  img={el.imgPath}
                />
              ))
          : filteredData.map((el) => (
              <Cards
                category={el.category}
                level={el.level}
                live={el.live}
                repo={el.repo}
                title={el.title}
                key={el.id}
                img={el.imgPath}
              />
            ))}
      </div>

      <div className="flex justify-center items-center h-12  my-10">
        <button
          aria-label="show more"
          onClick={() => setSeeMore((e) => !e)}
          className={`bg-primary-900 w-36 h-12 rounded-full text-lg hover:text-white font-bold hover:scale-110 text-neutral-300 transition-all duration-300 ${filteredData.length - 6 <= 0 ? "hidden" : ""}`}
        >
          {seeMore ? `ShowLess ` : `ShowMore ${filteredData.length - 6}`}
        </button>
      </div>
    </section>
  );
};

export default Work;
