import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../component/RootLayout/RootLayout";
import BaoCao from "../modules/BaoCao";
import CaiDatHeThong from "../modules/CaiDatHeThong";
import NhatKyNguoiDung from "../modules/CaiDatHeThong/NhatKyNguoiDung";
import QuanLyTaiKhoan from "../modules/CaiDatHeThong/QuanLyTaiKhoan";
import QuanLyVaiTro from "../modules/CaiDatHeThong/QuanLyVaiTro";
import CapSo from "../modules/CapSo";
import DangXuat from "../modules/DangXuat";
import Dashboar from "../modules/Dashboar";
import DichVu from "../modules/DichVu";
import ThietBi from "../modules/ThietBi";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Dashboar /> },
      { path: "/ThietBi", element: <ThietBi /> },
      { path: "/BaoCao", element: <BaoCao /> },
      { path: "/CapSo", element: <CapSo /> },
      { path: "/DichVu", element: <DichVu /> },
      { path: "/Dangxuat", element: <DangXuat /> },
      {
        path: "/CaiDatHeThong",
        element: <CaiDatHeThong />,
        children: [
          { path: "/CaiDatHeThong/QuanLyVaiTro", element: <QuanLyVaiTro /> },
          {
            path: "/CaiDatHeThong/QuanLyTaiKhoan",
            element: <QuanLyTaiKhoan />,
          },
          {
            path: "/CaiDatHeThong/NhatKyNguoiDung",
            element: <NhatKyNguoiDung />,
          },
        ],
      },
    ],
  },
]);
export default routes;
