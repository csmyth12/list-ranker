import { ListNode } from './ListNode'

export class DoublyLinkedList {
    private head: ListNode | null
    private length: number = 0

    constructor (head: any = null) {
        this.head = null
        if (!!head) {
            const headNode = new ListNode(head)
            this.head = headNode
            this.length++
        }
    }

    public size () {
        return this.length
    }

    public last () {
        let node: ListNode | undefined | null = this.head
        while(!!node && !!node.next) {
            node = node.next
        }
        return node!
    }

    public first () {
        return this.head!
    }

    public get (value: any) {
        if (!this.head) {
            throw new Error('No elements in list error')
        }
        let node: ListNode | undefined | null = this.head
        while(!!node) {
            if (node.value === value) {
                return node
            }
            node = node.next
        }
        return null
    }

    public getIndex (index: number) {
        if (!this.head) {
            throw new Error('No elements in list error')
        } else if (index > this.length || index < 0) {
            throw new Error('Index out of bounds error')
        }
        let node = this.head
        for(let i = 1; i <= index; i++) {
            node = node.next!
        }
        return node
    }

    public push (value: any) {
        if (!this.head) {
            const headNode = new ListNode(value)
            this.head = headNode
            this.length++
            return this
        }

        let tail = this.last()!
        const last = new ListNode(value)
        tail['next'] = last
        last.previous = tail

        this.length++
        return this
    }

    public pop (node: ListNode) {
        if (this.length === 1) {
            this.head = null
            this.length = 0
            return null
        }
        const previous = !!node.previous ? node.previous : undefined
        const next = !!node.next ? node.next : undefined
        if (!previous) {
            this.head = next!
            if (!!next) {
                next.previous = undefined
            }
        } else {
            previous.next = next
            if (!!next) {
                next.previous = previous
            }
        }
        this.length--
        return node.value
    }

    public insertNext (node: ListNode, toInsert: any) {
        const newNode = new ListNode(toInsert)
        const oldNext = node.next

        node.next = newNode
        newNode.previous = node
        if (oldNext) {
            oldNext.previous = newNode
            newNode.next = oldNext
        }

        this.length++
        return this
    }

    public insertPrevious (node: ListNode, toInsert: any) {
        const newNode = new ListNode(toInsert)
        const oldPrevious = node.previous
        if (!oldPrevious) {
            this.head = newNode
        } else {
            oldPrevious.next = newNode
            newNode.previous = oldPrevious
        }
        newNode.next = node
        node.previous = newNode

        this.length++
        return this
    }

    public swap (firstValue: any, secondValue: any) {
        if (!this.head) {
            throw new Error('No elements in list error')
        }

        if (this.length < 2) {
            throw new Error ('Not enough values to swap')
        }

        if (this.head.value === firstValue) {
            this.head.value = secondValue
            this.head.next!.value = firstValue
        } else {
            let node: ListNode | undefined = this.head
            while(node.value !== firstValue) {
                node = node.next!
            }
            if (!!node && !!node.next) {
                node.value = secondValue
                node.next.value = firstValue
            }
        }
    }

    public toArray () {
        const array = new Array(this.length)
        let index = 0
        let node = this.head
        while(!!node) {
            array[index] = node.value
            node = node.next!
            index++
        }
        return array
    }
}