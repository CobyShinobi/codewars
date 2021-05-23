// Mr. despair wants to jump off Dutch act, So he came to the top of a building.
// Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)
// Input: floor, The height of the building (floor)
// Output: a string, The voice of despair(When jumping Dutch act)
// Mr. despair jumped from the 2 floor, the voice is "Aa~"
// He fell on the ground, the voice is "Pa!"
// He did not die immediately, and the final voice was "Aa!"



function sc(floor){
  let newStr = ""
  for(let i = floor; i > 1; i --) {
    newStr += "Aa~ "
  }
  newStr += "Pa!"
  if(floor <= 1) {
    return ""
  } else if(floor < 7) {
    newStr += " Aa!"
  }
  return newStr
}
