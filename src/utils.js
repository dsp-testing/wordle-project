export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

// Deterministic-ish hash used to derive "telemetry" flavor numbers
// (SNR, confidence %, etc.) from a guess string, so the same guess
// always produces the same readout instead of flickering on re-render.
export const seededValue = (str, min = 0, max = 100) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const normalized = Math.abs(Math.sin(hash)) % 1;
  return Math.floor(min + normalized * (max - min));
};
