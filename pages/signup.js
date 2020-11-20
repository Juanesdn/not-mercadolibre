import React, { useEffect } from "react";
import Link from "next/link";
import { Avatar, Row, Col, Input, Button, Spin } from "antd";
import { IdcardOutlined } from "@ant-design/icons";
import { useUser } from "../contexts/UserContext";
import useAuth from "../hooks/useAuth";
import { motion } from "framer-motion";

const registerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const Signup = () => {
  const [{ first_name, last_name, email, password }, dispatch] = useUser();
  const { SignUp, loading, error } = useAuth();

  useEffect(() => {
    dispatch({
      type: "clear_context",
    });
  }, []);

  return (
    <motion.div
      className="register-section"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={registerVariants}
    >
      <div className="register-container">
        <Avatar className="icon" size="large" icon={<IdcardOutlined />} />
        <h1 className="h5">Registrarse</h1>
        <div className="registration-form">
          {error ? (
            <motion.div className="text-error">
              Ocurrió un error por nuestra parte :C intentalo mas tarde
            </motion.div>
          ) : null}
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Input
                size="large"
                placeholder="Nombre"
                className="input"
                value={first_name}
                onChange={(e) =>
                  dispatch({
                    type: "input_change",
                    input: "first_name",
                    payload: e.target.value,
                  })
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <Input
                size="large"
                placeholder="Apellido"
                className="input"
                value={last_name}
                onChange={(e) =>
                  dispatch({
                    type: "input_change",
                    input: "last_name",
                    payload: e.target.value,
                  })
                }
              />
            </Col>
            <Col xs={24}>
              <Input
                size="large"
                placeholder="Correo"
                className="input"
                onChange={(e) =>
                  dispatch({
                    type: "input_change",
                    input: "email",
                    payload: e.target.value,
                  })
                }
                value={email}
              />
            </Col>
            <Col xs={24}>
              <Input.Password
                size="large"
                placeholder="Contraseña"
                className="input"
                onChange={(e) =>
                  dispatch({
                    type: "input_change",
                    input: "password",
                    payload: e.target.value,
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    SignUp(email, password, first_name, last_name);
                  }
                }}
                value={password}
              />
            </Col>
          </Row>
          <Button
            className="btn"
            block
            onClick={() => SignUp(email, password, first_name, last_name)}
          >
            {loading ? <Spin /> : "REGISTRARSE"}
          </Button>
          <Row justify="end">
            <Col>
              <Link href="login">Ya tienes una cuenta? Inicia sesión</Link>
            </Col>
          </Row>
          <div className="copyright">Copyright © Buyfy 2020.</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
