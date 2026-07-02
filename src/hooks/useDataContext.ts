import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

/**
 * useDataContext - Custom hook to easily access the DataContext
 *
 * @returns The DataContext value
 * @throws Error if used outside of DataProvider
 */
export function useDataContext() {
  const context = useContext(DataContext);
  
  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  
  return context;
}

/**
 * Selector hooks for specific data parts (optimized re-renders)
 */
export function usePeople() {
  return useDataContext().people;
}

export function useTasksData() {
  return useDataContext().tasksData;
}

export function useInvoicesData() {
  return useDataContext().invoicesData;
}

export function useActivity() {
  return useDataContext().activity;
}
