import { Col, Typography, Button } from "antd";
import { useUserState } from "../contexts/UserContext";
import { motion } from "framer-motion";

const { Title } = Typography;

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

const ShoppingCartList = () => {
  const { cart, cartPrice } = useUserState();
  return (
    <Col className="carrito" xs={0} lg={4}>
      <Title level={4}> Carrito </Title>
      {cart.length > 0 ? (
        <>
          {cart.map((product) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              className="card"
              onClick={() =>
                router.push({
                  pathname: `/products/${product.name}`,
                  query: { productId: product.product._id.$oid },
                })
              }
              key={product.product._id.$oid}
            >
              <span className="category">{product.product.category}</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={product.product.image_url}
                width={100}
                height={100}
              />
              <div className="product-info">
                <h4>{product.product.name}</h4>
                <span>${product.product.price}</span>
              </div>
              <div className="quantity">
                <h4>Cantidad: </h4>
                {product.qty}
              </div>
            </motion.div>
          ))}
          <Button className="btn" block>
            Pagar: ${cartPrice}
          </Button>
        </>
      ) : (
        <p>No has agregado nada a tu carrito</p>
      )}
    </Col>
  );
};

export default ShoppingCartList;
