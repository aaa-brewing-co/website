export default function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <input
      className="input"
      type="text"
      value={filterText} placeholder="Search..."
      onChange={(e) => onFilterTextChange(e.target.value)} />
  )
}