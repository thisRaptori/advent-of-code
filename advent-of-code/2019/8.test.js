import { checkNumber, validatePassword } from './8'

describe('validatePassword', () => {
    it('should work with example data', () => {
        expect(validatePassword('112233')).toBe(true)
        expect(validatePassword('123444')).toBe(false)
        expect(validatePassword('111122')).toBe(true)
    })
})

describe('checkNumber', () => {
    it('should return the correct answer', () => {
        expect(checkNumber(134792, 675810)).toBe(1319)
    })
})