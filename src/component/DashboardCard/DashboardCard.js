import { Card, Space, Statistic } from "antd";
//component Card trên Dashboard
function DashboardCard({ icon, title, value }) {
  return (
    <div>
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </div>
  );
}
export default DashboardCard;
