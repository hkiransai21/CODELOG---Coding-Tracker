import ProblemRow from './ProblemRow';
export default function ProblemTable({ problems, onDelete, compact }) {
  return (
    <ul className={`table ${compact ? 'is-compact' : ''}`} aria-label="Problems">
      {problems.map((p) => <ProblemRow key={p.id} problem={p} onDelete={onDelete} compact={compact} />)}
    </ul>
  );
}
