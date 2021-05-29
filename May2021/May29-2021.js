// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
//
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."



let chromosomeCheck = sperm => sperm == "XX" ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
