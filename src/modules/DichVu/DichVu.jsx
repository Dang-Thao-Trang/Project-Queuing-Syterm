import UseName from "../../component/UseName";
import Table from "react-bootstrap/Table";
import { Content } from "antd/es/layout/layout";
import React from "react";
import data from "../ThietBi/data.json";
import { Breadcrumb } from "antd";
import "./DichVu.scss";

const DichVu = () => {
  return (
    <div className="service">
      <UseName />
      <Breadcrumb
        separator=">"
        items={[
          { title: "Dịch vụ" },
          { title: "Danh Sách dịch vụ", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <h3>Quản lý dịch vụ</h3>
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
              <th>Mã dịch vụ</th>
              <th>Tên dịch vụ</th>
              <th>Trạng thái hoạt động</th>
              <th>Trạng thái kết nối</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Mathietbi}</td>
                  <td>{item.tenthietbi}</td>
                  <td>{item.trangthaihoatdong}</td>
                  <td>{item.trangthaiketnoi}</td>
                  <td>chi tiết</td>
                  <td>cập nhật</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Content>
    </div>
  );
};

export default DichVu;
