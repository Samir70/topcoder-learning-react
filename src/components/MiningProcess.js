import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddMiningEntry } from "../Redux/actions";
import { getCurrentPlan } from "../Redux/selectors";
import Checkbox from '@material-ui/core/Checkbox';

export const MiningProcess = (props) => {
    const selectValue = state => state.value
    const val = useSelector(selectValue)
    const dispatch = useDispatch();
    const mPlan = useSelector(getCurrentPlan)
    const [amountMined, setAmountMined] = useState('')
    const handleAmountChanged = event => {
        setAmountMined(event.target.value)
    }
    const [lastChecked, setLastChecked] = useState(false)
    const handleAddEntry = () => {
        dispatch(AddMiningEntry(Number(amountMined), lastChecked))
        if (lastChecked) {
            setAmountMined('')
            setLastChecked(false)
        }
    }
    return (
        <div>
            <h1>Current mining plan: {mPlan}</h1>
            <p>Current amount: {val}</p>
            <div>
                <input
                    id="amountMined"
                    type="number"
                    value={amountMined}
                    placeholder="type amount mined"
                    onChange={handleAmountChanged}
                />
                <button id="btnAddEntry" disabled={amountMined <= 0} onClick={handleAddEntry}>Add Entry</button>
            </div>
            <div>
                <Checkbox
                    id="lastBlock"
                    onChange={() => setLastChecked(!lastChecked)}
                    checked={lastChecked}
                    color="primary"
                />
                <label htmlFor="lastBlock">This is the last block</label>
            </div>
        </div>
    )
}