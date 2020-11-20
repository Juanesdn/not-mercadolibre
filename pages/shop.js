import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import ShoppingCartList from "../components/ShoppingCartList";
import { motion } from "framer-motion";

const Shop = ({ products }) => {
  return (
    <motion.div
      className="shop"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <ProductList products={products} />
      <ShoppingCartList />
    </motion.div>
  );
};

Shop.Layout = Layout;

Shop.getInitialProps = async () => {
  const url = `${process.env.API_URL}/products/`;

  const options = {
    method: "GET",
  };

  const res = await fetch(url, options).then((response) => {
    return response.json();
  });

  const products = res.result;

  return { products };
};

export default Shop;
