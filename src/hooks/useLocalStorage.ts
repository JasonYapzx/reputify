import { useEffect, useState } from 'react';

function useLocalStorage(key: string, initialValue: any) {

  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue; // Return initial value during SSR
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error accessing localStorage', error);
      return initialValue;
    }
  });

  const setValue = (value: any | ((val: any) => any)) => {
    try {
      // If value is a function, evaluate it to get the new value
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage value', error);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Sync localStorage with the state when key changes
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;