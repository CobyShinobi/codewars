// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.



let remove = s => s.charAt(s.length - 1) === "!" ? s.slice(0, -1) : s
