import { Col, Layout, Row, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { BsCalendar, BsCalendarCheck, BsBookmarkStar } from "react-icons/bs";
import { MdWifiCalling3 } from "react-icons/md";
import DashboardCard from "../../component/DashboardCard/DashboardCard";
import OverviewCard from "../../component/DashboardCard/OverviewCard";
import UseName from "../../component/UseName";
import "./Dashboar.scss";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Chart from "../../component/Chart/Chart";
import { FiLayers } from "react-icons/fi";
import { TbBrandWechat } from "react-icons/tb";
import { CiDesktop } from "react-icons/ci";
import OverviewCard2 from "../../component/DashboardCard/Overview2";

const Dashboar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Dashboard">
      <Layout>
        <Row>
          <Col span={16} className="chart">
            <h5>Dashboard</h5>
            <h1>Biểu đồ cấp số</h1>
            <div className="data">
              <Space direction="horizontal">
                <DashboardCard
                  className1={" card_item Card1"}
                  className2={"card_small"}
                  icon1={<BsCalendar />}
                  icon2={<ArrowUpOutlined />}
                  title={"Số thứ tự đã cấp"}
                  value1={4.221}
                  value2={32.41}
                />
                <DashboardCard
                  className1={"card_item Card2"}
                  className2={"card_small"}
                  icon1={<BsCalendarCheck />}
                  icon2={<ArrowDownOutlined />}
                  title={"Số thứ tự đã sử dụng"}
                  value1={3.721}
                  value2={32.41}
                />
                <DashboardCard
                  className1={" card_item Card3"}
                  className2={"card_small"}
                  icon1={<MdWifiCalling3 />}
                  icon2={<ArrowUpOutlined />}
                  title={"Số thứ tự đang chờ"}
                  value1={468}
                  value2={56.41}
                />
                <DashboardCard
                  className1={"card_item Card4"}
                  className2={"card_small"}
                  icon1={<BsBookmarkStar />}
                  icon2={<ArrowDownOutlined />}
                  title={"Số thứ tự đã bỏ qua"}
                  value1={32}
                  value2={22.41}
                />
              </Space>
            </div>

            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "white",
                width: 791,
                height: 484,
                borderRadius: 12,
              }}
            >
              <Chart></Chart>
            </Content>
          </Col>

          <Col span={8} className="overview">
            <UseName />
            <div className="ovw">
              <h4>Tổng quan</h4>
              <div className="review">
                <OverviewCard
                  classname={"rv review1"}
                  percent={90}
                  percent1={10}
                  number={"4.221 "}
                  icon={<CiDesktop />}
                  typemue={"Thiết bị"}
                  number1={"3.799"}
                  number2={"4.22"}
                  trangthaihoatdong1={"Đang hoạt động"}
                  trangthaihoatdong2={"Ngưng hoạt động"}
                ></OverviewCard>
                <OverviewCard
                  classname={"rv review2"}
                  percent={76}
                  percent1={10}
                  number={"276 "}
                  icon={<TbBrandWechat />}
                  typemue={"Dịch vụ"}
                  number1={"210"}
                  number2={"66"}
                  trangthaihoatdong1={"Đang hoạt động"}
                  trangthaihoatdong2={"Ngưng hoạt động"}
                ></OverviewCard>
                <OverviewCard2
                  classname={"rv review3"}
                  percent={86}
                  percent1={10}
                  number={"4.221"}
                  icon={<FiLayers />}
                  typemue={"Cấp số"}
                  number1={"3.721"}
                  number2={"486"}
                  number3={"32"}
                  trangthaihoatdong1={"Đang chờ"}
                  trangthaihoatdong2={"Đã sử dụng"}
                  trangthaihoatdong3={"Bỏ qua"}
                ></OverviewCard2>
              </div>
            </div>

            <div className="calendar">
              <Calendar
                onChange={onChange}
                value={value}
                locale="en-EN"
                // formatLongDate={(date) => formatDate(date, "dd MMM YYYY")}
              />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Dashboar;
