// Write a function called repeat_string which repeats the given string str exactly count times.



function repeatStr (n, s) {
  let arr = []
  for(let i = 0; i < n; i++) {
    arr.push(s)
  }
  return arr.join("")
}
