export const NUM_OF_GUESSES_ALLOWED = 6;

// Mission Control flavor data. Purely for atmosphere - none of this
// is a live feed, it's generated to make the console feel "real".
export const MISSION_CALLSIGN = 'ARTEMIS-VII';
export const MISSION_ID = 'MC-2847-DELTA';
export const ORBIT_PARAMS = {
  altitude: '408.2 km',
  inclination: '51.6°',
  velocity: '7.66 km/s',
  period: '92.7 min',
};

export const CREW = [
  { name: 'Cmdr. R. Vasko', role: 'Commander' },
  { name: 'Lt. A. Okafor', role: 'Flight Engineer' },
  { name: 'Sp. J. Lindqvist', role: 'Mission Specialist' },
  { name: 'Dr. M. Chen', role: 'Payload Systems' },
];

// Crew members who "vote" on each guess submission, to simulate a
// multiplayer / consensus decision-making feel.
export const CREW_VOTERS = [
  'VASKO', 'OKAFOR', 'LINDQVIST', 'CHEN', 'AI-COPILOT',
];

// Pool of fake engineering fix / systems log lines, sampled after
// each guess to simulate real-time telemetry chatter.
export const ENGINEERING_LOG_POOL = [
  'Rerouting auxiliary power through bus B.',
  'Patched nav computer firmware to v4.12.1.',
  'Recalibrated star tracker alignment.',
  'Purged fuel line micro-bubbles, pressure nominal.',
  'Uplink handshake re-established with Deep Space Network.',
  'Thermal control loop stabilized at 21.4°C.',
  'Gyroscope drift compensated, delta 0.002°.',
  'Solar array tracking sun vector, +2% yield.',
  'Reaction wheel #3 desaturated successfully.',
  'Comms relay switched to backup transponder.',
  'Life support scrubbers cycled, CO2 nominal.',
  'Docking radar self-test passed.',
  'Telemetry packet loss corrected via FEC retry.',
  'Attitude control thrusters primed for correction burn.',
  'Backup flight computer synced with primary.',
];
