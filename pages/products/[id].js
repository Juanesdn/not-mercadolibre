import Link from "next/link";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Product = ({ product }) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="fullscreen">
      <div className="product">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="img"
        >
          <motion.img
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src={product.image_url}
          />
        </motion.div>
        <div className="product-details">
          <motion.div variants={stagger} className="inner">
            <Link href="/shop">
              <motion.div variants={fadeInUp}>
                <a className="go-back">Volver a la tienda</a>
              </motion.div>
            </Link>
            <motion.div variants={fadeInUp}>
              <span className="category">{product.category}</span>
            </motion.div>
            <motion.h1 variants={fadeInUp}>{product.name}</motion.h1>
            <motion.p variants={fadeInUp}>{product.description}</motion.p>
            <motion.div variants={fadeInUp} className="qty-price">
              <div className="qty">
                <div className="minus">-</div>
                <div className="amount">1</div>
                <div className="add">+</div>
              </div>
              <span className="price">${product.price}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="btn-row">
              <button className="add-to-cart"> Añadir al carrito</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

Product.getInitialProps = async (context) => {
  const { productId } = context.query;
  const url = `${process.env.API_URL}/product/${productId}`;

  const options = {
    method: "GET",
  };

  const res = await fetch(url, options).then((response) => response.json());
  const product = res.result;

  return { product };
};

export default Product;
