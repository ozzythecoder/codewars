// MY SOLUTION
function isIsogram(string) {
  return string
    .toUpperCase() // ignore case
    .split('') // split into iterable array
    .every((letter, index, array)=> {
      // if current character is final occurrence of itself, then it does not repeat
      return array.lastIndexOf(letter) === index;
    })
}

console.log(
  isIsogram("Dermatoglyphics"),
  isIsogram("isogram"),
  isIsogram("aba"),
  isIsogram("moOse"),
  isIsogram("isIsogram"),
  isIsogram("")
) // expecting true, true, false, false, false, true


// Another solution (not mine) that I really liked
function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}