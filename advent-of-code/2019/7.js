export function validatePassword(password) {
    const digits = password.split('').map(n => parseInt(n, 10))
    let hasDouble = false

    for (let i = 1; i < digits.length; i++) {
        if (digits[i - 1] > digits[i]) {
            return false;
        }

        if (digits[i - 1] === digits[i]) {
            hasDouble = true
        }
    }

    return hasDouble
}

export function checkNumber(start, end) {
    let possiblePasswords = 0

    for (let i = start; i <= end; i++) {
        if (validatePassword(i.toString())) {
            possiblePasswords++;
        }
    }

    return possiblePasswords
}