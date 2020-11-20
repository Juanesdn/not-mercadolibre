import { UserProvider } from "../contexts/UserContext";
import { AnimatePresence } from "framer-motion";
import "antd/dist/antd.css";
import "../styles/vars.scss";
import "../styles/global.scss";

export default function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <UserProvider>
      <AnimatePresence exitBeforeEnter>
        <Layout key={router.route}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </UserProvider>
  );
}
