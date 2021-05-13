// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.



function arrayMadness(a, b) {
  let totalA = 0
  let totalB = 0

//   math for a
  for(let i = 0; i < a.length; i++) {
    totalA += a[i] ** 2
  }

//   math for b
  for(let i = 0; i < b.length; i++) {
    totalB += b[i] ** 3
  }

//   check maths against each other
  if(totalA > totalB) {
    return true
  } else {
    return false
  }
}
