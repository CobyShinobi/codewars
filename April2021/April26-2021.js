// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.



function pipeFix(numbers){
  let newArr = []
  let lowNumber = numbers.shift()
  let highNumber = numbers.pop()
  for(let i = lowNumber; i <= highNumber; i++) {
    newArr.push(i)
  }
  return newArr
}
