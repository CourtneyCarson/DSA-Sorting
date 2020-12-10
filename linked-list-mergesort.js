/*
5. Sorting a linked list using merge sort
Given a Linked List, sort the linked list using merge sort. 
You will need your linked list class from previous lesson to 
create the list and use all of its supplemental functions to 
solve this problem.
*/

class _Node {
  constructor(value, next) {
    this.value = value; 
    this.next = next; 
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null);
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null);
  }
  // traverse to current item
  //create new node given the item 
  //change pointer of previous node to new node 
  // change pointer of the new node to point to the next one
  insertBefore(insertItem, target) {
    //if the list is empty or if target is the first
    if (!this.head || this.head.value === target) {
      this.insertFirst(insertItem);
      return;
    }
    // find the target
    // start at the head
    let currNode = this.head;
    // keep track of the previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== target) {
      // Save the previous node
      previousNode = currNode;
      // increment the current node
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log(`target item not found`);
      return;
    }
    // insert the new node by pointing previousNode.next to the insertItem and connecting the insertItem.next to currNode
    previousNode.next = new _Node(insertItem, currNode);
  }



  find(item) {
    //start at head
    let currNode = this.head;
    // if list is empty
    if (!this.head) {
      return null;
    }
    // check for the item
    while (currNode.value !== item) {
      /* return null if not end of list and item not on list */
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }
  remove(item) {
    // if list empty
    if (!this.head) {
      return null;
    }
    // if node to be removed is head, make next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}


//// drills ////

const list = new LinkedList; 

list.insertFirst(8)
list.insertFirst(27)
list.insertFirst(58)
list.insertFirst(2)
list.insertFirst(8)
list.insertFirst(63)
list.insertFirst(1)
list.insertFirst(29)
list.insertFirst(85)

function mergeSort(list) {
  
}









// console.log(mergeSort([
//   89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33,
//   45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16,
//   85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26,
//   38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39,
//   42, 51, 54, 84, 34, 53, 78, 40, 14, 5
// ]))