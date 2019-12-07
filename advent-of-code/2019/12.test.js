import { getDistance, getPaths } from './12'
import input from './11-input'

describe('getPaths', () => {
    it('should get all the paths', () => {
        expect(getPaths('A)B', 'A)C', 'B)D', 'D)E')).toEqual({ "A": ["B", "C"], "B": ["A", "D"], "C": ["A"], "D": ["B", "E"], "E": ["D"] })
    })
})

describe('getDistance', () => {
    it('should should work for simple data', () => {
        const travel = getDistance('A)B', 'A)C', 'B)D', 'D)E')
        expect(travel('A', 'B')).toBe(0)
        expect(travel('A', 'D')).toBe(0)
        expect(travel('A', 'E')).toBe(1)
    })

    it('should work for example data', () => {
        const travel = getDistance(
            'COM)B',
            'B)C',
            'C)D',
            'D)E',
            'E)F',
            'B)G',
            'G)H',
            'D)I',
            'E)J',
            'J)K',
            'K)L',
            'K)YOU',
            'I)SAN',
        )
        expect(travel('YOU', 'SAN')).toBe(4)
    })

    it('should work for the actual data', () => {
        const travel = getDistance(...input)
        expect(travel('YOU', 'SAN')).toBe(388)
    })
})
