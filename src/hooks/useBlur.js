import { useEffect, useRef } from 'react';

export function useBlur(callback, ignoredClass) {
  const ref = useRef(null);

  const handleBlur = (e) => {
    if (ref.current && !ref.current.contains(e.target) && !e.target.closest(`.${ignoredClass}`)) {
      callback();
    } else {
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleBlur);
    return () => {
      document.removeEventListener('mousedown', handleBlur);
    };
  }, []);

  return ref;
}
