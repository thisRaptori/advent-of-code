export function walkPath(path) {
  return path.reduce(
    (acc, cur) => {
      const direction = cur.substring(0, 1);
      const distance = parseInt(cur.substring(1));

      for (let i = 0; i < distance; i++) {
        switch (direction) {
          case "U":
            acc.position[1] += 1;
            break;

          case "D":
            acc.position[1] -= 1;
            break;

          case "R":
            acc.position[0] += 1;
            break;

          case "L":
            acc.position[0] -= 1;
            break;
        }

        acc.step++;
        acc.visited[JSON.stringify(acc.position)] = acc.step;
      }

      return acc;
    },
    {
      visited: {},
      position: [0, 0],
      step: 0
    }
  ).visited;
}

export function findIntersections(a, b) {
  const aVisited = walkPath(a);
  const bVisited = walkPath(b);

  return Object.keys(bVisited)
    .filter(position => aVisited[position])
    .reduce((acc, cur) => {
      acc[cur] = aVisited[cur] + bVisited[cur];
      return acc;
    }, {});
}

function findDistance(position) {
  return Math.abs(position[0]) + Math.abs(position[1]);
}

export function findClosestIntersection(a, b) {
  const intersections = findIntersections(a, b);
  const intersectionPoints = Object.keys(intersections);

  return intersectionPoints.reduce(
    (prev, intersection) => {
      const distance = intersections[intersection];
      if (distance < prev.distance) {
        return {
          intersection,
          distance
        };
      }

      return prev;
    },
    { distance: Infinity }
  ).distance;
}
