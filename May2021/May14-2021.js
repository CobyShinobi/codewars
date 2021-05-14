// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].



function differenceInAges(ages){
  let newArr = []
  let youngest = ages.reduce((a, b) => Math.min(a, b))
  let oldest = ages.reduce((a, b) => Math.max(a, b))

  newArr.push(youngest)
  newArr.push(oldest)
  newArr.push(oldest - youngest)

  return newArr
}
