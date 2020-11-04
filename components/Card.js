import { Button, Tooltip } from "antd";
import { ExpandAltOutlined, ShoppingOutlined } from "@ant-design/icons";

const Card = ({ titulo, precio, imagen }) => {
  return (
    <div className="content-wrapper home-hover">
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
            <Button type="primary" shape="circle" icon={<ShoppingOutlined />} />
          </Tooltip>
        </div>
      </div>
      <div className="image">
        <img src={imagen} />
      </div>
      <h3 key="h3">{titulo}</h3>
      <span key="span">${precio}</span>
    </div>
  );
};

export default Card;
