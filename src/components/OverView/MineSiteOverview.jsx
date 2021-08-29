import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
// import DataGrid from "@material-ui/core/DataGrid";
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

function TabPanel(props) {
    const { children, value, index, ...other } = props; return (
        <div {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

function tLineItem(ore) {
    return (
        <TimelineItem key={ore.id}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{ore.name}</TimelineContent>
        </TimelineItem>
    )
}

function makeTimeLine(arr) {
    return arr.map(ore => tLineItem(ore))
}

function MineSiteOverview(props) {
    const toObject = { pathname: "/", state: { oreList: props.oreList, goToOverView: false } }
    const [value, setValue] = useState(0);
    const [tLineItems, setTLineItems] = useState([])
    const [selectedRows, setSelectedRows] = useState([])
    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    // Table need consists checkbox, Name, Value & Time to Mine columns
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'value', headerName: 'Value', width: 150 },
        { field: 'timeToMine', headerName: 'Time to Mine', width: 200 }
    ];
    // dummy table for initial test
    const rows = props.oreList.filter(ore => ore.name !== '')
    return (
        <div>
            <h1>Mine Site Overview</h1>
            <AppBar position="static" style={{ width: 900, margin: 'auto' }}>
                <Tabs value={value} onChange={handleTabChange}>
                    <Tab label="Table" id="tabTable" />
                    <Tab label="Timeline" id="tabCard" />
                </Tabs>
            </AppBar>
            <TabPanel className="tabPanel" value={value} index={0}>
                <h2>Ores that were given</h2>
                <div style={{ height: 400, width: 700, margin: 'auto' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        // disableSelectionOnClick
                        onSelectionModelChange={
                            items => {
                                setSelectedRows(items)
                                setTLineItems(rows.filter(r => items.includes(r.id)))
                            }
                        }
                        selectionModel={selectedRows}
                    />
                </div>

                {/* The next button is not a given requirement, but seems useful :) */}
                <Link id="backToEdit" to={toObject}>Go back to editing ores</Link>
            </TabPanel>
            <TabPanel className="tabPanel" value={value} index={1}>
                <Timeline>
                    {tLineItems.length ? makeTimeLine(tLineItems) : <p>No ores selected</p>}
                </Timeline>
                <Link id="backToEdit" to={toObject}>Go back to editing ores</Link>
            </TabPanel>
        </div>
    )
}

export default MineSiteOverview;