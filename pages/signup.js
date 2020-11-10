import { Avatar, Row, Col, Input, Button } from "antd";
import { IdcardOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <div className="register-section">
      <div className="register-container">
        <Avatar className="icon" size="large" icon={<IdcardOutlined />} />
        <h1 className="h5">Registrarse</h1>
        <div className="registration-form">
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Input size="large" placeholder="Nombre" className="input" />
            </Col>
            <Col xs={24} sm={12}>
              <Input size="large" placeholder="Apellido" className="input" />
            </Col>
            <Col xs={24}>
              <Input size="large" placeholder="Correo" className="input" />
            </Col>
            <Col xs={24}>
              <Input.Password
                size="large"
                placeholder="Contraseña"
                className="input"
              />
            </Col>
          </Row>
          <Button className="btn" block>
            INICIAR SESIÓN
          </Button>
          <Row justify="end">
            <Col>
              <a href="#">Ya tienes una cuenta? Inicia sesión</a>
            </Col>
          </Row>
          <div className="copyright">Copyright © Not mercadolibre 2020.</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
