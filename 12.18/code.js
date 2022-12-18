const input1 = [1, 2, 3, 4, 5] // expected output: [2, 3, 4, 5]
const input2 = [2, 2, 1, 2, 1] // expected output: [2, 2, 2, 1]
const input3 = [] // expected output: []


// My solution:
function myRemoveSmallest(input) {

  // find smallest value in array
  const smallest = input.reduce((a,b) => { return a < b ? a : b }, input)
  
  // set removal condition
  var first = true;
  
  // return filtered array
  return input.filter(el => {
    
    // if the smallest element is the first occurrence of the smallest element,
    // filter it out of the array
    if (el == smallest && first) {
      first = false;
      return;
      
    // otherwise, leave it in the array
    } else return el;
  });
  
}

// My favorite solution from pwynn:
function otherRemoveSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(
  myRemoveSmallest(input1),
  myRemoveSmallest(input2),
  myRemoveSmallest(input3)
)