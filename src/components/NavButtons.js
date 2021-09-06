import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { checkIfLastOreFinished } from '../Redux/selectors';
import { AddMiningEntry } from '../Redux/actions';

export const GoToResultsButton = (props) => {
    const dispatch = useDispatch();
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const handleClick = () => {
        let amount = Number(props.amount)
        if (isNaN(amount)) {amount = 0}
        dispatch(AddMiningEntry(amount, props.lastMined))
        setShouldRedirect(true)
    }
    return (
        <div>
            {shouldRedirect ? <Redirect to="/results" /> :
                <button
                    id="btnCheckResults"
                    // variant="contained"
                    // color="primary"
                    onClick={handleClick}
                >Check Results</button>
            }
        </div>
    )
}

export const GoToMiningProcessButton = () => {
    // const handleGoToResults = ;
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const noMoreOres = useSelector(checkIfLastOreFinished)
    return (
        <div>
            {shouldRedirect ? <Redirect to="/process" /> :
                <button
                    id="backToProcess"
                    // variant="contained"
                    // color="primary"
                    disabled={noMoreOres}
                    onClick={() => setShouldRedirect(true)}
                >Back To Mining Process</button>
            }
        </div>
    )
}