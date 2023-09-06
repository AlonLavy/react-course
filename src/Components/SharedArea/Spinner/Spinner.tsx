import "./Spinner.css";
import loadingSpinner from "../../../Assets/images/loading-gif.gif";

function Spinner(): JSX.Element {
  return (
    <div className="Spinner" style={{ width: 200 }}>
      <img src={loadingSpinner} />
    </div>
  );
}

export default Spinner;
