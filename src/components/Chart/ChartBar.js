import './ChartBar.css'
function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxFillHeight > 0) {
    barFillHeight =
      Math.round((props.value / props.maxFillHeight) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.month}</div>
    </div>
  );
}
export default ChartBar;
