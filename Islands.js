const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1]
]

function removeIslands (matrix) {
  for (let y = 1; y < matrix[0].length - 1; y++) {
    for (let x = 1; x < matrix.length - 1; x++) {
      if (isIsland(x, y)) {
        matrix[x][y] = 0
      }
    }
  }
}

function isIsland (x, y) {
  // Irrelevant
  if (matrix[y][x] === 0) return false

  // Left
  let leftBridge = true
  for (let i = 0; i < x; i++) {
    if (matrix[y][i] === 0) {
      leftBridge = false
      break
    }
  }

  // Right
  let rightBridge = true
  for (let i = x; i < matrix[0].length; i++) {
    if (matrix[y][i] === 0) {
      rightBridge = false
      break
    }
  }

  // Up
  let upBridge = true
  for (let i = 0; i < y; i++) {
    if (matrix[i][x] === 0) {
      upBridge = false
      break
    }
  }

  // Down
  let downBridge = true
  for (let i = y; i < matrix.length; i++) {
    if (matrix[i][x] === 0) {
      downBridge = false
      break
    }
  }

  // Passed all tests
  return (!leftBridge && !rightBridge && !upBridge && !downBridge)
}

removeIslands(matrix)

console.table(matrix)
