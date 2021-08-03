import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MineSiteInput from "./components/MineSiteInput";
import Overview from "./components/OverView/overview";

import "./App.css";

function App() {
  const [names, setNames] = useState([""]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/overview">
            <Overview names={names} />
          </Route>
          <Route path="/">
            <MineSiteInput names={names} update={setNames} />
          </Route>
        </Switch>
        {/* <p>Names has length {names.length} and is {names.join(',')}</p> */}
      </div>
    </Router>
  );
}

export default App;
