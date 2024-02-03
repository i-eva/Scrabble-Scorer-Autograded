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
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

// Task 1.1: Write an initialPrompt function that asks a user to input a word.

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");
   return word;
};

// Task 1.2: Use the oldScrabbleScorer() function provided to score the word 
// provided by the user. Print the result to the console.

console.log(oldScrabbleScorer(initialPrompt()));

// Task 2.1: Define a function "simpleScorer" that takes a word as a 
// parameter and returns a numerical score. Each letter within the word is worth 1 point.

const simplePointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
};

function simpleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in simplePointStructure) {
 
		 if (simplePointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		   }
 
	   }
	}
	return letterPoints;
};

console.log(simpleScorer(initialPrompt()));

// Task 2.2: Define a function "vowelBonusScorer" that takes a word as a 
// parameter and returns a score. Each vowel within the word is worth 3 points, 
// and each consonant is worth 1 point.

const vowelBonusPointStructure = {
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
   3: ['A', 'E', 'I', 'O', 'U']
};

function vowelBonusScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelBonusPointStructure) {
 
		 if (vowelBonusPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		   }
 
	   }
	}
	return letterPoints;
};

console.log(vowelBonusScorer(initialPrompt()));

let scrabbleScorer;

const scoringAlgorithms = [];

function scorerPrompt() {}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt();
   
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
