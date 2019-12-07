import { compute } from './9'
import input from './9-input'

describe('compute', () => {
    it('should work for identity instructions', () => {
        const input = {}
        const identity = compute(3, 0, 4, 0, 99)
        expect(identity(input)).toBe(input)
    })

    it('should work for multiply operation', () => {
        const multiplyThenExit = compute(1002, 4, 3, 4, 33)
        expect(multiplyThenExit()).toEqual([1002, 4, 3, 4, 99])
    })

    it('should work with negative inputs', () => {
        const doStuff = compute(1101, 100, -1, 4, 0)
        expect(doStuff()).toEqual([1101, 100, -1, 4, 99])
    })

    it('should work for the actual input', () => {
        const doStuff = compute(...input)
        expect(doStuff(1)).toEqual(13294380)
    })
})
