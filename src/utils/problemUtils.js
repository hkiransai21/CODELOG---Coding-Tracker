const RANK = { Easy: 1, Medium: 2, Hard: 3 };
export const formatId = (num) => `#${String(num).padStart(3, '0')}`;
export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
export const today = () => new Date().toISOString().slice(0, 10);

const countBy = (list, key, values) =>
  values.reduce((acc, v) => ({ ...acc, [v]: list.filter((p) => p[key] === v).length }), {});

export const calculateStats = (problems) => {
  const total = problems.length;
  const byStatus = countBy(problems, 'status', ['Completed', 'In Progress', 'Not Started']);
  const byDifficulty = countBy(problems, 'difficulty', ['Easy', 'Medium', 'Hard']);
  const completionRate = total === 0 ? 0 : Math.round((byStatus.Completed / total) * 100);
  return { total, byStatus, byDifficulty, completionRate };
};

export const DEFAULT_FILTERS = { query: '', difficulty: 'All', status: 'All', language: 'All', platform: 'All', sort: 'newest' };

export const applyFilters = (problems, { query, difficulty, status, language, platform, sort }) => {
  const q = query.trim().toLowerCase();
  const matches = problems.filter((p) =>
    (!q || [p.title, p.platform, p.language, p.topic].some((f) => f.toLowerCase().includes(q))) &&
    (difficulty === 'All' || p.difficulty === difficulty) &&
    (status === 'All' || p.status === status) &&
    (language === 'All' || p.language === language) &&
    (platform === 'All' || p.platform === platform));
  const sorters = {
    newest: (a, b) => b.dateAdded.localeCompare(a.dateAdded) || b.num - a.num,
    oldest: (a, b) => a.dateAdded.localeCompare(b.dateAdded) || a.num - b.num,
    title: (a, b) => a.title.localeCompare(b.title),
    difficulty: (a, b) => RANK[a.difficulty] - RANK[b.difficulty],
  };
  return [...matches].sort(sorters[sort]);
};
