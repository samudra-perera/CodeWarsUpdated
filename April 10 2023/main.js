/*
Task
Some children are playing rope skipping game. Children skip the rope at roughly the same speed: once per second. If the child fails during the jump, he needs to tidy up the rope and continue. This will take 3 seconds.

You are given an array failedCount, where each element is the jump count at the failed. ie. [12,23,45] means the child failed 3 times in the game process. The 1st mistake occurred when he jumped 12 times; The 2nd mistake occurred when he jumped 23 times; The 3rd mistake occurred when he jumped 45 times.

Your task is to calculate how many times the child jumped in 60 seconds.

Note: Each child persisted at least 60 jumps, which meant it could have been over 60 seconds, but the child continued to skip rope.

Input/Output
[input] integer array failedCount

0 ≤ failedCount.length ≤ 60

1 ≤ failedCount[i] ≤ 60

[output] an integer

how many times the child jumped in 60 seconds.

Example
For failedCount = [], the output should be 60.

There is no mistake in the game process. So the child jumped 60 times in 60 seconds.

For failedCount = [12, 23, 45], the output should be 51.

*/

//Edge Case

const tiaosheng = (failedCount) => {
  let subtraction = 0;

  for (let i = 0; i < failedCount.length; i++) {
    console.log(failedCount[i] == 60);
    if (failedCount[i] > 57 && failedCount[i] < 60 && failedCount.length == 1) {
      let temp = 60 - failedCount;
      subtraction += temp;
    } else if (failedCount[i] === 60) {
      subtraction += 1;
      console.log("this");
    } else if (failedCount[i] < 58) {
      subtraction += 3;
      console.log("run");
    }
  }
  return 60 - subtraction;
};

/*
Introduction
Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
Task
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
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

6. If you find yourself still in the maze after using all the moves, you should return Lost.
Good luck, and stay safe!

*/

let mazeTest = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

let directionTest = ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"];

const mazeRunner = (maze, directions) => {
  let start = [0, 0];
  //Access each row and column and return the starting point
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        start = [i, j];
      }
    }
  }

  //Now use the directions to traverse the maze
  const compassDirection = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  for (let d = 0; d < directions.length; d++) {
    let temp = compassDirection[directions[d]];
    start[0] += temp[0];
    start[1] += temp[1];
    //Always a square

    //Checks to see if you finish

    if (
      start[0] >= maze.length ||
      start[1] >= maze.length ||
      start[0] < 0 ||
      start[1] < 0
    ) {
      return "Dead";
    }
    if (maze[start[0]][start[1]] === 1) {
      return "Dead";
    }

    if (maze[start[0]][start[1]] === 3) {
      return "Finish";
    }
  }
  return "Lost";
};
