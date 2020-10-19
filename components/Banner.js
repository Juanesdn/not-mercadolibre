import QueueAnim from "rc-queue-anim";
import { ShoppingOutlined } from "@ant-design/icons";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <div className="banner-layout-wrapper">
      <div className="banner-layout">
        <QueueAnim
          className="home-banner-content-wrapper"
          delay={300}
          ease="easeOutQuart"
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
        </QueueAnim>
        <div className="home-banner-image-wrapper">
          <BannerImage />
        </div>
      </div>
    </div>
  );
};

export default Banner;
