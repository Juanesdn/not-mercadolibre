import { useState } from "react";
import { Drawer, Button } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

const centerStyleNavbar = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <nav className="menuBar">
      <div className="menuCon">
        <div className="logo">
          <img src="/Logo.svg" />
        </div>
        <div className="leftMenu">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="rightMenu">
          <RightMenu mode="horizontal" />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Not Mercadolibre"
          placement="right"
          closable={false}
          onClose={closeDrawer}
          visible={visible}
        >
          <LeftMenu mode="vertical" />
          <RightMenu mode="vertical" />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
