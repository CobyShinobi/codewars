// A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?
// Assuming there are no other types of animals, work out how many of each animal are there.
// Return a an array list - [chickens, cows].



function animals(heads, legs){
  let chickens = (legs - (heads * 2)) / 2,
      cows = heads - ((legs - (heads * 2)) / 2)
  if(chickens < 0 || cows < 0) {
    return "No solutions"
  } else if(chickens === 0 && cows === 0) {
    return [0, 0]
  } else if(chickens % 1 !== 0 || cows % 1 !== 0) {
    return "No solutions"
  } else {
    return [cows, chickens]
  }
}
