import Head from "next/head";
import { Layout, Menu, Breadcrumb } from "antd";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Recommendations from "../components/Recommendations";
import InitialTransition from "../components/InitialTransition";

import Link from "next/link";

const { Content, Footer } = Layout;

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Layout className="layout">
        {/* <InitialTransition /> */}
        <Navbar />
        <Content style={{ padding: "0" }}>
          <Banner />
          <Recommendations />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Not Mercadolibre ©2020 Created by Juan De La Cruz & Luis Orozco
        </Footer>
      </Layout>
    </React.Fragment>
  );
}
