import { Avatar, Row, Col, Input, Button } from "antd";
import { LockOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import animationData from "../public/lotties/login-animation.json";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Row className="root">
      <Col xs={0} sm={8} md={14} className="login-image">
        <Lottie
          className="login-animation"
          options={defaultOptions}
          isClickToPauseDisabled
        />
      </Col>
      <Col xs={24} sm={16} md={10} className="paper">
        <div className="form-section ">
          <Avatar className="icon" size="large" icon={<IdcardOutlined />} />
          <h1 className="h5">Iniciar sesión</h1>
          <Input
            size="large"
            placeholder="Correo Electrónico"
            prefix={<UserOutlined />}
            className="input"
          />
          <Input.Password
            className="input"
            size="large"
            placeholder="Contraseña"
            prefix={<LockOutlined />}
          />
          <Button className="btn" block>
            INICIAR SESIÓN
          </Button>
          <div className="login-links">
            <a href="#">Olvidaste tu contraseña?</a>
            <a href="#">No tienes una cuenta? Registrate aquí</a>
          </div>
          <div className="copyright">Copyright © Not mercadolibre 2020.</div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
