const m = 24 * 60;
const minRads = (2 * Math.PI) / m;
const radMins = m / (2 * Math.PI);

const a = createVec(convertMinToRad(60 * 2 + 30));
const b = createVec(convertMinToRad(60 * 2 + 30));

const difference = diff(a, b);
const differenceInMin = convertRadsToMin(difference);

console.log(differenceInMin);

function convertRadsToMin(angle) {
  return Math.round(angle * radMins);
}

function convertMinToRad(time) {
  return time * minRads;
}

function diff(u, v) {
  return Math.acos(
    (u.x * v.x + u.y * v.y) /
      (Math.sqrt(Math.pow(u.x, 2) + Math.pow(u.y, 2)) *
        Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2)))
  );
}

function createVec(theta) {
  return {
    x: Math.cos(theta),
    y: Math.sin(theta)
  };
}
