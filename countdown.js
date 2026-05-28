
let time = 10

let countdown = document.getElementById('timer')
let add5 = document.getElementById('first')
let add10 = document.getElementById('second')
let add15 = document.getElementById('third')

 let start = setInterval(function(){
    time = time -1;
    countdown.textContent = time + "s";
     if (time === 0) {
        clearInterval(start); 
        countdown.textContent = 0;
        countdown.textContent = "over!!" ;
      add5.style.display ='none'
       add10.style.display = 'none'
        add15.style.display ='none'
      }

     },1000)

     
      add5.addEventListener('click',()=>{
          time += 5
          countdown.textContent = time+"s"
      })
     
     
      add10.addEventListener('click',()=>{
         time += 10
         countdown.textContent = time+"s"
      })
     
     
      add15.addEventListener('click',()=>{
         time += 15
         countdown.textContent = time+"s"
      })
     


