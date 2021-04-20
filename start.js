/**
 * 1. Declare two functions: calculateGolfAverages and calculateTotalAverages
 */

function calculateRoundAverages (scores) {
  for (let round = 0; round < scores.length ; round++) {
    let total = 0;
    scores[round].forEach((strokes) => total += strokes);
    const average = total / scores[round].length;
    const averageRounded = Math.round(average * 100) / 100;
    console.log(`The average score for round ${round + 1} is ${averageRounded}.`)
  }
}

/**
 * 2. Implement calculateGolfAverages
 * 
 * This function should print out the average score of each round
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average score of each round in the array
 * Please show only two decimals of accuracy on the averages:
 * 
 * An example of the expected output
 * "The average score for round 4 is 1.33"
*/

function calculateGolfAverages() {
  for (let round = 0; round < scores.length ; round++) {
    let total = 0;
    scores[round].forEach((strokes) => total += strokes);
    const average = total / scores[round].length;
    const averageRounded = Math.round(average * 100) / 100;
    console.log(`The average score for round ${round + 1} is ${average}.`)
  }
}

/**
 * 3. Implement calculateTotalAverages
 * 
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 * 
 * An example of the expected output:
 * "The average of averages is 1.39"
 */

function calculateTotalAverages(scores) {
  let total = 0;
  for (let round = 0; round < scores.length ; round++) {
    for (let stroke = 0; stroke < scores[round].length ; stroke++) {
      total += scores[round][stroke];
    }
  }
  const average = total / (scores.length * scores[0].length);
  const averageRounded = Math.round(average * 100) / 100;
  console.log(`The average of averages is ${averageRounded}.`);
}



///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
const golfScores = [
  [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0],
  [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0],
  [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0],
  [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0],
  [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0],
  [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0],
  [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0],
  [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0],
];
calculateRoundAverages(golfScores);
calculateTotalAverages(golfScores);