// Note the partial dictionary. See spell-checker-full-dictionary.js for exercise with full dictionary.
const dictionary = ["it", "was", "the", "best", "worst", "of", "times"];

// Check if word belongs to dictionary (case-insensitive).
const wordIsSpelledCorrectly = word => {

  // TO-DO
  
};

// Check if sentence contains a mis-spelled word (case-insensitive).
const sentenceContainsMisspelledWord = sentence => {

  // TO-DO

};

console.log(
  sentenceContainsMisspelledWord(
    "It was the best of times it was the worst of itmes"
  )
);

console.log(
  sentenceContainsMisspelledWord(
    "It was the best of times it was the worst of times"
  )
);
