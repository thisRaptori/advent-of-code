import { checkNumber, validatePassword } from './7'

describe('validatePassword', () => {
    it('should work with example data', () => {
        expect(validatePassword('111111')).toBe(true)
        expect(validatePassword('223450')).toBe(false)
        expect(validatePassword('123789')).toBe(false)
    })
})

describe('checkNumber', () => {
    it('should return the correct answer', () => {
        expect(checkNumber(134792, 675810)).toBe(1955)
    })
})