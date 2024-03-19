import { RankerOption } from '@/types/RankerOption';
import { DoublyLinkedList } from './DoublyLinkedList';

export function isAlreadyCompared (comparison: Partial<RankerOption>[], madeComparisons: Partial<RankerOption>[][] ): boolean {
    return madeComparisons.findIndex((madeComparison) => {
        const index = madeComparison.findIndex((option) => option.id === comparison[0].id)
        if (index > -1) {
            return madeComparison[(index + 1) % 2].id === comparison[1].id
       }
       return false
    }) > -1
}