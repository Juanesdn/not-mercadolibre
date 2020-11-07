import Lottie from "react-lottie";
import animationData from "../public/lotties/shop-animation.json";

const BannerImage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} isClickToPauseDisabled />;
};

export default BannerImage;
