import "antd/dist/antd.css";
import "../styles/vars.scss";
import "../styles/global.scss";

import { UserProvider } from "../contexts/UserContext";

export default function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
