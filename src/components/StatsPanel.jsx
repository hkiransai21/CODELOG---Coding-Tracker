export default function StatsPanel({ stats }) {
  const items = [['Problems logged', stats.total], ['Solved', stats.byStatus.Completed], ['In progress', stats.byStatus['In Progress']], ['Completion rate', `${stats.completionRate}%`]];
  return (
    <section aria-label="Statistics" className="stats">
      {items.map(([label, value]) => (<div key={label} className="stat"><span className="stat-value">{value}</span><span className="mono label">{label}</span></div>))}
    </section>
  );
}
