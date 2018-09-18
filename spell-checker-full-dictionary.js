// include the File System module
const fs = require("fs");
const util = require("util");

const dictionaryFile = "./dictionaries/english-usa.txt";

let dictionary = [];

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile);

const getFileData = async () => {
  return await readFile(dictionaryFile, "utf8");
};

// Check if word belongs to dictionary (case-insensitive).
const wordIsSpelledCorrectly = word => {

  // TO-DO

};

// Check if sentence contains a mis-spelled word (case-insensitive).
const sentenceContainsMisspelledWord = sentence => {

  // TO-DO

};

// Can't use `await` outside of an async function so you need to chain with then()
getFileData()
  .then(data => {
    dictionary = data.split("\n");
  })
  .then(() => {
    console.log(wordIsSpelledCorrectly("best"));
    console.log(wordIsSpelledCorrectly("besto"));
  })
  .then(() => {
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
  });
