import { Menu } from "antd";

import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item
        icon={<UserOutlined style={{ fontSize: "18px", color: "#ff740e" }} />}
        key="signin"
      >
        <a className="nav-item" href="">
          Sign in
        </a>
      </Menu.Item>
      <Menu.Item key="signup">
        <div className="btn__primary">
          <UserAddOutlined style={{ fontSize: "18px", color: "#ffffff" }} />
          Sign up
        </div>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
