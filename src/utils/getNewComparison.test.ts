import { isAlreadyCompared } from './getNewComparison'

describe('getNewComparison functions', () => {
    describe('isAlreadyCompared', () => {
        it('should return true when a comparison has already been made', () => {
            const madeComparisons = [[{id: 0}, {id: 1}], [{id: 3}, {id: 2}]]
            expect(isAlreadyCompared([{id: 0}, {id: 1}], madeComparisons)).toBeTruthy()
            expect(isAlreadyCompared([{id: 2}, {id: 3}], madeComparisons)).toBeTruthy()
        })

        it('should return false when a comparison hasn\'t been made', () => {
            const madeComparisons = [[{id: 0}, {id: 1}], [{id: 3}, {id: 2}]]
            expect(isAlreadyCompared([{id: 1}, {id: 2}], madeComparisons)).toBeFalsy()
        })
    })
})