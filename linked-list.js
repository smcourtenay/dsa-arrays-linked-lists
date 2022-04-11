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

  getAt(idx) {
    if (idx > this.length) throw "Error: Invalid index.";

    let current = this.head;

    let counter = 0;

    while (counter < idx) {
      current = current.next;
      counter++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx > this.length) throw "Error: Invalid index.";

    let current = this.head;

    let counter = 0;

    while (counter < idx) {
      current = current.next;
      counter++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) throw "Error: Invalid index.";

    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return undefined;
    }

    let current = this.head;

    let counter = 0;

    // Stop one position before index
    while (counter < idx - 1) {
      current = current.next;
      counter++;
    }

    const nextNode = current.next;

    current.next = newNode;

    newNode.next = nextNode;

    if (idx === this.length) {
      this.tail = newNode;
    }
    this.length++;

    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || this.length === 0) throw "Error: Invalid index.";

    let current = this.head;
    let counter = 0;

    if (this.length === 1) {
      const removedValue = current.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedValue;
    }

    while (counter < idx - 1) { // Node before desired index
      current = current.next;
      counter++;
    }
    
    const removedValue = current.next.val;
    
    // If target Node is tail
    if (current.next.next === null){
      this.tail = current;
      current.next = null;
      this.length--;
      return removedValue;
    }

    current.next = current.next.next;

    this.length--;
    return removedValue;
    
  }

  /** average(): return an average of all values in the list */

  average() {

    if (this.length === 0) return 0;

    let sum = 0;

    let current = this.head;
    let counter = 0;

    while (counter < this.length) { 
      sum += current.val
      current = current.next;
      counter++;
    }

    return sum/this.length;
  }
}

module.exports = LinkedList;
