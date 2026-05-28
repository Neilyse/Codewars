const container = document.querySelector('.container')
const input = document.getElementById('input')
const button = document.getElementById('btn')
const order = document.getElementById('order')

button.addEventListener('click', ()=>{
    const trim = input.value.trim()
    if(trim !=''){

        const newLi = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        const task = document.createTextNode(trim)
        const leave = document.createElement('button')
        leave.textContent= 'delete'
        leave.addEventListener('click',()=>{
                    order.removeChild(newLi)
                })
        
          newLi.appendChild(checkbox)
          newLi.appendChild(task)
          newLi.appendChild(leave)

        order.appendChild(newLi)
        

        input.value = ''

     }
})



