import "antd/dist/antd.css";
import "../styles/vars.scss";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
