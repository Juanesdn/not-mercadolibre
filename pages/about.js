import { Typography } from "antd";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import animationData from "../public/lotties/team-animation.json";
import Layout from "../components/Layout";

const { Title } = Typography;

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div exit={{ opacity: 0 }} className="about-us">
      <Title className="title">Conoce a nuestro equipo</Title>
      <div className="team-animation">
        <Lottie options={defaultOptions} isClickToPauseDisabled />
      </div>
    </motion.div>
  );
};

About.Layout = Layout;
export default About;
