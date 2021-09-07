import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import "./App.css";
import { AddMiningPlan } from "./Redux/actions";
import { checkIfLastOreFinished } from "./Redux/selectors";
import { MiningProcess } from './components/MiningProcess';
import { Results } from './components/Results';


function App() {
  const dispatch = useDispatch();
  const noMoreOres = useSelector(checkIfLastOreFinished)
  const [newOreList, setNewOreList] = useState('')
  const handleNewOreList = (e) => {
    setNewOreList(e.target.value)
  }
  const handleSetNewPlan = () => {
    if (newOreList === '') {
      dispatch(AddMiningPlan([]))
    } else {
      let list = newOreList.split(',').map(ore => ore.trim())
      dispatch(AddMiningPlan(list))
    }
  }
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/process">
            {noMoreOres ? <Redirect to="/results" /> : <MiningProcess />}
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Redirect to="/process" />
          </Route>
        </Switch>
        <p>If you want to start again, type in a comma seperated list of ores:</p>
        <input
          type="text"
          value={newOreList}
          placeholder="give comma seperated list of ores"
          onChange={handleNewOreList}
        />
        <button onClick={handleSetNewPlan}>Set new mining plan</button>
      </div>
    </Router>
  );
}

export default App;
