let grid = [
  [1,0,1,0],
  [0,1,0,0],
  [0,1,0,0],
]

const width = grid[0].length
const height = grid.length

const anyZerosLeft = () => {
  let result = false
  for (h = 0; h < height; h++) {
    if (grid[h].some(item => item === 0)) {
      result = true
    }
  }
  return result
}

const checkTwoAdjacent = (i, j) => {

  let adjacent = 0;

  // check down
  if (i < height-1 && grid[i+1][j] === 1) adjacent++

  // check up
  if (i > 0 && grid[i-1][j] === 1) adjacent++

  // check right
  if (j < width-1 && grid[i][j+1] === 1) adjacent++

  // check left
  if (j > 0 && grid[i][j-1] === 1) adjacent++

  return adjacent > 1
}

const runGrid = (grid) => {
  let improvementFound = true

  while(anyZerosLeft() && improvementFound) {
    improvementFound = false

    for (i = 0; i < height; i++) {
      for (j = 0; j < width; j++) {
        if (grid[i][j] === 1) continue
        if(checkTwoAdjacent(i, j)) {
          grid[i][j] = 1 
          improvementFound = true
        }
      }
    }
  }

  return grid
}

runGrid(grid)
