 // Find the sum of all multiples of n below m



function sumMul(n,m){
  if(n <= 0 || m <= 0)
    return "INVALID"
  let total = 0
  for(let i = n; i < m; i += n) {
    total += i
  }
  return total
}
