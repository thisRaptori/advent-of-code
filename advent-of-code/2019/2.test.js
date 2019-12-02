import { countFuel } from './2'
import input from './1-input'

describe('countFuel', () => {
    it('should pass examples', () => {
        expect(countFuel(14)).toBe(2)
        expect(countFuel(1969)).toBe(966)
        expect(countFuel(100756)).toBe(50346)
    })

    it('should add numbers', () => {
        expect(countFuel(14, 1969, 100756)).toBe(2 + 966 + 50346)
    })

    it('should print the actual result', () => {
        expect(countFuel(...input)).toBe(5079140)
    })
})