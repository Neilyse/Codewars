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
 
var students =[ "Ishimwe", "Kayitare","Murungi"];
 var math =[ "pi",3.14,true,undefined];
 console.log(math);
// replace an element in array 
 var ran =[1,4,6,7,8,9];
ran[0]= 2;
console.log(ran);
console.log(ran[4]);
console.log(ran.length);
// array methods
//push method
var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powered");
console.log(donuts);
// pop method
donuts.pop();
console.log(donuts);

//reverse method
var fruits =[ "Banana","Watermelon","Apple","Pineapple","Mango","Orange"];
fruits.reverse();
console.log(fruits);

// sort method

// string
fruits.sort()
console.log(fruits);

//numbers

// ascending order
var level =[1,2,0,8,7,9,5,3,6,4]
level.sort(function(a,b){
  return a-b;
});
console.log(level);
// descending order
level.sort(function(a,b){
  return b-a;

});
console.log(level);

// splice method
donuts.splice(1,0,"cookies");
console.log(donuts);
donuts.splice(2,1,"hot chou");
console.log(donuts);
donuts.splice(donuts.length,1,"caramel");
console.log(donuts);
// array loops
donuts[0] +="hoo";
donuts[2] +="hoo";
donuts[4] +="hoo";
console.log(donuts);
// for loop
for(var i = 0; i < donuts.length ; i++){
  donuts[i] += "hole";
  donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);
// For each loop
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(num,index,all){
  if( num % 3 ===0){
    test[index] = num + 100

  }
  else{ test [index]= num;

  }
});
console.log(test);
var college =["ulk","mku","alu","auca",];
college.forEach(function(item, index,array){
  college[index]+= "hole";
    college[index] = college[index].toUpperCase();
});
console.log(college);
// map method
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
var totals = bills.map(function(element){
 return Number((element*1.15 ).toFixed(2));
}
      
); console.log(totals);
// Nested array
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];
for (var i = 0  ; i < numbers.length;i++ ) {
  for( var j = 0 ; j < numbers[i].length; j++) {
  if (numbers[i][j] % 2 === 0){
    numbers[i][j] = "even";
  }
    else{
      numbers[i][j] = "odd";
    }
  }
}
console.log(numbers);

// object
var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    


close:function(){
    if (umbrella.isOpen === false){
        return "The umbrella is already closed! ";
        
    }
    else{ umbrella.isOpen = false
          return "Julia closes the umbrella!";
}
},
};
console.log(umbrella.open());
console.log(umbrella.close());

// object method
var breakfast ={name:"African",price: 12000 ,ingredients:["Eggs","Sugar","flour","Butter","Milk"]};
console.log(breakfast.name);
console.log(breakfast.price);
console.log(breakfast.ingredients);
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,

    deposit: function(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    },

    withdraw: function(amount) {
        var verifyBalance = this.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            this.balance -= amount;
        }
    },

    printAccountSummary: function() {
        return `Welcome!
Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    }
};

console.log(savingsAccount.printAccountSummary());
