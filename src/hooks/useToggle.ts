import { useState, useCallback } from 'react';

/**
 * useToggle - A custom hook to handle boolean toggle state
 *
 * @param initialValue - Initial boolean value (default: false)
 * @returns {[boolean, () => void, () => void, () => void} [value, toggle, setTrue, setFalse]
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  
  const toggle = useCallback(() => setValue(prev => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  
  return [value, toggle, setTrue, setFalse] as const;
}
