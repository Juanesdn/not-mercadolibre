import { Avatar, Row, Col, Input, Button } from "antd";
import { LockOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import animationData from "../public/lotties/login-animation.json";
import { useUser } from "../contexts/UserContext";
import { motion } from "framer-motion";

const Login = () => {
  const [state, dispatch] = useUser();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: "-5vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.4,
      },
    },
  };

  const loginVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <Row className="root">
      <Col xs={0} sm={8} md={14} className="login-image">
        <motion.div
          initial="hidden"
          animate="show"
          variants={animationVariants}
        >
          <Lottie
            className="login-animation"
            options={defaultOptions}
            isClickToPauseDisabled
          />
        </motion.div>
      </Col>
      <Col xs={24} sm={16} md={10} className="paper">
        <motion.div
          className="form-section"
          initial="hidden"
          animate="show"
          variants={loginVariants}
        >
          <Avatar className="icon" size="large" icon={<IdcardOutlined />} />
          <h1 className="h5">Iniciar sesión</h1>
          <Input
            size="large"
            placeholder="Correo Electrónico"
            prefix={<UserOutlined />}
            className="input"
            onChange={(e) =>
              dispatch({
                type: "input_change",
                input: "username",
                payload: e.target.value,
              })
            }
            value={state.username}
          />
          <Input.Password
            className="input"
            size="large"
            placeholder="Contraseña"
            prefix={<LockOutlined />}
            onChange={(e) =>
              dispatch({
                type: "input_change",
                input: "password",
                payload: e.target.value,
              })
            }
            value={state.password}
          />
          <Button className="btn" block>
            INICIAR SESIÓN
          </Button>
          <div className="login-links">
            <a href="#">Olvidaste tu contraseña?</a>
            <a href="#">No tienes una cuenta? Registrate aquí</a>
          </div>
          <div className="copyright">Copyright © Not mercadolibre 2020.</div>
        </motion.div>
      </Col>
    </Row>
  );
};

export default Login;
