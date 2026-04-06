// Out put of your instructions
console.log("hey Neila");
// Intro to variables
 var celsius = 12;
 var fahrenheit = celsius*1.8 + 32;
  console.log(fahrenheit);
  var greeting = "hello";
  var place = greeting +"Rwanda";
console.log(place);
// adding quotes
  var story = "The man whispered ,\"please speak to me.\"";
  // To add line and whitespace.
console.log(story);
var song = "Up up\n\t down down";
console.log (song);
// comparing strings
  let x = "Yes";
  let y ="yes";
  console.log(x==y);
  console .log (x!=y);

 var haiku = "Blowing from the west \n" +
             "Fallen leaves gather\n"  + 
             "In the east."
console.log(haiku);
// Difference btn null & undefined
var signedIn;
console.log(signedIn);
 var signedIn = null;
 //how to get not a number(NAN)
 var math = "Hello" % 10;
 console.log(math);
 // comparison 
 // Variable concatenation
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + thingTwo);
var fullName = "Ishimwe";
console.log (fullName);

// Math calculations
 var bill = 10.25 + 3.99 + 7.15;
 var tip = bill * 0.15;
 var total = bill + tip;
 console.log(total);

  

 var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining"; 
var madLib = "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+adjective2+". I cannot wait to work through the rest of this "+adjective3+"content!";
console.log (madLib);

var firstName = "Julia";
var interest = "cats";
var hobby = "video games"
var  awesomeMessage = " HI my name is "+firstName+ " I love  "+ interest+" .In my spare time , I like to "+hobby +". "
console.log(awesomeMessage);

var firstName2 = "James";
var interest2 = "baseball";
var hobby2 = "read";
var  awesomeMessage2 = " HI my name is "+ firstName2 + " I love "+interest2 +" .In my spare time , I like to "+ hobby2+" .";
console.log(awesomeMessage2)
//if conditions
var weather = "sunny";

if (weather === "snow") { 
  console.log("Wear boots");
} 
else if (weather === "sunny" ) {
  console.log ("wear a maxi skirt");
}
else  {
  console.log("wear a leather coat");
}
var number = 7;
if( number % 2 === 0){
  console.log("even");
}
else{
  console.log ("odd");
}
//if with logical operators
 let age = 35
 if( age <=18 ||age<=21 ){

  console.log ("underage");
 }
else{
  console.log("adult");
}
//terminary operator
 let score = 35
 let position = (x>35)? ("Repeat"): ("Promote");
 console.log(position)
// switch case
let rank  = 3 ;
switch(rank){
case 1 :
console.log("Excellent");
case 2 :
console.log("Very good");
case 3 :
console.log("Keep it up");
}
// break statement
let day =5;
switch (day){
  case 1:
  console.log("Monday");
  break;
  case 2:
  console.log("Tuesday");
  break;
  case 3:
  console.log(" Wednesday");
  break;
  case 4:
  console.log("Thursday");
  break;
  case 5:
  console.log("Friday");
   break;
  default:
console.log("Invalid day");
}
// falling through
var tier = "collector's deck";
var output = "You’ll receive ";

switch (tier) {
  case "deck of legends":
    console.log(output += "a custom card, ");
    break;
  case "collector's deck":
   console.log( output += "a signed version of the Exploding Kittens deck, ");
    break;
  case "nsfw deck":
   console.log( output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ");
    break;
  default:
    console.log(output += "one copy of the Exploding Kittens card game.");
  
}

// While loop
let n = 1
while(n <= 20){
 if(n % 3 === 0 & n % 5 === 0){
   console.log("JuliaJames") ;
}
  else if( n % 3 === 0){ 
    console.log( "Julia");
  }
  else if (n % 5 === 0){
    console.log ("James");
  }
  else{
    console.log(n);
  }
 
  n = n + 1;

}


function laug(){
var types = "hahahahahahahahahaha!"
return types
}
console.log(laug());

function laugh(num){
  let  categories  ="";
  
  for(  let i = 0; i < num ; i++){
     categories += "ha";
  }
  return categories + "!"; 
}
console.log (laugh(2))

// variable shadowing

let name = "Neila";  // outer variable

function greet() {
  let name = "Ishimwe";  // inner variable shadows outer one
  console.log(name);     // prints "Ishimwe"
}

greet();
console.log(name);
     // prints "Neila"

// Hoisting
say("Jay");
var saluation ;
function say(name){
   saluation = "salut";
  console.log( saluation + name );

}

// array
 var ran =[1,4,6,7,8,9];
 var students =[ "Ishimwe", "Kayitare","Murungi"];
 var math =[ "pi",3.14,true,undefined];
// replace an element in array 
 var ran =[1,4,6,7,8,9];
ran[0]= 2;
