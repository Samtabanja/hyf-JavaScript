let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString)
//hello,this,is,a,difficult,to,read,sentence

console.log( 'the string length is ' + myString.length ); 
//the string length is 42

const replace = myString.replace(/,/g, " ");
console.log(replace)
//hello this is a difficult to read sentence
