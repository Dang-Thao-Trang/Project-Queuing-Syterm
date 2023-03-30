import { Card, Progress, Space } from "antd";
function OverviewCard2({
  classname,
  percent,
  number,
  typemue,
  icon,
  number1,
  number2,
  number3,
  trangthaihoatdong1,
  trangthaihoatdong2,
  trangthaihoatdong3,
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
          <p>
            <div className="dots3 dots"></div>
            {trangthaihoatdong3}
          </p>
        </div>
        <div className="rv_center">
          <p>
            <span>{number1}</span>
          </p>
          <p>
            <span>{number2}</span>
          </p>
          <p>
            <span>{number3}</span>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default OverviewCard2;
