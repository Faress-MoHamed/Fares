import { useContext, useState } from "react";
import { MobileHandlerContext } from "../MobileHandler";

function DescriptionMe({ handleClick }) {
  const [hover, setHover] = useState(false);
  const { isMobile } = useContext(MobileHandlerContext);
  function handleHover() {
    setHover((e) => !e);
  }
  return (
    <div
      onMouseEnter={() => handleHover()}
      onMouseLeave={() => handleHover()}
      className="bg-white flex flex-col gap-4 overflow-hidden rounded-[20px]  px-5 py-10 shadow-2xl backdrop-blur-lg md:px-6 md:py-8 xl:px-8 xl:py-10"
    >
      <h2 className="text-3xl font-bold text-primary-700">About Me</h2>
      <p className="font-bold tracking-widest text-green-500">
        <div className="mr-1 inline-block w-[35px] rounded-[50%] border-2 border-green-700 p-1 text-center ">
          <i className="fa-solid fa-check"></i>
        </div>
        <span className="text-lg tracking-[5px]">Open to work</span>
      </p>
      <p className="text-slate-500">
        Experienced Front-End Developer with a proven track record of 1 year of
        practical expertise in HTML5, CSS3, JavaScript, and React.js.
        Demonstrates a keen ability to adapt to emerging technologies while
        consistently delivering responsive, efficient, and user-friendly
        websites. Committed to enhancing web usability and optimizing user
        interaction to drive customer satisfaction and foster business growth.
      </p>
      <p
        onClick={handleClick}
        className={`${hover & !isMobile ? "bottom-6 md:bottom-5" : "bottom-3 md:bottom-[-125px]"} absolute right-10 cursor-pointer overflow-hidden font-semibold text-primary-600 transition-all duration-200 hover:block`}
      >
        Show more
      </p>
    </div>
  );
}

export default DescriptionMe;
