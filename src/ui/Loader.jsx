import { Hourglass } from "react-loader-spinner";
import PropTypes from "prop-types";

function Loader({ finishLoading }) {
  setTimeout(() => {
    finishLoading();
  }, 3000);
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
}
Loader.prototype = {
  finishLoading: PropTypes.func,
};
export default Loader;
