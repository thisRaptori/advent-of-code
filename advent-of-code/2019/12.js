export const getPaths = (...map) =>
  map.reduce((acc, cur) => {
    const [center, satellite] = cur.split(")");
    acc[center] = acc[center] || [];
    acc[satellite] = acc[satellite] || [];
    acc[center].push(satellite);
    acc[satellite].push(center);
    return acc;
  }, {});

const traverseChildren = (paths, current, target, distance, previous) => {
  const validPaths = paths[current].filter(next => next !== previous);

  if (!validPaths.length) {
    return false;
  }

  if (validPaths.includes(target)) {
    return distance;
  }

  return validPaths.reduce((acc, child) => {
    const childDistance = traverseChildren(
      paths,
      child,
      target,
      distance + 1,
      current
    );

    if (typeof acc !== "number") {
      return childDistance;
    }

    return typeof childDistance === "number"
      ? Math.min(acc, childDistance)
      : acc;
  }, false);
};

export const getDistance = (...map) => (start, finish) => {
  const paths = getPaths(...map);

  const totalDistance = traverseChildren(paths, start, finish, 1);

  return typeof totalDistance === "number"
    ? Math.max(0, totalDistance - 2)
    : false;
};
