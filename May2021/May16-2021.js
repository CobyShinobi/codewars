// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string)



function sumStr(a,b) {
  if(a === "" && b === "") {
    return "0"
  } else if(a === "") {
    return (0 + parseInt(b)).toString()
  } else if(b === "") {
    return (parseInt(a) + 0).toString()
  } else {
    return (parseInt(a) + parseInt(b)).toString()
  }
}
