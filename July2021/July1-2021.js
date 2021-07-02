// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.



function ensureQuestion(s) {
  if(s.length === 0) {
    return "?"
  } else if(s[s.length - 1] === "?") {
    return s
  } else {
    return s + "?"
  }
}
