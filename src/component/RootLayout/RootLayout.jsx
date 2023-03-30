import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { RiFileChartLine, RiSettingsLine } from "react-icons/ri";
import { FiLogOut, FiLayers } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
import { TbBrandWechat } from "react-icons/tb";

import AppRouter from "../AppRouter";
import "./style.scss";
const { Sider } = Layout;

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((item) => item);
  const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return (
    <Layout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img
            src="https://altamedia.vn/wp-content/uploads/sites/11/2020/11/Media-logo.png"
            alt=""
          />
        </div>
        <Menu
          onClick={(item) => {
            navigate(item.key);
          }}
          items={[
            {
              key: "/",
              icon: <MdOutlineDashboard className="icon" />,
              label: "Dashboard",
            },
            {
              key: "/ThietBi",
              icon: <CiDesktop />,
              label: "Thiết Bị",
            },
            {
              key: "/DichVu",
              icon: <TbBrandWechat />,
              label: "Dịch vụ",
            },
            {
              key: "/CapSo",
              icon: <FiLayers />,
              label: "Cấp số",
            },
            {
              key: "/BaoCao",
              icon: <RiFileChartLine />,
              label: "Báo cáo",
            },
            {
              key: "/CaiDatHeThong",
              icon: <RiSettingsLine />,
              label: "Cài đặt hệ thống :",
            },
            {
              key: "/Logout",
              icon: <FiLogOut />,
              label: "Đăng Xuất",
              className: "DangXuat",
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        {/* <Breadcrumb>
          {pathnames.length > 0 ? (
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{capatilize(name)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb> */}
        <AppRouter />
      </Layout>
    </Layout>
  );
};

export default RootLayout;
