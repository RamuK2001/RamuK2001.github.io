import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white/70"
      title="Toggle Dark Mode"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5 text-blue-200" aria-hidden="true" />
      )}
    </button>
  );
}
