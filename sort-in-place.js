/*
7. Sort in place
Write an algorithm to shuffle an array into a random order in place 
(i.e., without creating a new array). 
*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

return array
}
console.log(shuffleArray([1, 18, 3, 19, 57, 2]))
