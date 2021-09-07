import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { checkIfLastOreFinished } from '../Redux/selectors';

export const GoToResultsButton = () => {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    return (
        <div>
            {shouldRedirect ? <Redirect to="/results" /> :
                <button
                    id="btnCheckResults"
                    onClick={() => setShouldRedirect(true)}
                >Check Results</button>
            }
        </div>
    )
}

export const GoToMiningProcessButton = () => {
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const noMoreOres = useSelector(checkIfLastOreFinished)
    return (
        <div>
            {shouldRedirect ? <Redirect to="/process" /> :
                <button
                    id="backToProcess"
                    disabled={noMoreOres}
                    onClick={() => setShouldRedirect(true)}
                >Back To Mining Process</button>
            }
        </div>
    )
}