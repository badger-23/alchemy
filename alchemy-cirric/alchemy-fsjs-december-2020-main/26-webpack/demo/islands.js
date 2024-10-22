const visitedIsland = (map, visited, rowI, colI) => {
  // have visited or we have water
  if(visited[rowI]?.[colI] || !map[rowI]?.[colI]) return 0;

  // have not visited and we have an island
  visited[rowI][colI] = 1;
  visitedIsland(map, visited, rowI, colI + 1);
  visitedIsland(map, visited, rowI, colI - 1);
  visitedIsland(map, visited, rowI - 1, colI);
  visitedIsland(map, visited, rowI + 1, colI);

  visitedIsland(map, visited, rowI - 1, colI - 1);
  visitedIsland(map, visited, rowI - 1, colI + 1);
  visitedIsland(map, visited, rowI + 1, colI - 1);
  visitedIsland(map, visited, rowI + 1, colI + 1);

  return 1;
}

/*
map = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1]
]
*/
const countIslands = map => {
  const visited = [...Array(map.length)].map(() => [...Array(map[0].length)].fill(0));

  let count = 0;

  map.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      count += visitedIsland(map, visited, rowI, colI)
      // if i am 1 ds.add(me)
      // if left is 1 ds.union(me, left)
      // if down is 1 ds.union(me, down)



    });
  });

  return count;
}

console.log(countIslands([
  [0, 1, 0, 1, 1],
  [0, 0, 1, 1, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1]
]));
