function isPalindrome(word) {
  // Write your algorithm here
   const ispal=[]
   const splitword=word.split('');
   
  for(let i=splitword.length-1; i>=0; i--){
    ispal.push(splitword[i]);
    
  }


  // console.log(`is pal: ${ispal}`)
  // console.log(`is split: ${splitword}`)



  // console.log(splitword);

   console.log( `${word} -->${ispal.join('')}`);
   if(word===ispal.join('')){
    return true;
   }else{
    return false;
   }


}

isPalindrome('robot')

/* 
  Add your pseudocode here
*/
//lower the case of the input
//one approach is to create a new empty array and add letters in reverse 
// if the array is same as the word then is palindrome

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
