import { Link } from 'react-router-dom';
import "./styles.css";

function MineSiteInput(props) {
  const handleChange = (i, event) => {
    let newNames = [...props.names];
    newNames[i] = event.target.value
    props.update([...newNames])
  }
  const toObject = { pathname: '/overview', state: props.names }

  return (
    <div className="mine-site-input">
      <h1>Mine Site Input</h1>
      <p>Enter the names of the different ores you have found.</p>
      {props.names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            value={val}
            placeholder={`name of ore ${index + 1}`}
            onChange={(e) => handleChange(index, e)}
            id={`ore${index + 1}`}
          />
        </div>
      ))}
      <button id="addMoreButton" onClick={() => props.update([...props.names, ""])}>Add another ore</button>
      <Link id="doneButton" to={toObject}>Submit your update</Link>
    </div>
  );
}

export default MineSiteInput;
