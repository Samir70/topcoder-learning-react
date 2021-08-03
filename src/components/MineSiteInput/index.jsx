import "./styles.css";

function MineSiteInput(props) {
  const handleChange = (i, event) => {
    let newNames = [...props.names];
    newNames[i] = event.target.value
    props.update([...newNames])
  }
  return (
    <div className="mine-site-input">
      Mine Site Input
      {props.names.map((val, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            value={val}
            placeholder={`name of ore ${index+1}`}
            onChange={(e) => handleChange(index, e)}
            id={`ore${index + 1}`}
          />
        </div>
      ))}
      <button id="addMoreButton" onClick={() => props.update([...props.names, ""])}>Add another ore</button>
    </div>  
  );
}

export default MineSiteInput;
