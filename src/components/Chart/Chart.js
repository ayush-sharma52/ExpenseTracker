import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const vlaues = props.chartItems.map((DataPoint) => DataPoint.value);
  const maxValue = Math.max(...vlaues);

  return (
    <div className="chart">
      {props.chartItems.map((DataPoint) => {
        return (
          <ChartBar
            key={DataPoint.month}
            value={DataPoint.value}
            month={DataPoint.month}
            maxFillHeight={maxValue}
          />
        );
      })}
    </div>
  );
}
export default Chart;
