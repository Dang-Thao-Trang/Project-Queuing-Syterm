import UseName from "../../component/UseName";
import Table from "react-bootstrap/Table";
import data from "../ThietBi/data.json";
import "./DichVu.scss";
import dayjs from "dayjs";
import { Content } from "antd/es/layout/layout";
import { Breadcrumb, Select, Input, Row, Col, DatePicker } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { RiAddFill } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const { Search } = Input;
const { Option } = Select;

const dateFormat = "DD/MM/YYYY";

const DichVu = () => {
  const handleSearch = (value) => {
    // Do something to fetch options based on the search value
    // and setOptions with the results
  };
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
      {/*  chức năng được viết tại đây */}
      <div className="add_device">
        <div className="icon_add">
          <RiAddFill />
        </div>
        <span>Thêm dịch vụ</span>
      </div>
      <div className="data_classification">
        <Row>
          <Col span={7}>
            <div className="active">
              <h6>Trạng thái hoạt động</h6>
              <Select
                suffixIcon={<CaretDownOutlined color="#FF7506" />}
                showSearch
                placeholder="Tất cả"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                <Option value="all">Tất cả</Option>
                <Option value="hoatdong">Hoạt động</Option>
                <Option value="ngunghoatdong">Ngưng hoạt động</Option>
              </Select>
            </div>
          </Col>
          <Col span={7}>
            <div className="data_time">
              <h6>Chọn thời gian</h6>
              <DatePicker
                defaultValue={dayjs("10/10/2021", dateFormat)}
                format={dateFormat}
                suffixIcon={
                  <MdOutlineCalendarMonth className="icon_calendar" />
                }
                className=""
              />
              <div className="icon_sm">
                <IoMdArrowDropright />
              </div>
              <DatePicker
                defaultValue={dayjs("18/10/2021", dateFormat)}
                format={dateFormat}
                suffixIcon={
                  <MdOutlineCalendarMonth className="icon_calendar" />
                }
              />
            </div>
          </Col>
          <Col span={7} offset={3} order={3}>
            <div className="search">
              <h6>Từ khoá</h6>
              <Search
                placeholder="Nhập từ khoá"
                onSearch={handleSearch}
                style={{
                  width: 300,
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
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
