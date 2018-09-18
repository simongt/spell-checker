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
> Adapted from @ericandrewlewis's ["Basic Spellcheck"](https://github.com/ericandrewlewis/exercises#basic-spellcheck) exercise
>

Implement the functions for `wordIsSpelledCorrectly` and `sentenceContainsMisspelledWord` which might be useful for a spellchecker.

```javascript
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

```

## Skills required:
- Splitting a string into an array
- Lowercasing a string
- Checking if an array contains an item
- Iterating over an array (`for...of` loop, [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of))

<details>
  
  <summary>Simple, straight-forward for...of loop example</summary>
  
  ```javascript
  
  const myFavoriteAuthors = [
    'Neal Stephenson',
    'Arthur Clarke',
    'Isaac Asimov', 
    'Robert Heinlein'
  ];
  
  for (const author of myFavoriteAuthors) {
    console.log(author);
  }
  
  // OUTPUT:
  // Neal Stephenson
  // Arthur Clarke
  // Isaac Asimov
  // Robert Heinlein
  
  ```
  
</details><br>

---

<details>

<summary>STARTER CODE (WITH HINTS)</summary>

``` javascript

// Note the partial dictionary. See spell-checker-full-dictionary.js for exercise with full dictionary.
const dictionary = ["it", "was", "the", "best", "worst", "of", "times"];

// Check if word belongs to dictionary (case-insensitive).
const wordIsSpelledCorrectly = word => {
  // TO-DO
  // returns true if the dictionary array includes the given word
};

// Check if sentence contains a mis-spelled word (case-insensitive).
const sentenceContainsMisspelledWord = sentence => {
  // TO-DO
  // convert to lower-case
  // split by spaces
  // iterate through sentence to check if each word is spelled correctly
  // returns true if a mis-spelled word is found
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

```

</details>

<details>

<summary>SOLUTION</summary>

🔐

</details>
