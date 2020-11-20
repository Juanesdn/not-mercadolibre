import { useRouter } from "next/router";
import { Row, Col } from "antd";
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
      staggerChildren: 0.1,
    },
  },
};

const ProductList = ({ products }) => {
  const router = useRouter();

  return (
    <motion.div variants={stagger}>
      <Row justify="center" className="product-row">
        {products.map((product, index) => (
          <Col className="card-container" key={index} xs={24} lg={12}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              className="card"
              onClick={() =>
                router.push({
                  pathname: `/products/${product.name}`,
                  query: { productId: product._id.$oid },
                })
              }
            >
              <span className="category">{product.category}</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={product.image_url}
                width={250}
                height={250}
              />
              <div className="product-info">
                <h4>{product.name}</h4>
                <span>${product.price}</span>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default ProductList;
