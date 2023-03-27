import { Card, Space, Statistic } from "antd";
import Meta from "antd/es/card/Meta";
//component Card trên Dashboard
function OverviewCard({
  title1,
  type,
  value1,
  value2,
  trangthaihoatdong1,
  trangthaihoatdong2,
}) {
  return (
    <div>
      <Card>
        <Space>
          <Meta title={title1} description={type}></Meta>
          <div>
            <p>
              {trangthaihoatdong1}
              <span>: {value1}</span>
            </p>
            <p>
              {trangthaihoatdong2}
              <span>: {value2}</span>
            </p>
          </div>
        </Space>
      </Card>
    </div>
  );
}
export default OverviewCard;
