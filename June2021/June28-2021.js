// Remove all exclamation marks from the end of sentence.



function remove(s){
  while(s[s.length - 1] === "!") {
    s = s.slice(0, -1)
  }
  return s
}
