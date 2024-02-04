// This assignment is inspired by a problem on Exercism 
// (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates 
// Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	// let letterPoints = "";
   let wordPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
         wordPoints = wordPoints + Number(pointValue);
		   // letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	// return letterPoints;
   return `${wordPoints}`;
 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// Task 1.1: Write an initialPrompt function that asks a user to input a word.

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word to score: ");
   return word;
};

// Task 1.2: Use the oldScrabbleScorer() function provided to score the word 
// provided by the user. Print the result to the console.

// console.log(oldScrabbleScorer(initialPrompt()));

// Task 2.1: Define a function "simpleScorer" that takes a word as a 
// parameter and returns a numerical score. Each letter within the word is worth 1 point.

const simplePointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
};

function simpleScorer(word) {
	word = word.toUpperCase();
	// let letterPoints = "";
   let wordPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
         wordPoints = wordPoints + Number(pointValue);
			// letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		   }
 
	   }
	}
	return `${wordPoints}`;
};

// console.log(simpleScorer(initialPrompt()));

// Task 2.2: Define a function "vowelBonusScorer" that takes a word as a 
// parameter and returns a score. Each vowel within the word is worth 3 points, 
// and each consonant is worth 1 point.

const vowelBonusPointStructure = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U']
};

function vowelBonusScorer(word) {
	word = word.toUpperCase();
   let wordPoints = 0;
	// let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelBonusPointStructure) {
 
		 if (vowelBonusPointStructure[pointValue].includes(word[i])) {
			wordPoints = wordPoints + Number(pointValue);
         // letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		   }
 
	   }
	}
	return `${wordPoints}`;
};

// console.log(vowelBonusScorer(initialPrompt()));

// Task 2.3: Finish writing the scoringAlgorithms array. 
// It should be populated with three objects, one for each of the three scoring options. 
// Each object should contain three keys: name, description, and scoringFunction.

// Task 2.4 Examine the table for the information to store in name and description. 
// The scoringFunction for each object should be the name of one of the three scoring 
// algorithms already defined.

let scrabbleScorer;

let simple = {
   name: "Simple Score",
   description: "Each letter is worth one point.",
   scorerFunction: simpleScorer,
};

let vowel = {
   name: "Vowel Bonus",
   description: "Each vowel is three points, each consonant is one point.",
   scorerFunction: vowelBonusScorer,
};

let scrabble = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: oldScrabbleScorer,
};

const scoringAlgorithms = [simple, vowel, scrabble];

// Task 2.5 Finish writing scorerPrompt() so that the user can select which 
// scoring algorithm to use when the program scores their word.

function scorerPrompt() {
   console.log(`Which scoring algorithm would you like to use?

      0 - Simple: One point per character
      1 - Vowel Bonus: Vowels are worth 3 points
      2 - Scrabble: Uses scrabble point system
      
      `);
   scoreMenu = input.question("Enter a 0, 1, or 2: ");
   return scoreMenu;
};

//   // Simple scoring example
// console.log("algorithm name: ", scoringAlgorithms[0].name);
// console.log("scoringFunction result: ", scoringAlgorithms[0].scoringFunction("JavaScript"));

// Task 2.6 Call scorerPrompt() inside of runProgram() so that the program asks 
// the user for a scoring algorithm after prompting for a word. Use the 
// scoring object returned from scorerPrompt() to score the user’s word 
// and let the user know what score their word receives.

// Output "Score for '<word>' is: <score>"

function transform(obj) {
   let newObj = {
   };
   for (item in obj) {
      for (letter in obj[item]) {
         newKey = letter;
         newValue = item;
         newObj[newKey] = newValue;
      }
   };
   return newObj;
};

let newPointStructure = transform(oldPointStructure);
console.log(newPointStructure);


function runProgram() {
   let wordInput = initialPrompt();
   let scoreInput = scorerPrompt();
   console.log(`${scoringAlgorithms[scoreInput].name} score for '${wordInput}' is: ${scoringAlgorithms[scoreInput].scorerFunction(wordInput)}`);
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
