// This one hurt my brain. Tried working it out with loops,
// but regex ended up feeling like the easiest way.

function reverseWords(str) {
  
  // Get string as an array of words and spaces
  return str.match( /(\s|[^\s]+)/g ).map(el => {
    // return each element as a space if it is a space,
    // or as a reversed word, if it is a word
    return el.match( /\s/g ) ? el : el.split('').reverse().join('')
  }) // then join it all together.
    .join('')
}

console.log(
  reverseWords('This is an example!')
)