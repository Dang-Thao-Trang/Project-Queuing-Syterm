import { Outlet, Route, Routes } from "react-router-dom";
import BaoCao from "../../modules/BaoCao";
import CaiDatHeThong from "../../modules/CaiDatHeThong";
import NhatKyNguoiDung from "../../modules/CaiDatHeThong/NhatKyNguoiDung";
import QuanLyTaiKhoan from "../../modules/CaiDatHeThong/QuanLyTaiKhoan";
import QuanLyVaiTro from "../../modules/CaiDatHeThong/QuanLyVaiTro";
import CapSo from "../../modules/CapSo";
import DangXuat from "../../modules/DangXuat";
import Dashboar from "../../modules/Dashboar";
import DichVu from "../../modules/DichVu";
import ThietBi from "../../modules/ThietBi";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboar />}></Route>
      <Route path="/ThietBi" element={<ThietBi />}></Route>
      <Route path="/BaoCao" element={<BaoCao />}></Route>
      <Route path="/CapSo" element={<CapSo />}></Route>
      <Route path="/DichVu" element={<DichVu />}></Route>
      <Route path="/CaiDatHeThong" element={<CaiDatHeThong />}>
        <Route path="/CaiDatHeThong/QuanLyVaiTro" element={<QuanLyVaiTro />} />
        <Route
          path="/CaiDatHeThong/QuanLyTaiKhoan"
          element={<QuanLyTaiKhoan />}
        />
        <Route
          path="/CaiDatHeThong/NhatKyNguoiDung"
          element={<NhatKyNguoiDung />}
        />
      </Route>
      <Route path="/Dangxuat" element={<DangXuat />}></Route>
    </Routes>
  );
}
export default AppRouter;
