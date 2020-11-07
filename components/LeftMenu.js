import { useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import {
  HomeTwoTone,
  ShopTwoTone,
  MessageTwoTone,
  IdcardTwoTone,
} from "@ant-design/icons";

const LeftMenu = ({ mode }) => {
  const [currItem, setCurrItem] = useState("home");

  const changeCurrentItem = (e) => {
    console.log("click ", e);
    setCurrItem(e.key);
  };

  return (
    <Menu onClick={changeCurrentItem} selectedKeys={[currItem]} mode={mode}>
      <Menu.Item
        icon={
          <HomeTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="home"
      >
        <a className="nav-item" href="">
          Home
        </a>
      </Menu.Item>
      <Menu.Item
        icon={
          <ShopTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="shop"
      >
        <a className="nav-item" href="">
          Shop
        </a>
      </Menu.Item>
      <Menu.Item
        icon={
          <MessageTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="contact"
      >
        <a className="nav-item" href="">
          Contact us
        </a>
      </Menu.Item>
      <Menu.Item
        icon={
          <IdcardTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="about"
      >
        <a className="nav-item" href="">
          About Us
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
