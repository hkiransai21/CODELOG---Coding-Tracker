import { useNavigate } from 'react-router-dom';
import ProblemForm from '../components/ProblemForm';
export default function AddProblem({ onAdd, notify }) {
  const navigate = useNavigate();
  const handleSubmit = (values) => { onAdd(values); notify(`Saved “${values.title.trim()}”`); navigate('/problems'); };
  return (
    <div className="view narrow">
      <header className="view-head"><p className="mono label">NEW PROBLEM / 03</p><h1>What are you working on?</h1></header>
      <ProblemForm submitLabel="Save problem" onSubmit={handleSubmit} onCancel={() => navigate('/problems')} />
    </div>
  );
}
