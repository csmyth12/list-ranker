import '@testing-library/jest-dom'

expect.extend({
    //@ts-ignore
    toHaveValue(actual, expected) {
        if (!actual || !actual.value) {
            throw new Error(`${actual} must be a ListNode`)
        }

        const pass = actual.value === expected

        return {
            pass,
            message: `Expected ${actual} to equal ${expected}`
        }
    },
})
