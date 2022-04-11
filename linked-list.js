"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.tail === null) throw "Error: List empty";
    const removeVal = this.tail.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeVal;
    }

    let current = this.head;
    let nextVal = current.next;

    while (current !== null) {
      if (nextVal.next === null) {
        this.tail = current;
        current.next = null;
      }
      current = current.next;
    }
    this.length--;
    return removeVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.tail === null) throw "Error: List empty";
    const removeVal = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removeVal;
    }
    
    this.head = this.head.next;
    this.length--;
    return removeVal;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
