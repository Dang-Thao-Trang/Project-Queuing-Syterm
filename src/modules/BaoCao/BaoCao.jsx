import { Content } from "antd/es/layout/layout";
import React from "react";
import UseName from "../../component/UseName";
import Table from "react-bootstrap/Table";
import data from "../CapSo/data.json";
import { Breadcrumb } from "antd";
import "./BaoCao.scss";

const BaoCao = () => {
  return (
    <div className="report">
      <UseName />
      <Breadcrumb
        separator=">"
        items={[
          { title: "Báo cáo" },
          { title: "Lập báo cáo", className: "ant-breadcrumb-link-2" },
        ]}
      />
      <h3>Danh sách báo cáo</h3>
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
              <th>Số thứ tự</th>
              <th>Tên dịch vụ</th>
              <th>Thời gian cấp</th>
              <th>Tình trạng</th>
              <th>Nguồn cấp</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.tenDv}</td>
                  <td>{item.thoigiancap}</td>
                  <td>{item.trangthai}</td>
                  <td>{item.nguoncap}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Content>
    </div>
  );
};

export default BaoCao;
