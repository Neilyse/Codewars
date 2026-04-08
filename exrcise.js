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