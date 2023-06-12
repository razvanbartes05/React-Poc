import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import './ThemeApp.css';

// Create a context for the theme
const ThemeContext = createContext();

// Component that will provide the theme
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Component that uses the theme
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`theme-toggle ${theme}`}>
      <h2>Theme Toggle</h2>
      <button className="toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

// App component
function ThemeApp() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default ThemeApp;
