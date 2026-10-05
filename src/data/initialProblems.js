const d = (day) => `2026-09-${String(day).padStart(2, '0')}`;
const p = (id, title, platform, language, difficulty, status, topic, dateAdded, notes = '') =>
  ({ id: `p${id}`, num: id, title, platform, language, difficulty, status, topic, notes, dateAdded });

export const initialProblems = [
  p(1, 'Two Sum', 'LeetCode', 'C++', 'Easy', 'Completed', 'Hash Map', d(2), 'Store complements in an unordered_map.'),
  p(2, 'Valid Parentheses', 'LeetCode', 'Java', 'Easy', 'Completed', 'Stack', d(5)),
  p(3, 'Climbing Stairs', 'GeeksforGeeks', 'Python', 'Easy', 'Completed', 'Dynamic Programming', d(8)),
  p(4, 'Binary Search', 'LeetCode', 'Python', 'Medium', 'In Progress', 'Searching', d(12), 'Off-by-one on the right bound.'),
  p(5, 'Maximum Subarray', 'HackerRank', 'JavaScript', 'Medium', 'Completed', 'Kadane', d(15)),
  p(6, 'Merge Intervals', 'LeetCode', 'TypeScript', 'Medium', 'Completed', 'Sorting', d(19)),
  p(7, 'Reverse Linked List', 'CodeChef', 'C', 'Easy', 'Completed', 'Linked List', d(22)),
  p(8, 'Longest Substring Without Repeating Characters', 'LeetCode', 'Go', 'Medium', 'In Progress', 'Sliding Window', d(25)),
  p(9, 'Number of Islands', 'Codeforces', 'Rust', 'Medium', 'Not Started', 'Graphs', d(27)),
  p(10, 'LRU Cache', 'LeetCode', 'Java', 'Hard', 'In Progress', 'Design', d(29), 'HashMap + doubly linked list.'),
  p(11, 'Median of Two Sorted Arrays', 'LeetCode', 'C++', 'Hard', 'Not Started', 'Binary Search', d(30)),
];
