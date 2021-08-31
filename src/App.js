import React, { useState } from "react";

import "./App.css";

// const testOres = [
//   'Acanthite', 'Bauxite', 'Bornite', 'Chalcocite', 'Chromite',
//   'Galena', 'Hermatite', 'Magnetite', 'Malachite', 'Molybdenite'
// ].map((ore, i) => {
//   return {
//     id: '' + (i + 1), name: ore, value: ore.charCodeAt(0), timeToMine: ore.length
//   }
// })

function App() {
  const [oreList, setOreList] = useState([
    // { id: "1", name: "", value: 0, timeToMine: 0 }
    { id: "1", name: "ore1", value: 10, timeToMine: 5, selected: false },
    { id: "2", name: "ore2", value: 12, timeToMine: 3, selected: false },
    { id: "3", name: "ore3", value: 12, timeToMine: 2, selected: false },
    { id: "4", name: "ore4", value: 16, timeToMine: 8, selected: false },
    { id: "5", name: "ore5", value: 18, timeToMine: 4, selected: false },
    { id: "6", name: "ore6", value: 20, timeToMine: 6, selected: false }
  ]);
  return (
    <div className="app">
      <h1>Starting mining part 3</h1>
    </div>
  );
}

export default App;
