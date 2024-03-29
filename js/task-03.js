"use strict";

// Напиши фукцнию findLongestWord(string), которая принимает параметром
// произвольную строку (в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

const findLongestWord = string => {
  const arrayWordInString = string.split(" ");
  let longestWord = string[0];

  for (const word of arrayWordInString) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
