import { DoublyLinkedList } from './DoublyLinkedList'

describe('DoublyLinkedList', () => {
    it('should init with a head', () => {
        let list = new DoublyLinkedList('test')
        expect(list.size()).toEqual(1)
        expect(list.first()).toHaveValue('test')
        expect(list.first().next).toBeUndefined()
        expect(list.first().previous).toBeUndefined()
        expect(list.last()).toHaveValue('test')
    })

    it('should init without a head', () => {
        let list = new DoublyLinkedList()
        expect(list.size()).toEqual(0)
        expect(list.first()).toBeNull()
    })

    it('should allow pushing of new values', () => {
        let list = new DoublyLinkedList()
        expect(list.size()).toEqual(0)
        expect(list.last()).toBeNull()
        list.push('test1')
        expect(list.size()).toEqual(1)
        expect(list.first()).toHaveValue('test1')
        expect(list.last()).toHaveValue('test1')
        list.push('test2')
        expect(list.size()).toEqual(2)
        expect(list.first()).toHaveValue('test1')
        expect(list.last()).toHaveValue('test2')
    })

    it('should have a size', () => {
        let list = new DoublyLinkedList('test1')
        expect(list.size()).toEqual(1)
        list.push('test2')
        expect(list.size()).toEqual(2)
    })

    describe('get', () => {
        let list: DoublyLinkedList

        beforeEach(() => {
            list = new DoublyLinkedList('test1')
            list.push('test3')
            list.push('test4')
        })

        it('should get a node that exists', () => {
            const getNode = list.get('test3')
            expect(getNode).toHaveValue('test3')
        })

        it('should not get a node that doesn\'t exist', () => {
            const getNode = list.get('test2')
            expect(getNode).toBeNull()
        })

        it('should throw an error if linked list hasn\'t been defined yet', () => {
            let emptyList = new DoublyLinkedList()
            try {
                emptyList.get('test1')
            } catch (e: any) {
                expect(e.message).toEqual('No elements in list error')
            }
        })
    })
    
    describe('getIndex', () => {
        let list: DoublyLinkedList

        beforeEach(() => {
            list = new DoublyLinkedList('test1')
            list.push('test2')
            list.push('test3')
        })

        it('should return the node at index', () => {
            expect(list.getIndex(0)).toHaveValue('test1')
            expect(list.getIndex(1)).toHaveValue('test2')
            expect(list.getIndex(2)).toHaveValue('test3')
        })

        it('should throw an error if index is out of bounds', () => {
            try {
                list.getIndex(-1)
            } catch (e: any) {
                expect(e.message).toEqual('Index out of bounds error')
            }
            try {
                list.getIndex(100)
            } catch (e: any) {
                expect(e.message).toEqual('Index out of bounds error')
            }
        })

        it('should throw an error if list is undefined', () => {
            let emptyList = new DoublyLinkedList()
            try {
                emptyList.getIndex(0)
            } catch (e: any) {
                expect(e.message).toEqual('No elements in list error')
            }
        })
    })
    

    describe('insert', () => {
        let list: DoublyLinkedList

        beforeEach(() => {
            list = new DoublyLinkedList('test1')
            list.push('test3')
            list.push('test5') 
        })

        it('next should add to the last index when node passed is the end of the list', () => {
            const node = list.last()

            list.insertNext(node, 'test6')

            expect(list.size()).toEqual(4)
            expect(list.last()).toHaveValue('test6')
            expect(list.last().previous!).toHaveValue('test5')
            expect(list.last().next).toBeUndefined()
        })

        it('next should add to the middle of the list', () => {
            const node = list.get('test3')!

            list.insertNext(node, 'test4')

            expect(list.size()).toEqual(4)
            expect(list.get('test3')?.next).toHaveValue('test4')
            expect(list.get('test5')?.previous).toHaveValue('test4')
        })

        it('previous should add to the middle of the list', () => {
            const node = list.get('test3')!
            list.insertPrevious(node, 'test2')

            expect(list.size()).toEqual(4)
            expect(list.get('test1')?.next).toHaveValue('test2')
            expect(list.get('test3')?.previous).toHaveValue('test2')
        })

        it('previous should define a new head when inserting before old head', () => {
            const node = list.first()
            list.insertPrevious(node, 'test0')
            
            expect(list.size()).toEqual(4)
            expect(list.first()).toHaveValue('test0')
            expect(list.get('test1')?.previous).toHaveValue('test0')
        })
    })

    describe('pop', () => {
        let list: DoublyLinkedList

        beforeEach(() => {
            list = new DoublyLinkedList('test1')
            list.push('test2')
            list.push('test3') 
        })

        it('should remove the head', () => {
            list.pop(list.first())
            expect(list.size()).toEqual(2)
            expect(list.first()).toHaveValue('test2')
            expect(list.first().previous).toBeUndefined()
        })

        it('should remove a middle element', () => {
            list.pop(list.get('test2')!)
            expect(list.size()).toEqual(2)
            expect(list.first().next).toHaveValue('test3')
            expect(list.getIndex(1)).toHaveValue('test3')
        })

        it('should remove the last element', () => {
            list.pop(list.last())
            expect(list.size()).toEqual(2)
            expect(list.last()).toHaveValue('test2')
            expect(list.last().next).toBeUndefined()
        })
    })

    it('should return an array on toArray', () => {
        let list = new DoublyLinkedList('test1')
        list.push('test3')
        list.push('test5')

        const expectedArray = ['test1', 'test3', 'test5']

        const array = list.toArray()

        expect(array).toHaveLength(3)
        expect(array).toEqual(expectedArray)
    })
})