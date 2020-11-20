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
      <h3 className="team-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sem
        lorem. Vestibulum rhoncus commodo justo. Mauris eget porta orci.
        Phasellus mollis quis tellus at consequat. Proin arcu ex, semper sed
        purus nec, tincidunt ultrices augue. Cras sodales tempus ante, ac
        accumsan mauris iaculis dignissim. Fusce ullamcorper euismod enim et
        aliquam. Nullam et nibh a lectus gravida molestie id vel felis.
        Suspendisse lacinia felis nibh, tristique ornare lorem euismod et.
        Suspendisse sollicitudin enim nec justo egestas pretium. Vivamus in
        sapien at mauris euismod imperdiet sit amet dignissim urna. Proin tortor
        urna, sollicitudin ac ullamcorper eu, vehicula eget lacus. Fusce
        tincidunt.
      </h3>
    </motion.div>
  );
};

About.Layout = Layout;
export default About;
