import { Menu, Button, Tooltip, Typography } from "antd";
import Link from "next/link";
import { useUserState } from "../contexts/UserContext";
import {
  UserOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const RightMenu = ({ mode }) => {
  const { token, cart } = useUserState();

  return (
    <>
      {token ? (
        <>
          <Title style={{ display: "inline-block", marginRight: 10 }} level={4}>
            {cart.length}
          </Title>
          <Tooltip title="Shopping Cart">
            <Button
              type="primary"
              style={{ background: "#ff740e" }}
              shape="circle"
              size="large"
              icon={
                <ShoppingCartOutlined
                  style={{ fontSize: "20px", color: "#FFFFFF" }}
                />
              }
            />
          </Tooltip>
        </>
      ) : (
        <Menu mode={mode}>
          <Menu.Item
            icon={
              <UserOutlined style={{ fontSize: "18px", color: "#ff740e" }} />
            }
            key="signin"
          >
            <Link href="/login">
              <a className="nav-item" href="">
                Iniciar Sesión
              </a>
            </Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link href="/signup">
              <div className="btn__primary">
                <UserAddOutlined
                  style={{ fontSize: "18px", color: "#ffffff" }}
                />
                Registrarse
              </div>
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </>
  );
};

export default RightMenu;
