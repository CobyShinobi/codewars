// Complete the square sum function so that it squares each number passed into it and then sums the results together.



function squareSum(numbers) {
  let total = 0
  numbers.forEach((item) => {
    total += Math.pow(item, 2)
  })
  return total
}
