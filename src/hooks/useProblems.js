import { useCallback, useMemo } from 'react';
import useLocalStorage from './useLocalStorage';
import { initialProblems } from '../data/initialProblems';
import { calculateStats, today } from '../utils/problemUtils';

export default function useProblems() {
  const [problems, setProblems] = useLocalStorage('codelog.problems.v1', initialProblems);
  const stats = useMemo(() => calculateStats(problems), [problems]);

  const addProblem = useCallback((values) => {
    setProblems((prev) => {
      const num = prev.reduce((max, p) => Math.max(max, p.num ?? 0), 0) + 1;
      return [...prev, { ...values, title: values.title.trim(), topic: values.topic.trim(), id: `p${Date.now()}`, num, dateAdded: today() }];
    });
  }, [setProblems]);
  const updateProblem = useCallback((id, values) =>
    setProblems((prev) => prev.map((p) => (p.id === id ? { ...p, ...values, title: values.title.trim(), topic: values.topic.trim() } : p))), [setProblems]);
  const deleteProblem = useCallback((id) => setProblems((prev) => prev.filter((p) => p.id !== id)), [setProblems]);

  return { problems, stats, addProblem, updateProblem, deleteProblem };
}
