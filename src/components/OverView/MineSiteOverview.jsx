import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

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
    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Table" id="tabTable" />
                    <Tab label="Timeline" id="tabCard" />
                </Tabs>
            </AppBar>
            <TabPanel class="tabPanel" value={value} index={0}>
                <h1>Mine Site Overview</h1>
                <h2>Ores that were given</h2>
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