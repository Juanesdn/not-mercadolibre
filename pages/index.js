import Banner from "../components/Banner";
import Recommendations from "../components/Recommendations";
import InitialTransition from "../components/InitialTransition";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <InitialTransition />
      <Banner />
      <Recommendations />
    </motion.div>
  );
}

Home.Layout = Layout;
