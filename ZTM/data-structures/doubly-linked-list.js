// IMP: Visualization Tool: https://visualgo.net/en/list

// CODE
const node = (value) => ({ prev: null, value: value, next: null });

class DoublyLinkedList {
  constructor(value) {
    this.head = node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index <= 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    // How is this.head automatically updated here??
    this.length++;
  }

  remove(index) {
    if (index <= 0) {
      return (this.head = this.head.next);
    }
    if (index >= this.length) {
      return this.remove(this.length - 1);
    }
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    unwantedNode.next.prev = leader;
    this.length--;
  }

  traverseToIndex(index) {
    let i = 0;
    let currentNode = this.head;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log("first", myLinkedList);
console.log(myLinkedList.printList());
// 3 --> 10 --> 99 --> 5 --> 16
