// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



function reverseWords(str) {
  let splitString = str.split("")
  let reverseString = splitString.reverse()
  let joinString = reverseString.join("")
  let splitWords = joinString.split(" ")
  let reverseWords = splitWords.reverse()
  let joinWords = reverseWords.join(" ")
  return joinWords
}
