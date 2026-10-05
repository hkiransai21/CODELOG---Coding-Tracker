export const OPTIONS = {
  platforms: ['LeetCode', 'CodeChef', 'HackerRank', 'Codeforces', 'GeeksforGeeks', 'Other'],
  languages: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'Rust'],
  difficulties: ['Easy', 'Medium', 'Hard'],
  statuses: ['Not Started', 'In Progress', 'Completed'],
};
const required = { title: 'Enter a problem title.', platform: 'Choose a platform.', language: 'Choose a language.',
  difficulty: 'Choose a difficulty.', status: 'Choose a status.', topic: 'Enter a topic, e.g. Graphs.' };

export const validateProblem = (values) => {
  const errors = Object.entries(required).reduce((acc, [field, msg]) => {
    if (!String(values[field] ?? '').trim()) acc[field] = msg;
    return acc;
  }, {});
  if (!errors.title && values.title.trim().length < 3) errors.title = 'Title needs at least 3 characters.';
  if (values.notes?.length > 500) errors.notes = 'Notes are limited to 500 characters.';
  return errors;
};
