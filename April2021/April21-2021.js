// The code provided is supposed replace all the dots . in the specified String str with dashes -
//
// But it's not working properly.
//
// Fix the bug so we can all go home early.
//
// var replaceDots = function(str) {
//   return str.replace(/./, '-');
// }



var replaceDots = function(str) {
  return str.replace(/\./g, '-');
}
