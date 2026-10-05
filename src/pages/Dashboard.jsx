import { Link } from 'react-router-dom';
import StatsPanel from '../components/StatsPanel';
import ProgressSection from '../components/ProgressSection';
import ProblemTable from '../components/ProblemTable';
import EmptyState from '../components/EmptyState';
import { applyFilters, DEFAULT_FILTERS } from '../utils/problemUtils';

export default function Dashboard({ problems, stats }) {
  const recent = applyFilters(problems, DEFAULT_FILTERS).slice(0, 5);
  return (
    <div className="view">
      <header className="view-head">
        <p className="mono label">CODING PRACTICE / 01</p>
        <h1>Keep shipping.</h1>
        <p className="sub">A simple record of the problems you&apos;ve solved, studied and postponed.</p>
      </header>
      <StatsPanel stats={stats} />
      <section aria-labelledby="recent-h">
        <div className="section-head"><h2 id="recent-h" className="mono label">RECENT PROBLEMS</h2><Link className="link" to="/problems">View all</Link></div>
        {recent.length ? <ProblemTable problems={recent} compact /> :
          <EmptyState title="YOUR LOG IS EMPTY" text="Start with the first problem you attempt." action={<Link className="btn primary" to="/add">Add problem</Link>} />}
      </section>
      <ProgressSection stats={stats} />
      <p className="mono muted saved"><span className="dot" /> Data saved locally in this browser (localStorage)</p>
    </div>
  );
}
