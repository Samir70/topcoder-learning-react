import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MineSiteInput from "./components/MineSiteInput";
import MineSiteOverview from "./components/OverView/MineSiteOverview";

import "./App.css";

function App() {
  const [names, setNames] = useState([""]);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* only the first path is meaningful, anything else matches to '/' */}
          <Route path="/overview">
            <MineSiteOverview names={names} />
          </Route>
          <Route path="/">
            <MineSiteInput names={names} update={setNames} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
