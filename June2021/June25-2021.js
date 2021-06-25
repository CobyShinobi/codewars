// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each number



function multiply(number){
  let digits = Math.abs(number).toString().split("").length

  return number * (5 ** digits)
}
