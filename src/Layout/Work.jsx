import React, { useState } from "react";
import Header from "../ui/Header";
import Cards from "../Components/Cards";

const data = [
  {
    id: 1,
    category: "HTML/CSS",
    level: "beginner",
    title: "Company website",
    repo: "https://github.com/Faress-MoHamed/company",
    live: "https://faress-mohamed.github.io/company/",
    imgPath: "./Projects/company.png",
  },
  {
    id: 2,
    category: "HTML/CSS",
    level: "beginner",
    title: "Leon website",
    repo: "https://github.com/Faress-MoHamed/leon",
    live: "https://faress-mohamed.github.io/leon/",
    imgPath: "./Projects/leon.png",
  },
  {
    id: 3,
    category: "js",
    level: "intermediate",
    title: "MultiStep Form",
    repo: "https://github.com/Faress-MoHamed/Multi-stepform",
    live: "https://faress-mohamed.github.io/Multi-stepform/",
    imgPath: "./Projects/MultiStep.png",
  },
  {
    id: 4,
    category: "HTML/CSS",
    level: "beginner",
    title: "huddle landing page",
    repo: "https://github.com/Faress-MoHamed/huddle-landing-page",
    live: "https://faress-mohamed.github.io/huddle-landing-page/",
    imgPath: "./Projects/Huddle.png",
  },
  {
    id: 5,
    category: "js",
    level: "beginner",
    title: "newsletter sign up with",
    repo: "https://github.com/Faress-MoHamed/newsletter-sign-up-with-success-message-main",
    live: "https://faress-mohamed.github.io/newsletter-sign-up-with-success-message-main/index.html",
    imgPath: "./Projects/newsletter.png",
  },
  {
    id: 6,
    category: "Reactjs",
    level: "intermediate",
    title: "Far Away",
    repo: "https://github.com/Faress-MoHamed/Far-Away",
    live: "https://faraway-eta.vercel.app/",
    imgPath: "./Projects/farAway.png",
  },
  {
    id: 7,
    category: "Reactjs",
    level: "intermediate",
    title: "React Quiz",
    live: "https://react-quiz-vxdk.vercel.app/",
    repo: "https://github.com/Faress-MoHamed/React-Quiz",
    imgPath: "./Projects/reactQuiz.png",
  },
  {
    id: 8,
    category: "Reactjs",
    level: "hard",
    title: "worldWise",
    repo: "https://github.com/Faress-MoHamed/World-Wise",
    live: "https://world-wise-fares-mohamed.netlify.app/",
    imgPath: "./Projects/worlwise.png",
  },
];
const categories = ["All", "HTML/CSS", "js", "Reactjs"];
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
  const index = filteredData.length > 5;
  return (
    <section
      id="#work"
      className="container mx-auto max-w-7xl py-36 overflow-hidden"
    >
      <Header>Examples of My Work</Header>
      <div className="flex justify-center bg-neutral-300 py-4 rounded-full mb-10">
        <ul
          className=" w-2/4 flex md:gap-0 gap-4 md:justify-between
        justify-center items-center"
        >
          {categories.map((el) => (
            <li>
              <button
                aria-label="select category"
                onClick={() => {
                  handleCategoryChange(el);
                }}
                className={` md:text-xl text-md font-bold hover:bg-slate-200 
              hover:text-cyan-700 md:w-[126px] md:h-12 w-[80px] h-[45px]  rounded-lg transition-colors duration-300 ${selectedCategory === el ? "text-cyan-700 bg-slate-200" : "text-neutral-800"}`}
              >
                {el}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {filteredData.map((el, index) =>
          !seeMore ? (
            index < 5 && (
              <Cards
                category={el.category}
                level={el.level}
                live={el.live}
                repo={el.repo}
                title={el.title}
                key={el.id}
                img={el.imgPath}
              ></Cards>
            )
          ) : (
            <Cards
              category={el.category}
              level={el.level}
              live={el.live}
              repo={el.repo}
              title={el.title}
              key={el.id}
              img={el.imgPath}
            ></Cards>
          ),
        )}
      </div>
      {index && (
        <div className="flex justify-center items-center h-12  my-10">
          <button
            aria-label="show more"
            onClick={() => setSeeMore((e) => !e)}
            className="bg-cyan-900 w-36 h-12 rounded-full text-lg hover:text-white font-bold hover:scale-110 text-neutral-300 transition-all duration-300"
          >
            {seeMore ? "ShowLess" : "ShowMore"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;

export function Rating({ level }) {
  const maxRating =
    level === "beginner"
      ? 2
      : level === "intermediate"
        ? 3
        : level === "hard"
          ? 4
          : 0;
  const bestRating = 5;
  return Array.from({ length: bestRating }, (_, i) => (
    <Star key={i} index={i + 1} maxRating={maxRating} />
  ));
}
function Star({ index, maxRating }) {
  const color = "#fcc419";
  const size = 24;
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: "block",
    cursor: "pointer",
  };

  return (
    <span style={starStyle}>
      {index <= maxRating ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={color}
          stroke={color}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke={color}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="{2}"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
