var donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];


donuts[2] = "cinnamon twist";
donuts[4] = "salted caramel";
donuts[5] = "shortcake eclair";
var facebookProfile = {name :"Lyse", friends:109,messages:["era","period","clock it","very mindful"],
postMessage:function(message){
             this.messages.push(message);
},
deleteMessage:function(index){
  
              this.messages.splice(index,1);
},
addFriend: function(){
   this.friends+=1;

},
removeFriend:function(){
  if (this.friends > 0)
           this.friends-=1;
}
};
console.log(facebookProfile);

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
donuts.forEach(function(donut){
             console.log( donut.type  +"donuts cost $"+ donut.cost +"each");
});

let mom = "ndoli";
for (let char of mom){
    console.log(char);
}
let gym = "water";
for(let char of gym){
    console.log(char);
}
// Temperaye literals
let name = "Neila";
let age = 20;

let msg = `My name is ${name} and I am ${age} years old`;
console.log(msg);

//string

// how to change  a string into anumber
let song = Number("28605");
console.log(song);
let vibe = parseInt("28605.76");
console.log(vibe);
let beat = parseFloat("23.45");
console.log(beat);
let frequency = +"123";
console.log(frequency);

//array 
let exam =[90,98,97,100]
let reb = exam.filter(num => num > 95);
console.log(reb);
let nesa = exam.find(num => num > 95);
console.log(nesa);
let maran =  exam.reduce((acc, curr)=> acc + curr,0);
console.log(maran);
// call back function
 function greet(name){
    console.log("Hello" + name);
 }
 function processUser(callback){
    callback("Neila");
 }
 processUser(greet);
 let group  = [ 30,40,20,60,80,70] ;
 function average(sum,length){
    console.log(sum / length);
 }
 function total(callback){
     let sum = group.reduce((acc,curr)=>acc+ curr);
     callback(sum,group.length)
    
 }
 
   total(average);
 
function verifyNum(){
    if (num > 0){
        console.log(num + "is nbbbbbbbbbbbvvvvpbbbvobbbbbbbvsitive");
    }
    elseif( num < 0){
        console.log( num +" is Negative");

    }
    if (num % 2 === 0){
        console.log()

    }
    if(num % 2 !== 0){
        console.log
    }
}
           
 function findMultiples(integer, limit) {
let results;
   for(i = 1 , i <= limit , i++)
     if(i %integer  === 0 ){ 
        results.push(i);
     }
  return results 
}
console.log(findMultiples(2,6) )