import { Menu } from "antd";
import Link from "next/link";

import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item
        icon={<UserOutlined style={{ fontSize: "18px", color: "#ff740e" }} />}
        key="signin"
      >
        <Link href="/login">
          <a className="nav-item" href="">
            Sign in
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signup">
        <Link href="/signup">
          <div className="btn__primary">
            <UserAddOutlined style={{ fontSize: "18px", color: "#ffffff" }} />
            Sign up
          </div>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
