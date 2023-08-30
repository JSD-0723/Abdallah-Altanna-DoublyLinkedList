const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // create push method
  push(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // create pop method
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }
    this.length--;
    return poppedNode;
  }

  // create shift method
  shift() {
    if (!this.head) return undefined;
    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.previous = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  // create unshift method
  unshift(value) {
    const newNode = new DoublyLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // create get method
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.previous;
      }
    }
    return current;
  }

  // create set method
  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  // create insert method
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);
    const newNode = new DoublyLinkedListNode(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.previous = prevNode;
    newNode.next = nextNode;
    nextNode.previous = newNode;
    this.length++;
    return true;
  }

  // create remove method
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const prevNode = removedNode.previous;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.previous = prevNode;
    removedNode.previous = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

module.exports = DoublyLinkedList;
