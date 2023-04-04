import React, { useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { RiFileChartLine, RiSettingsLine } from "react-icons/ri";
import { FiLayers } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { CiDesktop } from "react-icons/ci";
import { TbBrandWechat } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import AppRouter from "../AppRouter";
import "./style.scss";

const { Sider } = Layout;

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
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
              label: "Cài đặt hệ thống",
              children: [
                {
                  key: "/CaiDatHeThong/QuanLyTaiKhoan",
                  label: "Quản lý tài khoản",
                },
                {
                  key: "/CaiDatHeThong/QuanLyVaiTro",
                  label: "Quản lý Vai Trò",
                },
                {
                  key: "/CaiDatHeThong/NhatKyNguoiDung",
                  label: "Nhật ký người dùng",
                },
              ],
            },
            {
              key: "/DangXuat",
              icon: <FiLogOut />,
              label: "Đăng xuất",
              className: "DangXuat",
            },
          ]}
        />
      </Sider>

      <Layout className="site-layout">
        <AppRouter />
      </Layout>
    </Layout>
  );
};

export default RootLayout;
