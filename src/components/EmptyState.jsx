export default function EmptyState({ title, text, action }) {
  return (<div className="empty"><p className="mono label">{title}</p><p className="empty-text">{text}</p>{action}</div>);
}
