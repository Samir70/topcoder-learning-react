import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import { DataGrid } from '@material-ui/data-grid';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


// useful articles
// https://javascript.plainenglish.io/material-ui-tabs-ee580daa62de
// https://material-ui.com/components/tables/#basic-table
// https://material-ui.com/components/timeline/#basic-timeline  

import "./App.css";

const testOres = [
  'Acanthite', 'Bauxite', 'Bornite', 'Chalcocite', 'Chromite',
  'Galena', 'Hermatite', 'Magnetite', 'Malachite', 'Molybdenite'
].map((ore, i) => {
  return {
    id: '' + (i + 1), name: ore, value: ore.charCodeAt(0), timeToMine: ore.length
  }
})

// Table need consists checkbox, Name, Value & Time to Mine columns
const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 250, editable: true },
  { field: 'value', headerName: 'Value', width: 150, editable: true },
  { field: 'timeToMine', headerName: 'Time to Mine', width: 200, editable: true }
];

function TabPanel(props) {
  const { children, value, index, ...other } = props; return (
    <div {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function tLineItem(ore, i, len) {
  return (
    <TimelineItem key={ore.id}>
      <TimelineSeparator>
        <TimelineDot />
        {i < len - 1 && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>{ore.name}</TimelineContent>
    </TimelineItem>
  )
}

function makeTimeLine(arr) {
  return arr.map((ore, i) => tLineItem(ore, i, arr.length))
}

function App() {
  const [oreList, setOreList] = useState([
    // { id: "1", name: "", value: 0, timeToMine: 0 }
    { id:"1", name: "ore1", value: 10, timeToMine: 5 },
    { id:"2", name: "ore2", value: 12, timeToMine: 3 },
    { id:"3", name: "ore3", value: 14, timeToMine: 2 },
    { id:"4", name: "ore4", value: 16, timeToMine: 8 },
    { id:"5", name: "ore5", value: 18, timeToMine: 4 },
    { id:"6", name: "ore6", value: 20, timeToMine: 6 }
  ]);
  const [value, setValue] = useState(0);
  const [tLineItems, setTLineItems] = useState([])
  const [selectedRows, setSelectedRows] = useState([])
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="app">
      <h1>Mine Site Overview</h1>
      <AppBar position="static" style={{ width: 900, margin: 'auto' }}>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab label="Table" id="tabTable" />
          <Tab label="Timeline" id="tabCard" disabled={tLineItems.length === 0} />
        </Tabs>
      </AppBar>
      <TabPanel className="tabPanel" value={value} index={0}>
        <h2>Ores that were given</h2>
        <div style={{ height: 400, width: 700, margin: 'auto' }}>
          <DataGrid
            rows={oreList.filter(ore => ore.name !== '')}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={
              items => {
                setSelectedRows(items)
                setTLineItems(
                  oreList.filter(r => items.includes(r.id)).sort((a, b) => a.value === b.value ? b.timeToMine - a.timeToMine : b.value - a.value)
                )
              }
            }
            selectionModel={selectedRows}
          />
        </div>
        <button id="testOresButton" onClick={() => setOreList(testOres)}>Use the test data</button>
      </TabPanel>
      <TabPanel className="tabPanel" value={value} index={1}>
        <Timeline>
          {tLineItems.length ? makeTimeLine(tLineItems) : <p>No ores selected</p>}
        </Timeline>
      </TabPanel>
    </div>
  );
}

export default App;
