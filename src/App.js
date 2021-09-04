import React from "react";
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

// const testOres = [
//   'Acanthite', 'Bauxite', 'Bornite', 'Chalcocite', 'Chromite',
//   'Galena', 'Hermatite', 'Magnetite', 'Malachite', 'Molybdenite'
// ].map((ore, i) => {
//   return {
//     id: '' + (i + 1), name: ore, value: ore.charCodeAt(0), timeToMine: ore.length
//   }
// })

function App() {
  // const [oreList, setOreList] = useState([
  //   // { id: "1", name: "", value: 0, timeToMine: 0 }
  //   { id: "1", name: "ore1", value: 10, timeToMine: 5, selected: false },
  //   { id: "2", name: "ore2", value: 12, timeToMine: 3, selected: false },
  //   { id: "3", name: "ore3", value: 12, timeToMine: 2, selected: false },
  //   { id: "4", name: "ore4", value: 16, timeToMine: 8, selected: false },
  //   { id: "5", name: "ore5", value: 18, timeToMine: 4, selected: false },
  //   { id: "6", name: "ore6", value: 20, timeToMine: 6, selected: false }
  // ]);
  useDispatch(AddMiningPlan([]))
  const noMoreOres = useSelector(checkIfLastOreFinished)  
  
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
      </div>
    </Router>
  );
}

export default App;
