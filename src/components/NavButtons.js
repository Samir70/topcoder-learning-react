import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import { checkIfLastOreFinished } from '../Redux/selectors';

export const GoToResultsButton = () => {
    // const handleGoToResults = ;
    const [shouldRedirect, setShouldRedirect] = useState(false)
    return (
        <div>
            {shouldRedirect ? <Redirect to="/results" /> :
                <button
                    id="btnCheckResults"
                    // variant="contained"
                    // color="primary"
                    onClick={() => setShouldRedirect(true)}
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