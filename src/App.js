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
  const [oreList, setOreList] = useState([
    { id: "1", name: "", value: 0, timeToMine: 0 }
  ]);
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* only the first path is meaningful, anything else matches to '/' */}
          <Route path="/overview">
            <MineSiteOverview oreList={oreList} />
          </Route>
          <Route path="/">
            <MineSiteInput oreList={oreList} update={setOreList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
