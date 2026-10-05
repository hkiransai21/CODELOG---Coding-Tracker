import { useState, useEffect } from 'react';
import { loadJSON, saveJSON } from '../utils/storage';
// useState initialised from localStorage, synced back with useEffect.
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => loadJSON(key, initial));
  useEffect(() => { saveJSON(key, value); }, [key, value]);
  return [value, setValue];
}
