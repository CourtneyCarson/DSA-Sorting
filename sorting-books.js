/* 
8. Sorting books
Imagine that I gave you 20 books to sort in alphabetical order. 
Express this as an algorithm and then implement your algorithm.
*/


const booksUnordered = ['f', 'c', 'b', 'd', 'a', 'e'];
const books = ['a', 'b', 'c', 'd', 'e', 'f'];


function orderBooks(array) {
  // temp placeholder
  let temp;
  //loop through array
  for (let i = 0; i < array.length; i++) {
    //loop through array ahead of i 
    for (let j = i + 1; j < array.length; j++) {
      // compare values
      if (array[i] > array[j]) {
        //store greater value in temp
        temp = array[i];
        //swap values
        array[i] = array[j];
        //store next value in temp
        array[j] = temp;
      }

    }
  }
  return array;
}
console.log(orderBooks(booksUnordered));