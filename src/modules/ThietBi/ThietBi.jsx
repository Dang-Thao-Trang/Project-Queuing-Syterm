import Table from "react-bootstrap/Table";
import { Content } from "antd/es/layout/layout";
import React from "react";
import data from "./data.json";
import UseName from "../../component/UseName";
import { Breadcrumb } from "antd";
import "./ThietBi.scss";

const ThietBi = () => {
  return (
    <div className="device">
      <UseName />
      <Breadcrumb
        separator=">"
        items={[
          { title: "Thiết bị" },
          { title: "Danh Sách thiết bị", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <h3>Danh sách thiết bị</h3>
      <Content
        style={{
          background: "white",
          width: 1112,
          height: 490,
          borderRadius: 12,
        }}
      >
        <Table bordered striped>
          <thead>
            <tr>
              <th>Mã dịch vụ</th>
              <th>Tên thiết bị</th>
              <th>Địa chỉ IP</th>
              <th>Trạng thái hoạt động</th>
              <th>Trạng thái kết nối</th>
              <th>Dịch vụ sử dụng</th>
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
                  <td>{item.IP}</td>
                  <td>{item.trangthaihoatdong}</td>
                  <td>{item.trangthaiketnoi}</td>
                  <td>{item.dichvusudung}</td>
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

export default ThietBi;
