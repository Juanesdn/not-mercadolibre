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
    nombre: "test1",
    precio: "999",
  },
  {
    id: 1,
    nombre: "test2",
    precio: "999",
  },
  {
    id: 2,
    nombre: "test3",
    precio: "999",
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
          <img src={"/product-placeholder.svg"} />
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
