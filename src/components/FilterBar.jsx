import SearchBar from './SearchBar';
import { OPTIONS } from '../utils/validation';
const Select = ({ id, label, value, options, onChange }) => (
  <div className="field">
    <label htmlFor={id} className="mono label">{label}</label>
    <select id={id} value={value} onChange={(e) => onChange(id, e.target.value)}>
      <option value="All">All</option>{options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);
export default function FilterBar({ filters, onChange, onClear, count, total }) {
  const dirty = Object.entries(filters).some(([k, v]) => (k === 'query' ? v : k === 'sort' ? false : v !== 'All'));
  return (
    <section className="filters" aria-label="Search, filter and sort">
      <SearchBar value={filters.query} onChange={(v) => onChange('query', v)} />
      <div className="filter-grid">
        <Select id="difficulty" label="Difficulty" value={filters.difficulty} options={OPTIONS.difficulties} onChange={onChange} />
        <Select id="status" label="Status" value={filters.status} options={OPTIONS.statuses} onChange={onChange} />
        <Select id="language" label="Language" value={filters.language} options={OPTIONS.languages} onChange={onChange} />
        <Select id="platform" label="Platform" value={filters.platform} options={OPTIONS.platforms} onChange={onChange} />
        <div className="field">
          <label htmlFor="sort" className="mono label">Sort by</label>
          <select id="sort" value={filters.sort} onChange={(e) => onChange('sort', e.target.value)}>
            <option value="newest">Newest first</option><option value="oldest">Oldest first</option>
            <option value="title">Title A–Z</option><option value="difficulty">Difficulty</option>
          </select>
        </div>
      </div>
      <div className="filter-foot"><span className="mono" aria-live="polite">{count} of {total} problems</span>
        <button className="link" onClick={onClear} disabled={!dirty}>Clear filters</button></div>
    </section>
  );
}
