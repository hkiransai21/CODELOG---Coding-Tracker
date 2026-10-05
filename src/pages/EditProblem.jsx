import { useParams, useNavigate, Link } from 'react-router-dom';
import ProblemForm from '../components/ProblemForm';
import EmptyState from '../components/EmptyState';
import { formatId } from '../utils/problemUtils';
export default function EditProblem({ problems, onUpdate, notify }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const problem = problems.find((p) => p.id === id);
  if (!problem) return <div className="view narrow"><EmptyState title="PROBLEM NOT FOUND" text="This problem doesn't exist. It may have been deleted." action={<Link className="btn" to="/problems">Back to problems</Link>} /></div>;
  const handleSubmit = (values) => { onUpdate(id, values); notify(`Updated “${values.title.trim()}”`); navigate('/problems'); };
  return (
    <div className="view narrow">
      <header className="view-head"><p className="mono label">EDIT PROBLEM / {formatId(problem.num)}</p><h1>{problem.title}</h1></header>
      <ProblemForm initialValues={problem} submitLabel="Update problem" onSubmit={handleSubmit} onCancel={() => navigate('/problems')} />
    </div>
  );
}
