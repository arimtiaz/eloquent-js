// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.


function countChar(str, c) {
    let cCounter = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] == c) {
        cCounter++;
      } 
    }
    return cCounter;
  }
  console.log(countChar("KarK", "K"));
  

let bCounter = 0;

function countBs(str) {
 return countChar(str, "B")
}
console.log(countBs("BBC"));



