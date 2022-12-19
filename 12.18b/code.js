function isValidWalk(walk) {
  // define starting point
  let [x, y] = [0, 0]
  
  // define possible movements
  const directions = {
    'n': () => { y += 1 },
    's': () => { y -= 1 },
    'w': () => { x += 1 },
    'e': () => { x -= 1 }
  }

  // walk each block
  for (let block of walk) {
    directions[block]()
  }

  // return true if the walk was 10 blocks, and we arrived back where we started
  return x === 0 && y === 0 && walk.length === 10;
}

console.log(
  isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
)
