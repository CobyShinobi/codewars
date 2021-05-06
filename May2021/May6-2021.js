// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order.



function mergeArrays(arr1, arr2) {
  let newArr = arr1.concat(arr2).sort((a, b) => a - b)
  return Array.from(new Set(newArr))
}
