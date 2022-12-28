// my solution
function likes(names) {

  switch(names.length) {
      case 0: return `no one likes this`;
      case 1: return `${names[0]} likes this`;
      case 2: return `${names[0]} and ${names[1]} like this`;
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  
}

console.log( likes(["Max", "John", "Mark"]) )

console.log( likes(["Alex", "Jacob", "Mark", "Max"]) )

// another solution (not mine) that I really enjoyed. gonna be considering object lookups
// rather than switch statements in the future.
function likes2(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}