import { useState, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Dashboard from './pages/Dashboard';
import Problems from './pages/Problems';
import AddProblem from './pages/AddProblem';
import EditProblem from './pages/EditProblem';
import useProblems from './hooks/useProblems';

export default function App() {
  const store = useProblems();
  const [toast, setToast] = useState('');
  const notify = useCallback((msg) => setToast(msg), []);
  return (
    <>
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard problems={store.problems} stats={store.stats} />} />
          <Route path="/problems" element={<Problems problems={store.problems} onDelete={store.deleteProblem} notify={notify} />} />
          <Route path="/add" element={<AddProblem onAdd={store.addProblem} notify={notify} />} />
          <Route path="/edit/:id" element={<EditProblem problems={store.problems} onUpdate={store.updateProblem} notify={notify} />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
      <footer className="footer mono"><span>CODELOG</span><span>Your coding progress, without the noise.</span></footer>
      <Toast message={toast} onDone={() => setToast('')} />
    </>
  );
}
