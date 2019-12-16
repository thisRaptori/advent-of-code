import { explore, next } from "./1";

const isChecked = ({ checked }) => Boolean(checked);
const getKey = location => JSON.stringify(location);
const getNext = (next, direction, location) => next[direction](...location);
const getLocation = (locations, location) => locations[getKey(location)];

function getAvailablePaths(locations, location) {
  const locationData = getLocation(locations, location);
  locationData.checked = true;

  return Object.entries(locationData)
    .filter(
      ([direction, content]) =>
        content !== "#" &&
        next[direction] &&
        !isChecked(getLocation(locations, getNext(next, direction, location)))
    )
    .map(([direction]) => getNext(next, direction, location));
}

export function fill(memory) {
  return explore(memory).then(({ locations, oxygenSystemLocation }) => {
    let count = -1; // start from -1 since we don't want to count the first iteration
    const queue = [oxygenSystemLocation];

    do {
      const paths = queue.length;
      for (let i = 0; i < paths; i++) {
        queue.push(...getAvailablePaths(locations, queue.shift()));
      }
      count++;
    } while (queue.length);

    return count;
  });
}
