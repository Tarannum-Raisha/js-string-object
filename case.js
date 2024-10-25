const school = 'Provati SHikka Academy';
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());  //upper case ,lowercase er pu () dite hobe nahole kaj hobe na



const subject = "chemistry" ;
const book = 'CHemistry';
if(subject.toUpperCase() === book.toUpperCase()){ 
    console.log('porikkhay patay felmu');
}
else{ 
    console.log('porikkhay bash khamu ');

}

const drink = 'water';
const liquid = ' water ';
if(drink.trim() === liquid.trim()){ //samne pichon e space soraite hole trim 
    console.log('pani khamu ');

}
else{
    console.log('ei pani khaitam na')
}