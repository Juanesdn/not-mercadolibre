import Banner from "../components/Banner";
import Recommendations from "../components/Recommendations";
import InitialTransition from "../components/InitialTransition";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <React.Fragment>
      <InitialTransition />
      <Banner />
      <Recommendations />
    </React.Fragment>
  );
}

Home.Layout = Layout;
