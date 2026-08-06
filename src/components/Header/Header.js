import React from 'react';
import {
  MISSION_CALLSIGN,
  MISSION_ID,
  ORBIT_PARAMS,
  CREW,
} from '../../constants';

function Header() {
  return (
    <header className="mission-header">
      <div className="mission-header-top">
        <h1>Mission Control</h1>
        <span className="mission-badge">CALLSIGN {MISSION_CALLSIGN}</span>
      </div>
      <div className="mission-briefing">
        <div className="briefing-block">
          <span className="briefing-label">Mission ID</span>
          <span className="briefing-value">{MISSION_ID}</span>
        </div>
        <div className="briefing-block">
          <span className="briefing-label">Altitude</span>
          <span className="briefing-value">{ORBIT_PARAMS.altitude}</span>
        </div>
        <div className="briefing-block">
          <span className="briefing-label">Inclination</span>
          <span className="briefing-value">{ORBIT_PARAMS.inclination}</span>
        </div>
        <div className="briefing-block">
          <span className="briefing-label">Velocity</span>
          <span className="briefing-value">{ORBIT_PARAMS.velocity}</span>
        </div>
        <div className="briefing-block">
          <span className="briefing-label">Orbital Period</span>
          <span className="briefing-value">{ORBIT_PARAMS.period}</span>
        </div>
      </div>
      <div className="crew-manifest">
        <span className="briefing-label">Crew Manifest</span>
        <ul>
          {CREW.map((member) => (
            <li key={member.name}>
              <strong>{member.name}</strong> &mdash; {member.role}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
