import Head from "next/head";
import { Layout, Menu, Breadcrumb } from "antd";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

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
        <Navbar />
        <Content style={{ padding: "0" }}>
          <Banner />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </React.Fragment>
  );
}
