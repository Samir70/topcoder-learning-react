import React, { useState } from "react";
import MineSiteInput from "./components/MineSiteInput";

import "./App.css";

function App() {
  const [names, setNames] = useState([""]);
  return (
    <div className="app">
      <MineSiteInput names={names} update={setNames} />
      <p>Names has length {names.length} and is {names.join(',')}</p>
    </div>
  );
}

export default App;
