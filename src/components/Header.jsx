import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header>
      <h1>دليل غيث الشامل (Ghayth-Ultimate-Toolkit)</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}

export default Header;
