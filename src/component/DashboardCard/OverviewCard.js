import { Card, Progress, Space } from "antd";
//component Card trên Dashboard
function OverviewCard({
  classname,
  percent,
  number,
  typemue,
  icon,
  number1,
  number2,
  trangthaihoatdong1,
  trangthaihoatdong2,
}) {
  return (
    <div>
      <Card className={classname}>
        <div className="progess">
          <Space wrap>
            <Progress type="circle" percent={percent} size={60}></Progress>
          </Space>
        </div>
        <div className="rv_top">
          <h5>{number}</h5>
          <p>
            {icon}
            {typemue}
          </p>
        </div>
        <div className="rv_bottom">
          <p>
            <div className="dots1 dots"></div>
            {trangthaihoatdong1}
          </p>
          <p>
            <div className="dots2 dots"></div>
            {trangthaihoatdong2}
          </p>
        </div>
        <div className="rv_center">
          <p style={{ marginTop: "18px" }}>
            <span>{number1}</span>
          </p>
          <p style={{ marginBottom: "18px" }}>
            <span>{number2}</span>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default OverviewCard;
