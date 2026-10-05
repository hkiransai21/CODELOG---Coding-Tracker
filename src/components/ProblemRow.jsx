import { Link } from 'react-router-dom';
import { formatId, formatDate } from '../utils/problemUtils';
const slug = (s) => s.toLowerCase().replace(/\s+/g, '-');
export default function ProblemRow({ problem: p, onDelete, compact = false }) {
  return (
    <li className={`row ${compact ? 'compact' : ''}`}>
      <span className="mono muted">{formatId(p.num)}</span>
      <span className="title">{compact ? p.title : <Link to={`/edit/${p.id}`}>{p.title}</Link>}{!compact && <small className="mono muted">{p.platform} · {p.topic}</small>}</span>
      <span className="mono lang">{p.language}</span>
      <span className={`mono tag d-${slug(p.difficulty)}`}>{p.difficulty}</span>
      <span className={`mono tag s-${slug(p.status)}`}>{p.status}</span>
      {!compact && <span className="mono muted date">{formatDate(p.dateAdded)}</span>}
      {!compact && (<span className="row-actions">
        <Link className="link" to={`/edit/${p.id}`} aria-label={`Edit ${p.title}`}>Edit</Link>
        <button className="link danger-link" onClick={() => onDelete(p)} aria-label={`Delete ${p.title}`}>Delete</button>
      </span>)}
    </li>
  );
}
