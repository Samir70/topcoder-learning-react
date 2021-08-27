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
    const toObject = { pathname: "/", state: { oreList: props.oreList, goToOverView: false } }
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
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