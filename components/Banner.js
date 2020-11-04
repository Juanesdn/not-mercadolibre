import QueueAnim from "rc-queue-anim";
import { Row, Col } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <Row className="banner-layout-wrapper">
      <Col xs={24} lg={12} xl={12}>
        <motion.div
          className="home-banner-content-wrapper"
          initial="hidden"
          animate="visible"
          transition={{ ease: "easeOut" }}
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <h1 key="title">
            Compra desde la comodidad de tu casa de la manera más confiable y
            segura.
          </h1>
          <div key="buy-button" className="btn__primary">
            <ShoppingOutlined
              style={{
                fontSize: "18px",
                color: "#ffffff",
                marginRight: "10px",
              }}
            />
            Comprar
          </div>
        </motion.div>
      </Col>
      <Col xs={24} lg={12} xl={12}>
        <div className="home-banner-image-wrapper">
          <BannerImage />
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
