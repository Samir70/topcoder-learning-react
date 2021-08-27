import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import "./styles.css";

function MineSiteInput(props) {
  // used to decide wether to redirect
  const [goToOverview, setToOverview] = new useState(false)
  // where to redirect, and the state to pass to the new location
  const toObject = { pathname: '/overview', state: { oreList: props.oreList } }
  // update the parent's state via the function 'update' passed in props
  // do this whenever the value of the input element is changed. 
  // i is the index of that particular input field.
  const handleChange = (i, event) => {
    let newOreList = [...props.oreList];
    newOreList[i] = {
      id: '' + (i + 1), name: event.target.value,
      value: event.target.value.charCodeAt(0), timeToMine: Math.floor(10 + Math.random() * 50)
    }
    props.update([...newOreList])
  }
  const newOreObject = { id: '' + (props.oreList.length+1), name: '', value: 0, timeToMine: 0 }

  return (
    <div className="mine-site-input">
      <h1>Mine Site Input</h1>
      <p>Enter the names of the different ores you have found.</p>
      {/* each name in oreList becomes a new label and input field */}
      {props.oreList.map((oreDetails, index) => (
        <div key={index}>
          <div>ore {index + 1}</div>
          <input
            type="text"
            value={oreDetails.name}
            placeholder={`name of ore ${index + 1}`}
            onChange={(e) => handleChange(index, e)}
            id={`ore${index + 1}`}
          />
        </div>
      ))}
      <button id="addMoreButton" onClick={() => props.update([...props.oreList, newOreObject])}>Add another ore</button>
      <button id="doneButton" onClick={() => setToOverview(true)}>Submit your update</button>
      {goToOverview && <Redirect to={toObject} />}
    </div>
  );
}

export default MineSiteInput;
