import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
    { id: "1", name: "ore1", value: 10, timeToMine: 5, selected: false },
    { id: "2", name: "ore2", value: 12, timeToMine: 3, selected: false },
    { id: "3", name: "ore3", value: 12, timeToMine: 2, selected: false },
    { id: "4", name: "ore4", value: 16, timeToMine: 8, selected: false },
    { id: "5", name: "ore5", value: 18, timeToMine: 4, selected: false },
    { id: "6", name: "ore6", value: 20, timeToMine: 6, selected: false }
  ]);
  const [value, setValue] = useState(0);
  const [tLineItems, setTLineItems] = useState([])
  const [selectedRows, setSelectedRows] = useState(new Set())
  const [allSelected, setAllSelected] = useState(false)
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSelect = (id) => {
    let sRows = new Set([...selectedRows])
    if (sRows.has(id)) {
      sRows.delete(id)
    } else {
      sRows.add(id)
    }
    setSelectedRows(new Set([...sRows]))
    setTLineItems(
      oreList.filter(r => sRows.has(r.id)).sort((a, b) => a.value === b.value ? b.timeToMine - a.timeToMine : b.value - a.value)
    )
    // console.log({ id, selectedRows, sRows })
  }
  const selectAll = () => {
    let sRows = new Set()
    if (!allSelected) {
      for (let ore of oreList) { sRows.add(ore.id) }
    }
    setOreList(oreList.map(ore => { return { ...ore, selected: !allSelected } }))
    setAllSelected(!allSelected)
    setSelectedRows(sRows)
    setTLineItems(
      oreList.filter(r => sRows.has(r.id)).sort((a, b) => a.value === b.value ? b.timeToMine - a.timeToMine : b.value - a.value)
    )
  }
  return (
    <div className="app">
      <h1>Mine Site Overview</h1>
      <AppBar position="static" style={{ width: 900, margin: 'auto' }}>
        <Tabs value={value} onChange={handleTabChange}>
          <Tab label="Table" id="tabTable" />
          <Tab label="Timeline" id="tabCard" disabled={tLineItems.length === 0} />
        </Tabs>
      </AppBar>
      {value === 0 && <Box className="tabPanel" value={value} index={0}>
        <h2>Ores that were given</h2>
        <div style={{ height: 400, width: 700, margin: 'auto' }}>
          <TableContainer component={Paper}>
            <Table className="oreTable" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><input type="checkbox" onChange={selectAll} checked={allSelected} /></TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Value</TableCell>
                  <TableCell align="right">Time To Mine</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {oreList.map((row) => (
                  <TableRow key={row.id} onClick={() => handleSelect(row.id)}>
                    <TableCell><input type="checkbox" onChange={() => handleSelect(row.id)} checked={selectedRows.has(row.id)} /></TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                    <TableCell align="right">{row.timeToMine}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <button id="testOresButton" onClick={() => setOreList(testOres)}>Use the test data</button>
      </Box>}
      {value === 1 && <Box className="tabPanel" value={value} index={1}>
        <Timeline>
          {tLineItems.length ? makeTimeLine(tLineItems) : <p>No ores selected</p>}
        </Timeline>
      </Box>}
    </div>
  );
}

export default App;
