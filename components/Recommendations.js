import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Grid, Row, Col, Button, Tooltip } from "antd";
import { ExpandAltOutlined, ShoppingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import Slider from "./Slider";

const { useBreakpoint } = Grid;

const data = [
  {
    id: 0,
    nombre: "Camisa",
    precio: "36000",
    image_url:
      "https://ae01.alicdn.com/kf/H55a330a1ef76441192aef1eb1aea559eK/Camisa-vaquera-ajustada-para-hombre-Rebeca-de-manga-larga-informal-para-primavera-y-oto-o-2020.jpg_q50.jpg",
  },
  {
    id: 1,
    nombre: "Set de vasos",
    precio: "80000",
    image_url:
      "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/7/7/7702147244578-1.jpg",
  },
  {
    id: 2,
    nombre: "Alexa echo dot",
    precio: "120000",
    image_url:
      "https://cdn.shopify.com/s/files/1/0071/8087/7909/products/amazon_echo_dot_3_gen_gris_oscuro_altavoz_inteligente_alexa_01_l-2_1200x1200.jpg?v=1601314022",
  },
];

const Recommendations = () => {
  const screen = useBreakpoint();

  const children = data.map((item) => (
    <Col xs={24} xl={8} key={item.id}>
      <motion.div
        className="content-wrapper home-hover"
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeOut" }}
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
      >
        <div className="button-group">
          <div className="left-button">
            <Tooltip title="expand">
              <Button
                type="primary"
                shape="circle"
                icon={<ExpandAltOutlined />}
              />
            </Tooltip>
          </div>
          <div className="right-button">
            <Tooltip title="add to car">
              <Button
                type="primary"
                shape="circle"
                icon={<ShoppingOutlined />}
              />
            </Tooltip>
          </div>
        </div>
        <div className="image">
          <img width={200} height={200} src={item.image_url} />
        </div>
        <h3 key="h3">{item.nombre}</h3>
        <span key="span">${item.precio}</span>
      </motion.div>
    </Col>
  ));

  return (
    <div className="recommendations-layout-wrapper">
      <OverPack className="home-layout container" playScale={0.4}>
        <QueueAnim
          type="bottom"
          key="home-func"
          ease="easeOutQuart"
          leaveReverse
        >
          <h2 key="h2">Productos Recomendados</h2>
          <i key="i" className="line" />
          {screen.xl ? (
            <QueueAnim
              key="content"
              component={Row}
              type="bottom"
              componentProps={{ gutter: 96 }}
            >
              {children}
            </QueueAnim>
          ) : (
            <Slider />
          )}
        </QueueAnim>
      </OverPack>
    </div>
  );
};

export default Recommendations;
