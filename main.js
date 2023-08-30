const DoublyLinkedList = require('./DoublyLinkedList');

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);

list.pop();
list.shift();
list.unshift(0);
console.log(list.get(3).value);
list.set(3, 10);
list.insert(3, 10);
list.remove(3);
