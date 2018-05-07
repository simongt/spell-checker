# Exercises

## Basic spellcheck

Skills required:
- Splitting a string into an array
- Iterating over an array
- Lowercasing a string
- Checking if an array contains an item
- Finding the index of a substring

Implement the `findMisspelledWords` function which you might use for a spellchecker.

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

## Extracting object keys

Skills required:
- Iterating over an object
- Checking for substrings 

We get information from an API which comes back in a curious format about ingredients from a recipe.

```js
const apiData = {
  name: "Yellow Curry Veggies",
  ingredient1: "Zucchini",
  ingredient2: "Onion",
  ingredient3: "Potato",
  ingredient4: "Coconut Milk",
  ingredient5: "Yellow Curry Paste"
};
```

Write a function that accepts an object as well as a string prefix that will extract the values for the keys starting with the prefix like so:

```js
const ingredients = extractKeyValues(apiData, 'ingredient');
// ingredients = [ "Zucchini", "Onion", "Potato", "Coconut Milk", "Yellow Curry Paste" ]
```

## Convert a hexadecimal value to RGB

Write a function `hexToRGB()` that accepts a hexadecimal string like `FF00FF` and returns an object containing the red, green, and blue values in decimal format.

`000000` should return `{red: 0, green: 0, blue: 0}`

`101010` should return `{red: 16, green: 16, blue: 16}`

`FF00FF` should return `{red: 255, green: 0, blue: 255}`
