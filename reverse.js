 const santence = ' I am learning web dev. ';
//  for(const letter of santence ){
//     console.log(letter);
//  }
  let reverse = '';
  for(const letter of santence){
    reverse = letter + reverse;
  }
  console.log(reverse);

//   ignore this solution
let rev = '';
for(i = 0 ; i < santence.length ; i++){
    // console.log(i);
    const letter = santence[i];
    rev = letter + rev;
}
console.log(rev);


// shortcut 
const reversed = santence.split('').reverse().join('');
console.log(reversed);