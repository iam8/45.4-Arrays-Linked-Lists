const LinkedList = require("./linked-list");

describe("push", function() {
  it("appends node and increments length", function() {
    let lst = new LinkedList();

    lst.push(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.push(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.tail.val).toBe(10);

    lst.push(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.next.val).toBe(15);
    expect(lst.tail.val).toBe(15);
  });
});

describe("unshift", function() {
  it("adds node at start and increments length", function() {
    let lst = new LinkedList();

    lst.unshift(5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(10);
    expect(lst.length).toBe(2);
    expect(lst.head.val).toBe(10);
    expect(lst.head.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);

    lst.unshift(15);
    expect(lst.length).toBe(3);
    expect(lst.head.val).toBe(15);
    expect(lst.head.next.next.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });
});

describe("pop", function() {
  it("removes node at end and decrements length", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.pop()).toBe(10);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
    expect(lst.length).toBe(1);

    expect(lst.pop()).toBe(5);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });

  it("Throws an error if list is empty", () => {
    let list = new LinkedList();
    expect(() => list.pop()).toThrow();
  });
});

describe("shift", function() {
  it("removes node at start and decrements length", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.shift()).toBe(5);
    expect(lst.tail.val).toBe(10);
    expect(lst.length).toBe(1);

    expect(lst.shift()).toBe(10);
    expect(lst.tail).toBe(null);
    expect(lst.head).toBe(null);
    expect(lst.length).toBe(0);
  });

  it("Throws an error if list is empty", () => {
    let list = new LinkedList();
    expect(() => list.shift()).toThrow();
  });
});

describe("getAt", function() {
  it("gets val at index", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.getAt(0)).toBe(5);
    expect(lst.getAt(1)).toBe(10);
  });

  it("Throws an error if list is empty", () => {
    let list = new LinkedList();
    expect(() => list.getAt(0)).toThrow();
  });

  it("Throws an error if index is invalid", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    expect(() => list.getAt(-1)).toThrow();
    expect(() => list.getAt(4)).toThrow();
  });
});

describe("setAt", function() {
  it("sets val at index", function() {
    let lst = new LinkedList([5, 10]);

    expect(lst.setAt(0, 1));
    expect(lst.setAt(1, 2));
    expect(lst.head.val).toBe(1);
    expect(lst.head.next.val).toBe(2);
  });

  it("Throws an error if list is empty", () => {
    let list = new LinkedList();
    expect(() => list.setAt(0)).toThrow();
  });

  it("Throws an error if index is invalid", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    expect(() => list.setAt(-1, 22)).toThrow();
    expect(() => list.setAt(4, 22)).toThrow();
  });
});

describe("insertAt", function() {
  it("inserts node and adjusts nearby nodes", function() {
    let lst = new LinkedList([5, 10, 15, 20]);

    lst.insertAt(2, 12);
    expect(lst.length).toBe(5);
    expect(lst.head.val).toBe(5);
    expect(lst.head.next.val).toBe(10);
    expect(lst.head.next.next.val).toBe(12);
    expect(lst.head.next.next.next.val).toBe(15);
    expect(lst.head.next.next.next.next.val).toBe(20);

    lst.insertAt(5, 25);
    expect(lst.head.next.next.next.next.next.val).toBe(25);
    expect(lst.tail.val).toBe(25);

    lst.insertAt(0, 99);
    expect(lst.head.val).toEqual(99);
    expect(lst.head.next.val).toEqual(5);
  });

  it("inserts into empty list", function() {
    let lst = new LinkedList();

    lst.insertAt(0, 5);
    expect(lst.length).toBe(1);
    expect(lst.head.val).toBe(5);
    expect(lst.tail.val).toBe(5);
  });

  it("Throws an error if index is invalid", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    expect(() => list.insertAt(-1, 22)).toThrow();
    expect(() => list.insertAt(5, 22)).toThrow();
  });
});

describe("removeAt", function() {
  it("removes from 1-item list", function() {
    let lst = new LinkedList(["a"]);

    lst.removeAt(0);
    expect(lst.length).toBe(0);
    expect(lst.head).toBe(null);
    expect(lst.tail).toBe(null);
  });

  it("Removes from middle of list", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    list.removeAt(2);
    expect(list.length).toEqual(3);
    expect(list.head.val).toEqual(2);
    expect(list.head.next.val).toEqual(4);
    expect(list.head.next.next.val).toEqual(8);
    expect(list.tail.val).toEqual(8);
  })

  it("Removes from beginning of list", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    list.removeAt(0);
    expect(list.length).toEqual(3);
    expect(list.head.val).toEqual(4);
    expect(list.tail.val).toEqual(8);
  })

  it("Removes from end of list", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    list.removeAt(3);
    expect(list.length).toEqual(3);
    expect(list.head.val).toEqual(2);
    expect(list.tail.val).toEqual(6);
  })

  it("Throws an error if list is empty", () => {
    let list = new LinkedList();
    expect(() => list.removeAt(0)).toThrow();
  });

  it("Throws an error if index is invalid", () => {
    let list = new LinkedList([2, 4, 6, 8]);

    expect(() => list.removeAt(-1)).toThrow();
    expect(() => list.removeAt(4)).toThrow();
  });
});

describe("average", function() {
  it("calculates the average of items in a list", function() {
    let lst = new LinkedList([2, 3, 1, 1, 7, 6, 9]);
    expect(lst.average()).toBeCloseTo(4.1429, 4);
  });

  it("returns 0 for empty lists", function() {
    let lst = new LinkedList();
    expect(lst.average()).toBe(0);
  });
});
