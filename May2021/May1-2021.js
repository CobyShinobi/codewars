// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



function fakeBin(x){
  let arrOfNums = x.split("")
  for(let i = 0; i < arrOfNums.length; i++) {
    arrOfNums[i] = parseInt(arrOfNums[i], 10)
  }
  let newArr = []
  for(let i = 0; i < arrOfNums.length; i++) {
    arrOfNums[i] < 5 ? newArr.push(0) : newArr.push(1)
  }
  return newArr.toString().replace(/,/g, "")
}
