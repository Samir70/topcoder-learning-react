import { Link } from 'react-router-dom';
function MineSiteOverview(props) {
    const toObject = {pathname:"/", state: props.names}
    return (
        <div>
            <h1>Mine Site Overview</h1>
            <h2>Ores that were given</h2>
            <ul>
                {props.names.map((oreName, i) => (
                    <li key={i + 1}>{oreName}</li>
                ))}
            </ul>
            <Link id="backToEdit" to={toObject}>Go back to editing ores</Link>
        </div>
    )
}

export default MineSiteOverview;