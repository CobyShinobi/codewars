// Note: Math.pow and some other Math functions like eval() and ** are disabled.
// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).



function numberToPower(number, power){
  let newNum = 1
  for(let i = 0; i < power; i++) {
    newNum *= number
  }
  return newNum
}
