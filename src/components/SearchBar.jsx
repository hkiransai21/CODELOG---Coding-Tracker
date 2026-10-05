export default function SearchBar({ value, onChange }) {
  return (
    <div className="field search">
      <label htmlFor="search" className="mono label">Search</label>
      <input id="search" type="search" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Title, platform, language or topic" autoComplete="off" />
    </div>
  );
}
