/* Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given.
If you reach the end point before all your moves have gone, you should return Finish.
If you hit any walls or go outside the maze border, you should return Dead.
If you find yourself still in the maze after using all the moves, you should return Lost.
The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point
  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules
1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost. */

function mazeRunner(maze, directions) {
    const findStart = () => {
      for (let i=0; i<maze.length; i++) {
        for (let j=0; j<maze[i].length; j++) {
          if (maze[i][j] === 2) {
            return [i,j];
          }
        }
      }
    };
    const [startX,startY] = findStart();
    let [x,y] = [startX,startY];
    for (const direction of directions) {
      if (direction==='N') x-=1;
      if (direction==='S') x+=1;
      if (direction==='E') y+=1;
      if (direction==='W') y-=1;
      if (x<0||y<0||x>=maze.length||y>=maze[0].length||maze[x][y]===1) {
        return 'Dead';
      }
      if (maze[x][y]===3) {
        return 'Finish';
      }
    }
    return 'Lost';
}