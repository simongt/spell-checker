# Morning Warm-up ☕️🌞💻🤓 (September 18, 2018)

"Expect problems and eat them for breakfast." – Alfred A. Montapert

<details>

<summary>ALGORITHMS + WHITEBOARDING</summary>

#### _So many algorithms and whiteboarding exercises! And they kinda seem random too. So what's the big idea?_

As a developer, your job relies heavily on __analytical skills__. You have to be able to understand the issues at hand, think creatively, and come up with solid, stable solutions that meet the requirements and perform well. Taking the time to solve problems that aren’t in the domain of your ordinary routine and everyday tasks can stretch that brain muscle that’s so important for a developer to exercise.<br>

See beyond the task, and try to have fun with it. Enjoy thinking through these challenges, and be curious about how things may be done differently. For example, observe the thought process in this [coding interview at Google](https://www.youtube.com/watch?v=XKu_SEDAykw), in which the interviewee takes time to ask many clarifying questions that explore all the conditions and assumptions being made before even beginning to attempt a solution.

https://www.youtube.com/watch?v=XKu_SEDAykw

</details>

# Simple Spell-Checker 🔎🔤
> 
> Adapted from @ericandrewlewis's "Basic Spellcheck" exercise
> 

## Skills required:
- Splitting a string into an array
- Iterating over an array (see for...in example below)
- Lowercasing a string
- Checking if an array contains an item
- Finding the index of a substring

<details>
  
  <summary>Example for...of loop</summary>
  
  [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  
  ```javascript
  
  let words = ['hello', 'world'];
  for (let word of words) {
    console.log(word);
  }
  // hello
  // world
  
  ```
  
</details>

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

## Decipher the code (needs work)

There's some code like 'ehvnej' that deciphers into a real message.

Write a function given the algorithm that deciphers the message.

## [Subarray problem](https://web.stanford.edu/class/cs9/sample_probs/SubarraySums.pdf)
