import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import UseName from "../../component/UseName";

const CaiDatHeThong = () => {
  return (
    <div>
      <UseName />
      <Content>CaiDatHeThong</Content>
      <div>
        <Link to="" />
      </div>
      <Outlet />
    </div>
  );
};

export default CaiDatHeThong;
