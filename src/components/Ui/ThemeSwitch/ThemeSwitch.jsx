import React from 'react';

import './ThemeSwitch.css';

const ThemeSwitch = ({ onToggleTheme }) => {
  return (
    <div className="theme-switch-wrapper">
      <label className="theme-switch">
        <input type="checkbox" />
        <div className="slider round" onClick={onToggleTheme}></div>
      </label>
    </div>
  );
};

export default ThemeSwitch;
