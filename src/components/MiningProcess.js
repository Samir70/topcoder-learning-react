import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddMiningEntry, setLastChecked, setAmountMined } from "../Redux/actions";
import { getCurrentOreName, getCurrentOreAmount, getLastChecked, getAmountMined } from "../Redux/selectors";
import { GoToResultsButton } from './NavButtons';
import Checkbox from '@material-ui/core/Checkbox';

export const MiningProcess = (props) => {
    const dispatch = useDispatch();
    const oreName = useSelector(getCurrentOreName);
    const oreAmount = useSelector(getCurrentOreAmount);
    const amountMined = useSelector(getAmountMined);
    const handleAmountChanged = event => {
        dispatch(setAmountMined(event.target.value))
    }
    const lastChecked = useSelector(getLastChecked)
    const handleAddEntry = () => {
        dispatch(AddMiningEntry(Number(amountMined), lastChecked))
        setAmountMined(amountMined)
        if (lastChecked) {
            setAmountMined('')
            setLastChecked(false)
        }
    }
    return (
        <div>
            <h1>{oreName}</h1>
            <p>Mining entry for {oreName}: {oreAmount}</p>
            <div>
                <input
                    id="amountMined"
                    type="number"
                    value={amountMined}
                    placeholder="type amount mined"
                    onChange={handleAmountChanged}
                />
                <button id="btnAddEntry" disabled={amountMined <= 0 && amountMined !== '0'} onClick={handleAddEntry}>Add Entry</button>
            </div>
            <div>
                <Checkbox
                    id="lastBlock"
                    onChange={() => dispatch(setLastChecked(!lastChecked))}
                    checked={lastChecked}
                    color="primary"
                />
                <label htmlFor="lastBlock">This is the last block</label>
            </div>
            <GoToResultsButton />
        </div>
    )
}