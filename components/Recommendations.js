import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col, Button, Tooltip } from "antd";
import { ExpandAltOutlined, ShoppingOutlined } from "@ant-design/icons";

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
  const children = data.map((item) => (
    <Col span={8} className="col" key={item.id}>
      <QueueAnim
        type="bottom"
        className="content-wrapper home-hover"
        onClick={() => {
          window.location.href = "/intro/price ";
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
        <div key="image" className="image">
          <img src="/product-placeholder.svg" />
        </div>
        <h3 key="h3">{item.nombre}</h3>
        <span key="span">${item.precio}</span>
      </QueueAnim>
    </Col>
  ));

  return (
    <div className="recommendations-layout-wrapper home-serve-wrapper">
      <OverPack className="home-layout" playScale={0.4}>
        <QueueAnim
          type="bottom"
          key="home-func"
          ease="easeOutQuart"
          leaveReverse
        >
          <h2 key="h2">Productos Recomendados</h2>
          <i key="i" className="line" />
          <QueueAnim
            key="content"
            component={Row}
            type="bottom"
            componentProps={{ gutter: 96 }}
          >
            {children}
          </QueueAnim>
        </QueueAnim>
      </OverPack>
    </div>
  );
};

export default Recommendations;
