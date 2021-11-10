/* eslint-disable jsx-a11y/anchor-is-valid */
export default function RegionTabs() {
  const regions = ["NORTH", "CENTRAL", "SOUTH", "EAST", "WEST"];
  return (
    <div className="tabs is-toggle">
      <ul>
        <li className="is-active">
          <a href="" onClick={e => {e.preventDefault(); }}>
            <span>ALL</span>
          </a>
        </li>
        {regions.map( (region, i) => (
        <li key={i}>
          <a href="" onClick={e => {e.preventDefault(); }}>
            <span>{region}</span>
          </a>
        </li>
        ))}
      </ul>
    </div>
  )
}