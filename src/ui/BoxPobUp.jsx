
import ImageLoading from "../Components/ImageLoading";
import Modal from "../Components/Modal";

function BoxPobUp({ handleClose, click }) {
  //another Solution
  // const [animationCompleted, setAnimationCompleted] = useState(false);

  // useEffect(() => {
  //   if (click && !animationCompleted) {
  //     // You can set a timeout to delay the animation if needed
  //     setTimeout(() => {
  //       setAnimationCompleted(true);
  //     }, 100);
  //   }
  // }, [click, animationCompleted]);
  // const controls = useAnimation();

  // useEffect(() => {
  //   if (click) {
  //     controls.start({ opacity: 1, y: 0 });
  //   } else {
  //     controls.start({ opacity: 0, y: -100 });
  //   }
  // }, [click, controls]);
  return (
    <Modal handleClose={handleClose}>
      <div className="w-2/4 hidden h-full lg:block p-2">
        <ImageLoading
          className={"h-full lg:w-full xl:block lg:hidden w-4/5 rounded-md"}
          path={"./Me/me4.jpg"}
          alt={"fares mohamed portfolio "}
        />
      </div>
      <div className="lg:w-2/4 w-full backdrop-blur-md backdrop-saturate-150 pt-[1rem] py-10 p-8">
        <div className="drop-shadow-sm bg-transparent">
          <h2 className="text-4xl font-bold text-primary-700 py-4 ">
            My Story
          </h2>
        </div>
        <div className="overflow-y-auto md:h-[500px]">
          <div className="pr-2">
            <p className="md:text-lg text-sm">
              Ever since I stumbled upon my first website as a child, I was
              fascinated by the magic of how beautiful designs and interactive
              elements came to life on screen. It wasn't just about how things
              looked; it was how they felt and functioned that captivated me.
              <br />
              My journey started with a simple HTML page I built in high school.
              As I delved deeper, I devoured everything from CSS to JavaScript,
              joining online communities and contributing to open-source
              projects. Each line of code wasn't just learning; it was a step
              towards mastering the art of front-end development.
              <br />
              Over the years, my toolkit has expanded from basic HTML and CSS to
              sophisticated frameworks like React and Next.js. I specialize in
              translating high-fidelity designs into pixel-perfect, responsive,
              and accessible web interfaces.
              <br />
              My philosophy as a front-end developer centers around the user. I
              believe every line of code should contribute to a seamless,
              engaging user experience, whether it's through optimized
              performance or intuitive navigation.
              <br />
              As technology evolves, so does my journey. I`m currently exploring
              the realms of progressive web apps and looking forward to bringing
              more immersive and dynamic experiences to users worldwide.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default BoxPobUp;
