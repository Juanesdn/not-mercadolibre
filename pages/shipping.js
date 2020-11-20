import { Avatar, Row, Col, Input, Button, Spin, Typography } from "antd";
import { LockOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useUser } from "../contexts/UserContext";
import useAuth from "../hooks/useAuth";
import animationData from "../public/lotties/login-animation.json";
import Layout from "../components/Layout";

const { Title } = Typography;

const Shipping = () => {
  const [{ direccion, telefono, pais, ciudad }, dispatch] = useUser();
  return (
    <Col style={{ margin: "0px 25%" }}>
      <Title level={4}> Shipping</Title>
      <Row>
        <Input
          size="large"
          placeholder="Dirección"
          className="input"
          onChange={(e) =>
            dispatch({
              type: "input_change",
              input: "direccion",
              payload: e.target.value,
            })
          }
          value={direccion}
        />
        <Input
          size="large"
          placeholder="Teléfono"
          className="input"
          onChange={(e) =>
            dispatch({
              type: "input_change",
              input: "telefono",
              payload: e.target.value,
            })
          }
          value={telefono}
        />
        <Input
          size="large"
          placeholder="Pais"
          className="input"
          onChange={(e) =>
            dispatch({
              type: "input_change",
              input: "pais",
              payload: e.target.value,
            })
          }
          value={pais}
        />
        <Input
          size="large"
          placeholder="Ciudad"
          className="input"
          onChange={(e) =>
            dispatch({
              type: "input_change",
              input: "ciudad",
              payload: e.target.value,
            })
          }
          value={ciudad}
        />
      </Row>
    </Col>
  );
};

Shipping.Layout = Layout;

export default Shipping;
