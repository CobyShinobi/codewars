// Return the average of the given array rounded down to its nearest integer.



function getAverage(marks){
  let total = marks.reduce((a, b) => a + b)
  return Math.floor(total / marks.length)
}
