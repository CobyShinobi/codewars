// Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
//
// You can not use multiplier "*" operator.



function billboard(name, price = 30){
  let total = 0
  for(let i = 0; i < price; i++) {
    total += name.length
  }
  return total
}
