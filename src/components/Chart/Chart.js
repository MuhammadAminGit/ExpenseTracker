import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const dataValues = props.items.map(dataPoint => dataPoint.value);
    let totalMax = 0;
    for(const data of dataValues)
    {
        totalMax += parseInt(data,10);
    }

  return (
    <div className="chart">
      {props.items.map((dataPoint) => (
        <ChartBar
          key = {dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
