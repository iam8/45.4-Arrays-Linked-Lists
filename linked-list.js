
/** Node: node for a singly linked list. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


/** LinkedList: chained together nodes. */
class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }

    /** unshift(val): add new value to start of list. */
    unshift(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    /** pop(): return & remove last item. */
    pop() {

    }

    /** shift(): return & remove first item. */
    shift() {

    }

    /** getAt(idx): get val at idx. */
    getAt(idx) {

    }

    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {

    }

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {

    }

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {

    }

    /** average(): return an average of all values in the list */
    average() {

    }
}


module.exports = LinkedList;
