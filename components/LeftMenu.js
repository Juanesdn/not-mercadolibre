import { useState } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { Menu } from "antd";
import {
  HomeTwoTone,
  ShopTwoTone,
  MessageTwoTone,
  IdcardTwoTone,
} from "@ant-design/icons";

const LeftMenu = ({ mode, router }) => {
  const [currItem, setCurrItem] = useState(router.pathname);

  const changeCurrentItem = (e) => {
    setCurrItem(e.key);
  };

  return (
    <Menu onClick={changeCurrentItem} selectedKeys={[currItem]} mode={mode}>
      <Menu.Item
        icon={
          <HomeTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="/"
      >
        <Link href="/">
          <a className="nav-item">Inicio</a>
        </Link>
      </Menu.Item>
      <Menu.Item
        icon={
          <ShopTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="/shop"
      >
        <Link href="/shop">
          <a className="nav-item">Tienda</a>
        </Link>
      </Menu.Item>
      <Menu.Item
        icon={
          <IdcardTwoTone twoToneColor="#ff740e" style={{ fontSize: "18px" }} />
        }
        key="/about"
      >
        <Link href="about">
          <a className="nav-item" href="">
            Sobre Nosotros
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(LeftMenu);
