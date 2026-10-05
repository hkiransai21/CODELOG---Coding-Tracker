const Bar = ({ label, count, total, accent }) => (
  <div className="bar-row">
    <span className="mono">{label}</span>
    <div className="bar" role="img" aria-label={`${label}: ${count} of ${total}`}><i className={accent ? 'accent' : ''} style={{ width: total ? `${(count / total) * 100}%` : 0 }} /></div>
    <span className="mono count">{count}</span>
  </div>
);
export default function ProgressSection({ stats }) {
  const { total, byDifficulty, byStatus } = stats;
  return (
    <section className="progress" aria-label="Progress breakdown">
      <div><h3 className="mono label">By difficulty</h3>{Object.entries(byDifficulty).map(([k, v]) => <Bar key={k} label={k} count={v} total={total} />)}</div>
      <div><h3 className="mono label">By status</h3>{Object.entries(byStatus).map(([k, v]) => <Bar key={k} label={k} count={v} total={total} accent={k === 'Completed'} />)}</div>
    </section>
  );
}
