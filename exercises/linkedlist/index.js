// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if(!this.head) {
            return this.head;
        }

        let node = this.head;
        while(node.next) {
            node = node.next
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if(this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if(!this.head) {
            this.head = null;
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head;
        let nextNode = node.next;

        while (nextNode.next) {
            node = nextNode;
            nextNode = nextNode.next;
        }

        node.next = null;
    }

    insertLast(data) {

        if(!this.head) {
            this.head = new Node(data)
            return;
        }

        let node = this.getLast()
        node.next = new Node(data)
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;

        while(node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }
}

module.exports = { Node, LinkedList }