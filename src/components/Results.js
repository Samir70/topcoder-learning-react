import React from 'react';
import { useSelector } from 'react-redux';
import { getResults } from '../Redux/selectors';
import { GoToMiningProcessButton } from './NavButtons';

export const Results = () => {
    const miningPlan = useSelector(getResults);
    const res = miningPlan.map((ore, i) => <tr key={i}><td>{ore.name}</td><td>{ore.amount}</td><td>??</td></tr>)
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
            <GoToMiningProcessButton />
        </div>
    )
}