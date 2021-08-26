import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
// import DataGrid from "@material-ui/core/DataGrid";
import { DataGrid } from '@material-ui/data-grid';

// useful article
// https://javascript.plainenglish.io/material-ui-tabs-ee580daa62de

function TabPanel(props) {
    const { children, value, index, ...other } = props; return (
        <div {...other}>
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
}

function MineSiteOverview(props) {
    const toObject = { pathname: "/", state: { names: props.names, goToOverView: false } }
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // Table need consists checkbox, Name, Value & Time to Mine columns
    const columns = [
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'value', headerName: 'Value', width: 150 },
        { field: 'timeToMine', headerName: 'Time to Mine', width: 200 }
    ];
    // dummy table for initial test
    const rows = [
        { id: "1", name: "ore1", value: 10, timeToMine: 5 },
        { id: "2", name: "ore2", value: 12, timeToMine: 3 },
        { id: "3", name: "ore3", value: 14, timeToMine: 2 },
        { id: "4", name: "ore4", value: 16, timeToMine: 8 },
        { id: "5", name: "ore5", value: 18, timeToMine: 4 },
        { id: "6", name: "ore6", value: 20, timeToMine: 6 },
    ]
    return (
        <div>
            <h1>Mine Site Overview</h1>
            <AppBar position="static" style={{ width: 900, margin: 'auto' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Table" id="tabTable" />
                    <Tab label="Timeline" id="tabCard" />
                </Tabs>
            </AppBar>
            <TabPanel class="tabPanel" value={value} index={0}>
                <h2>Ores that were given</h2>
                <div style={{ height: 400, width: 700, margin: 'auto' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>


                <ul>
                    {props.names.map((oreName, i) => (
                        <li key={i + 1}>{oreName}</li>
                    ))}
                </ul>
                {/* The next button is not a given requirement, but seems useful :) */}
                <Link id="backToEdit" to={toObject}>Go back to editing ores</Link>
            </TabPanel>
            <TabPanel class="tabPanel" value={value} index={1}>
                <Link id="backToEdit" to={toObject}>Go back to editing ores</Link>
            </TabPanel>
        </div>
    )
}

export default MineSiteOverview;