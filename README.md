# Exercises

Implement the `findMisspelledWords` function which you might use for a spellchecker.

Skills required:
- Splitting a string into an array
- Iterating over an array
- Lowercasing a string
- Checking if an array contains an item
- Finding the index of a substring

```js
const dictionary = ["it", "was", "the", "best", "worst", "of", "times"];

// Find misspelled words in the provided string.
// You can expect text to only have alphabetical characters, commas, spaces, and periods.
// @returns {Array} Indexes of misspelled words in the provided string.
const findMisspelledWords = (text) => {}

var misspellings = findMisspelledWords(
  "It was the best of times, it was the worst of itmes."
);

console.log("Found misspellings at indexes: ");
console.log(misspellings);

if (misspellings[0] === 46 && misspellings.length === 1) {
  console.log('👍');
} else {
  console.log('🤔');
}
```

