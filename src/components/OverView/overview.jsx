function Overview(props) {
    return (
        <div>
          <h1>Mine overview</h1>
          <h2>Ores that were given</h2>
          <ul>
            {props.names.map((oreName, i) => (
              <li key={i + 1}>{oreName}</li>
            ))}
          </ul>
        </div>
    )
}

export default Overview;