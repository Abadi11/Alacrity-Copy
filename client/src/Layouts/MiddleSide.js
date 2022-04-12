import React from 'react'
import data from '../data/data.json'

function MiddleSide() {
  return (
    <div className="middle-side-container">
      <div className="middle-side-right">
        <h3>Welcome Back name!</h3>
        <h3>
          <strong>You've got {data.length} Tasks</strong>
        </h3>
        <div className="nav_container">
          <ul className="nav_links">
            <li>
              <a href="#"> Today </a>
            </li>
            <li>
              <a href="#"> Tomorrow </a>
              <li>
                <a href="#"> Later </a>
              </li>
              <li>
                <a href="#"> Archived </a>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MiddleSide