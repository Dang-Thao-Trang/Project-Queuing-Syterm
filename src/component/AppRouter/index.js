import { Route, Routes } from "react-router-dom";
import BaoCao from "../../modules/BaoCao";
import CaiDatHeThong from "../../modules/CaiDatHeThong";
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
      <Route path="/CaiDatHeThong" element={<CaiDatHeThong />}></Route>
      <Route path="/Dangxuat" element={<DangXuat />}></Route>
    </Routes>
  );
}
export default AppRouter;
