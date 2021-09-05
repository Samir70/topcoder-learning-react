import React from 'react';
import { useSelector } from 'react-redux';
import { getResults, checkIfLastOreFinished } from '../Redux/selectors';
import { GoToMiningProcessButton } from './NavButtons';

export const Results = () => {
    const miningPlan = useSelector(getResults);
    const lastOreFinished = useSelector(checkIfLastOreFinished);
    const res = miningPlan.map((ore, i) =>
        <tr key={i}>
            <td>{ore.name}</td>
            <td>{ore.amount}</td>
            <td>{ore.jobs}</td>
        </tr>)
    return (
        <div>
            <h1>The Mining results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Ore Name</th>
                        <th>Amount Mined</th>
                        <th>Total Jobs</th>
                    </tr>
                </thead>
                <tbody>
                    {res}
                </tbody>
            </table>
            {lastOreFinished ? <p>No more ores to process</p> : <GoToMiningProcessButton />}
        </div>
    )
}