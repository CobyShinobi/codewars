// An AI has infected a text with a character!!
//
// This text is now fully mutated to this character.
//
// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!



function contamination(text, char){
  let newStr = ""
  if(text === "" || char === "") {
    return ""
  } else {
    for(let i = 0; i < text.length; i ++) {
      newStr += char
    }
  }
  return newStr
}
