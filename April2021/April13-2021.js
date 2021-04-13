// Your function takes two arguments:
//
//     current father's age (years)
//     current age of his son (years)
//
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).



function twiceAsOld(dadYearsOld, sonYearsOld) {
  let sonDoubled = sonYearsOld * 2
  if(dadYearsOld > sonDoubled) {
    return dadYearsOld - sonDoubled
  } else {
    return sonDoubled - dadYearsOld
  }
}
