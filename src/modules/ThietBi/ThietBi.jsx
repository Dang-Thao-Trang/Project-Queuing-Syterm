import { Table } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import UseName from "../../component/UseName";

const ThietBi = () => {
  const columns = [
    {
      title: "Mã thiết bị",
      dataIndex: "Mathietbi",
      key: "Mathietbi",
    },
    {
      title: "Tên thiết bị",
      dataIndex: "Tenthietbi",
      key: "Tenthietbi",
    },
    {
      title: "Địa chỉ IP",
      dataIndex: "DiachiIP",
      key: "DiachiIP",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "Trangthaihoatdong",
      key: "Trangthaihoatdong",
    },
    {
      title: "Trạng thái kết nối",
      dataIndex: "Trangthaiketnoi",
      key: "Trangthaiketnoi",
    },
    {
      title: "Dịch vụ sử dụng",
      dataIndex: "Dichvusudung",
      key: "Dichvusudung",
    },
    {
      title: "",
      dataIndex: "Chitiet",
      key: "Chitiet",
    },
    {
      title: "",
      dataIndex: "Capnhat",
      key: "Capnhat",
    },
  ];

  const dataSource = [
    {
      key: "1",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "2",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "3",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "4",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "5",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "6",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "7",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "8",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
    {
      key: "9",
      Mathietbi: "KIO_01",
      Tenthietbi: "Kiosk",
      DiachiIP: "192.168.1.10",
      Trangthaihoatdong: "Ngưng hoạt động",
      Trangthaiketnoi: "Mất kết nối",
      Dichvusudung: "Khám tim mạch, khám mắt...",
      Chitiet: "chi tiết",
      Capnhat: "cập nhật",
    },
  ];

  return (
    <div>
      <UseName />
      <Content
        style={{
          paddingTop: 80,
        }}
      >
        <Table dataSource={dataSource} columns={columns} />;
      </Content>
    </div>
  );
};

export default ThietBi;
