// "my" solution – pulled from stack overflow.
// i took a long time trying to break this apart and figure out how it works.
function count(string) {

  return string.split('').sort() // turn the string into an alphabetically sorted array
    .reduce( (acc, curr) => { // run a reduce function starting with an empty object
    return acc[curr] // if the character already exists in the object,
      ? ++acc[curr] // add 1 to the count
      : acc[curr] = 1, // otherwise it's the first instance, so set the count at 1
      acc // return the rest of the object as well.
  }, {})
}

console.log(
  count('ababc'), // expecting { a: 2, b: 2, c: 1 }
  count('abracadabra') // expecting { a: 5, b: 2, c: 1, d: 1, r: 2 }
)

// someone else's solution I appreciated
function count2(string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    // 👆 nice use of OR short-circuit to get either the character count or 0, then add 1
    return counts;
  },{});
}