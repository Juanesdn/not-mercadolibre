import Head from "next/head";
import { Layout } from "antd";
import Navbar from "./Navbar";

const { Content, Footer } = Layout;

const MyLayout = ({ children }) => {
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
        <Content style={{ padding: "0" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Not Mercadolibre ©2020 Created by Juan De La Cruz & Luis Orozco
        </Footer>
      </Layout>
    </React.Fragment>
  );
};

export default MyLayout;
