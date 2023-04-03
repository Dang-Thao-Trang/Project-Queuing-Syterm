import { Content } from "antd/es/layout/layout";
import React from "react";
import Table from "react-bootstrap/Table";
import data from "./data.json";
import UseName from "../../component/UseName";
import { Breadcrumb } from "antd";
import "./CapSo.scss";

const CapSo = () => {
  return (
    <div className="number_level">
      <UseName />
      <Breadcrumb
        separator=">"
        items={[
          { title: "Cấp số" },
          { title: "Danh sách cấp số", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <h3>Quản lý cấp số</h3>
      <Content
        style={{
          background: "white",
          width: 1112,
          height: 490,
          borderRadius: 12,
        }}
      >
        <Table bordered>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Khách Hàng</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Hạn sử dụng</th>
              <th>Trạng thái sử dụng</th>
              <th>Nguồn cấp</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tenKH}</td>
                  <td>{item.tenDv}</td>
                  <td>{item.thoigiancap}</td>
                  <td>{item.hansudung}</td>
                  <td>{item.trangthai}</td>
                  <td>{item.nguoncap}</td>
                  <td>chi tiết</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Content>
    </div>
  );
};

export default CapSo;
