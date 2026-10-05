import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import FilterBar from '../components/FilterBar';
import ProblemTable from '../components/ProblemTable';
import EmptyState from '../components/EmptyState';
import ConfirmDialog from '../components/ConfirmDialog';
import { applyFilters, DEFAULT_FILTERS } from '../utils/problemUtils';

export default function Problems({ problems, onDelete, notify }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [pending, setPending] = useState(null);
  const visible = useMemo(() => applyFilters(problems, filters), [problems, filters]);
  const change = (key, value) => setFilters((f) => ({ ...f, [key]: value }));
  const clear = () => setFilters((f) => ({ ...DEFAULT_FILTERS, sort: f.sort }));
  const confirmDelete = () => { onDelete(pending.id); notify(`Deleted “${pending.title}”`); setPending(null); };
  const clearBtn = <button className="btn" onClick={clear}>Clear filters</button>;

  return (
    <div className="view">
      <header className="view-head">
        <p className="mono label">PROBLEM LOG / 02</p>
        <h1>Problem log</h1>
        <p className="sub">Everything you&apos;ve attempted, in one place.</p>
      </header>
      <FilterBar filters={filters} onChange={change} onClear={clear} count={visible.length} total={problems.length} />
      {visible.length > 0 ? <ProblemTable problems={visible} onDelete={setPending} /> :
        problems.length === 0
          ? <EmptyState title="YOUR LOG IS EMPTY" text="Start with the first problem you attempt." action={<Link className="btn primary" to="/add">Add problem</Link>} />
          : <EmptyState title="NO PROBLEMS FOUND" text="Your search returned nothing." action={clearBtn} />}
      {pending && <ConfirmDialog problem={pending} onCancel={() => setPending(null)} onConfirm={confirmDelete} />}
    </div>
  );
}
