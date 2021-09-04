import React from 'react';
import { useSelector } from 'react-redux';
import { getResults } from '../Redux/selectors';
import { GoToMiningProcessButton } from './NavButtons';

export const Results = () => {
    const miningPlan = useSelector(getResults);
    const res =  miningPlan.map((ore, i) => <p key={i}>Mined {ore.amount} of {ore.name}</p>)
    return (
        <div>
            <h1>The Mining results</h1>
            {res}
            <GoToMiningProcessButton />
        </div>
    )
}