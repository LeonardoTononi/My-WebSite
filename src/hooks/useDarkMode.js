import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );

  const setMode = mode => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');
  }, []);

  return [theme, toggleTheme];
};
