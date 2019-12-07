function getDirections(...map) {
    return map.reduce((acc, cur) => {
        const [center, satellite] = cur.split(')')
        acc[satellite] = center
        return acc
    }, {})
}

function getDistance(distances, graph, key) {
    if (!graph[key]) {
        distances[key] = 0
    }

    if (typeof distances[key] === 'undefined') {
        distances[key] = getDistance(distances, graph, graph[key]) + 1
    }

    return distances[key]
}

export function countOrbits(...map) {
    const distances = {}
    const directions = getDirections(...map)

    const totals = Object.keys(directions).reduce(
        (acc, key) => (acc += getDistance(distances, directions, key)),
        0
    )

    return totals
}
