
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
        if (!this.length) {
            throw new Error("List is empty - item cannot be removed!");
        }

        // Special case of list length 1
        if (this.length === 1) {
            const tail = this.tail;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return tail.val;
        }

        const tail = this.tail;

        // Iterate through list to set new tail
        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next;
        }

        curr.next = null;
        this.tail = curr;

        this.length--;
        return tail.val;
    }

    /** shift(): return & remove first item. */
    shift() {
        if (!this.length) {
            throw new Error("List is empty - item cannot be removed!");
        }

        // Special case of list length 1
        if (this.length === 1) {
            const head = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return head.val;
        }

        const oldHead = this.head;
        this.head = oldHead.next;
        oldHead.next = null;
        this.length--;

        return oldHead.val;
    }

    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (!this.length) {
            throw new Error("List is empty!");
        }

        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index!");
        }

        let currNode = this.head;
        let currIdx = 0;
        while (currIdx < idx) {
            currNode = currNode.next;
            currIdx++;
        }

        return currNode.val;
    }

    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (!this.length) {
            throw new Error("List is empty!");
        }

        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index!");
        }

        // Reach node at the sought index
        let currNode = this.head;
        let currIdx = 0;
        while (currIdx < idx) {
            currNode = currNode.next;
            currIdx++;
        }

        currNode.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx < 0 || idx > this.length) {
            throw new Error("Invalid index!");
        }

        if (idx === 0) return this.unshift(val);
        if (idx === this.length) return this.push(val);

        // Reach node at index before sought index
        let currNode = this.head;
        let currIdx = 0;
        while (currIdx < idx - 1) {
            currNode = currNode.next;
            currIdx++;
        }

        const beforeIdx = currNode;
        const atIdx = currNode.next;

        // Insert node
        const newNode = new Node(val);
        beforeIdx.next = newNode;
        newNode.next = atIdx;

        this.length++;
    }

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (!this.length) {
            throw new Error("List is empty!");
        }

        if (idx < 0 || idx >= this.length) {
            throw new Error("Invalid index!");
        }

        if (this.length === 1 || idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        // Reach node at index before sought index
        let currNode = this.head;
        let currIdx = 0;
        while (currIdx < idx - 1) {
            currNode = currNode.next;
            currIdx++;
        }

        const beforeIdx = currNode;
        const atIdx = currNode.next;

        // 'Cut out' node at sought index
        beforeIdx.next = atIdx.next;
        atIdx.next = null;

        this.length--;
        return atIdx.val;
    }

    /** average(): return an average of all values in the list */
    average() {
        if (!this.length) return 0;

        let sum = 0;
        let curr = this.head;
        while (curr) {
            sum += curr.val;
            curr = curr.next;
        }

        return sum / this.length;
    }
}


module.exports = LinkedList;
