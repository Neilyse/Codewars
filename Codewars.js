 // replacing a character in a text
 //function contamination(text, char){
//if(!text ||!char){
    //console.log("");
//}
   //let result = text.replace(/./g,char)
      //console.log (result) ;
      
    
//}

// counting each character
//function count(string) {
  //let results = {};
  //f//or ( let char of string){
 //results[char] = (results[char] || 0) + 1;
    //}
//return results;
  
//}

// Area of a square with an arc inside
//function squareArea(A) {
  
  //let radius =  (2 * A) / (Math.PI);
  //let  side = radius;
  
   // return side* side;
//}
//console.log(squareArea(5));



function formatDuration(seconds){
    let sec, min, hours, days, months, rem, rem2;
    if (seconds === 0){
        return "now";
    }else if(seconds < 60){
        return seconds +'seconds';
    }else if(seconds >=60 && seconds <3600){
        min= parseInt(seconds/60)
        sec = seconds% 60
        return min + " " + "minutes"  + " and " + sec +" " + "seconds"
    }else if(seconds >= 3600 && seconds < 86400){
        hours = parseInt(seconds/3600);
        rem = seconds - (hours * 3600);
        min = parseInt(rem/60);
        sec = rem - (min * 60);
        return hours + " " + "hours" + ", " + min + " " + "minutes"  + " and " + sec +" " + "seconds"
    }else if(seconds >= 86400 && seconds < 2592000){
        days = parseInt(seconds/86400);
        rem = seconds - (86400 * days);
        hours = parseInt(rem/3600);
        min = parseInt((rem - (hours * 3600))/60)
        sec = (rem - (hours * 3600)) - (min * 60)
        return days + " " + "days" + " ," + hours + " " + "hours" + ", " + min + " " + "minutes"  + " and " + sec +" " + "seconds"
    }else if (seconds >= 2592000){
        months = parseInt(seconds/2592000);
        rem = seconds - (months * 2592000);
        days = parseInt(rem/86400);
        rem2 = rem - (86400 * days);
        hours = parseInt(rem2/3600);
        min = parseInt((rem2 - (3600 * hours))/60);
        sec = (rem2 - (3600 * hours)) - (min * 60);
        return months + " " + "months" + " ," + days + " " + "days" + " ," + hours + " " + "hours" + ", " + min + " " + "minutes"  + " and " + sec +" " + "seconds"
    }
}
console.log(formatDuration(360));

function descendingOrder(n){
    if (n >= 0){
       return parseInt(n.toString()
                        .split('')
                        .sort((a,b)=> b-a)
                        .join(""))
       
                
    }
}
console.log(descendingOrder(12234));
// includes
/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

function findx(arr, x){
    return arr.includes(x);
}
console.log(findx(["a","b","c"], "c"))
    

// how to count each characters
function text(input){
    let frequency = input.split("").reduce((acc,curr)=>{
          acc[curr] = (acc[curr] || 0 )+1;
           return acc
              },{});
              return frequency
              let removePunctuation = input.filter(char =>/[^\W_]/.test(char).join(''))
              return removePunctuation
}
console.log(text("I miss you"));

 

function removePunctuation(text) {
    return [...text].filter(char => /[^\W_]/.test(char)).join('');
}

console.log(removePunctuation("Hello, world! This is a test.")); // "Hello world This is a test"

// Exercises
function analyzeText(input){
    let results ={};

    let lowerCase= input.toLowerCase();
    

     let removePunctuation= [...input].filter(char => /[^\W_]/.test(char)).join('');

     

     let trim = input.trim();
    
     let substrings = input.split("");
     

     let removeDuplicates = Array.from(new Set(substrings)).join('');
     
      function findLongest(trim){
         
         let words = trim.split(/\s+/)
         let response = "";
         
         for(let word of words){
         if(word.length>response.length){
             response=word
            }
         }
        return response
     }
     let longestWord = findLongest(trim)
     


    function countWords(trim){
        let words = trim.split(/\s+/)
        let answer = [];
        
        
        let counting = words.reduce((acc,curr)=>{
          acc[curr] = (acc[curr] || 0 )+1;
          return acc; 
              },{});
              return counting;
                 };
                 let frequency= countWords(trim)
    

              return {
                  lowerCase,
             removePunctuation,
                trim,
                substrings,
                removeDuplicates,
                longestWord,
               frequency,
                  
              };
              }

    console.log( analyzeText("hello my wonderful friend! Hello bestie !!I really miss you a lot from button of my heart."))

    function century(year) {
return year%100 !==0 ? 
Math.floor(year/100)+1
:Math.floor(year/100) ;
  

}

//Write a function that takes the input below, and gives the output.
/*
input:
[
  { name: "alice", age: 20, active: true, email: "ALICE@MAIL.COM" },
  { name: "bob", age: "17", active: true, email: "BOB@MAIL.COM" },
  { name: "eve", age: 25, active: false, email: "EVE@MAIL.COM" },
  { name: "sam", age: 30, active: true, email: null }
]

output:
[
  { name: "Alice", email: "alice@mail.com" }
]
*/
function address(x){
    let results=[];
    return { name: x[0].name.charAt(0).toUpperCase() +x[0].name.slice(1),
          email: x[0].email.toLowerCase()};
}
console.log(address([
  { name: "alice", age: 20, active: true, email: "ALICE@MAIL.COM" },
  { name: "bob", age: "17", active: true, email: "BOB@MAIL.COM" },
  { name: "eve", age: 25, active: false, email: "EVE@MAIL.COM" },
  { name: "sam", age: 30, active: true, email: null }
]
))
function countNumbers(input){
    return input.split('').reduce((acc,curr)=> {
        acc[curr]=(acc[curr]||0)+1;
        return acc;
    },{})
}
console.log(countNumbers([1,2,[1,undefined],[2,0]],3,2,4,5,5))