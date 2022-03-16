import React from 'react';
import Logo from '../img/new_log_svg.svg';
import AnalyticsLogo from "../img/pie-chart-24.png";
import SettingsLogo from '../img/settings-24.png';

function LeftSide() {
  return (
    <div className="left-side-container">
      <p>leftSide</p>
      <div className="img-logo-container">
        <img src={Logo} alt="Alacrity-Logo" />
      </div>
      <div className="bar-container">
        <img src={AnalyticsLogo} alt="Analytics-Logo" className="topic-logo" />
        <h3>Analytics</h3>
      </div>
      <div className="bar-container">
        <img src={SettingsLogo} alt="Settings-Logo" className="topic-logo" />
        <h3>Settings</h3>
      </div>
    </div>
  );
}

export default LeftSide