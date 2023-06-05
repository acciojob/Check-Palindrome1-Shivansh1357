// complete the given function

function palindrome(s){
const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the cleaned string with its reverse
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}
module.exports = palindrome
