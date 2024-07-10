import { useQuery } from "@tanstack/react-query";
import { Circles } from "react-loader-spinner";
import fetchImage from "../utils/fetchImage";

const ImageLoading = ({ path, alt, className }) => {
  console.log( path, alt, className );
  const { data, isLoading, isError } = useQuery({
    queryKey: ["image"],
    queryFn: () => fetchImage(path),
  });
  if (isLoading)
    return (
      <Circles
        height="80"
        width="80"
        color="#57534e"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    );
  if (isError) return <div>Error fetching image</div>;

  return <img className={className} src={data} alt={alt} />;
};
export default ImageLoading;
