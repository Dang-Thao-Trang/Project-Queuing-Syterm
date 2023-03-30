import { Card, Space, Statistic } from "antd";

//component Card trên Dashboard
function DashboardCard({
  className1,
  className2,
  icon1,
  title,
  value1,
  value2,
  icon2,
}) {
  return (
    <div>
      <Card className={className1}>
        <Space direction="horizontal">
          <div className="c_top">
            <div className="icon_item">
              <div className="icon">{icon1}</div>
            </div>
            <span>{title}</span>
          </div>
          <div className="c_bottom">
            {<span className="number">{value1}</span>}
            <Card bordered={false} className={className2}>
              <Statistic value={value2} prefix={icon2} suffix="%" />
            </Card>
          </div>
        </Space>
      </Card>
    </div>
  );
}
export default DashboardCard;
