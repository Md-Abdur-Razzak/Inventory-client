import { ThreeCircles } from "react-loader-spinner";

const Loding = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <ThreeCircles
        height="100"
        width="100"
        color="red"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loding;
