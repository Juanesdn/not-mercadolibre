import QueueAnim from "rc-queue-anim";
import { Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import BannerImage from "./BannerImage";

const { Title } = Typography;

const Banner = () => {
  return (
    <div className="banner-layour-wrapper">
      <div className="banner-layout">
        <QueueAnim
          className="home-banner-content-wrapper"
          delay={300}
          ease="easeOutQuart"
        >
          <Title key="h1">
            Compra desde la comodidad de tu casa de la manera más confiable y
            segura.
          </Title>
          <div className="btn__primary">
            <ShoppingOutlined
              style={{
                fontSize: "18px",
                color: "#ffffff",
                marginRight: "10px",
              }}
            />
            Comprar
          </div>
        </QueueAnim>
        <div className="home-banner-image-wrapper">
          <BannerImage />
        </div>
      </div>
    </div>
  );
};

export default Banner;
