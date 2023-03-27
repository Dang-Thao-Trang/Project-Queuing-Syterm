import { Card, Col, Layout, Row, Space, Statistic } from "antd";
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
// import Calendars from "../../assets/images/Date picker.png";

const Dashboar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="Dashboard">
      <Layout>
        <Row>
          <Col span={16} className="chart">
            <Space direction="horizontal">
              <DashboardCard
                className="Card1"
                icon={<BsCalendar className="icon" />}
                title={"Số thứ tự đã cấp"}
                value={4.221}
              />
              <DashboardCard
                className="Card2"
                icon={<BsCalendarCheck />}
                title={"Số thứ tự đã sử dụng"}
                value={3.721}
              />
              <DashboardCard
                className="Card3"
                icon={<MdWifiCalling3 />}
                title={"Số thứ tự đang chờ"}
                value={468}
              />
              <DashboardCard
                className="Card4"
                icon={<BsBookmarkStar />}
                title={"Số thứ tự đã bỏ qua"}
                value={32}
              />
            </Space>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
                background: "white",
              }}
            >
              jsdbkjwd
            </Content>
          </Col>

          <Col span={8} className="overview">
            <UseName />
            <OverviewCard
              title1={"4.221 "}
              type={"Thiết bị"}
              value1={"3.799"}
              value2={"4.22"}
              trangthaihoatdong1={"đang hoạt động"}
              trangthaihoatdong2={"ngưng hoạt động"}
            ></OverviewCard>
            <Card>
              {/* <img src={Calendars} alt="Calendars" /> */}
              <Calendar />
            </Card>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Dashboar;
