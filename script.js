
let arr = []
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify(
//        [ {text: 'hello'},
//         {text: 'hi'},
//         {text: 'qwer'}]

//       ),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((localArr) => {
//         for(let key in localArr){
           
         
//             const task_el = document.createElement('div')
//             task_el.classList.add('task')


//             const task_cont = document.createElement('div')
//             task_cont.classList.add('text')

//             task_cont.innerText = localArr[key].text

//             task_el.appendChild(task_cont)


//             const button = document.createElement('button');
//             button.classList.add('delete')
//             button.innerHTML = 'Delete'
//             task_el.appendChild(button)

//             button.addEventListener('click', ()=>{
//                 tasks.removeChild(task_el)
//                 localStorage.removeItem('value')
                
//             })

//             tasks.appendChild(task_el)
//         }
//     });


window.addEventListener('load', () => {
    let todoArr = []

    const form = document.getElementById('new-task-form');
    const input = document.getElementById('new-task-input');
    const tasks = document.getElementById('tasks')
    let localArr = JSON.parse(localStorage.getItem('value')) 

    out()
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(input.value == ''){
            alert('Напишите заданние')
        }else{
            const text = input.value;
            input.value=''
    
    
            const task_el = document.createElement('div')
            task_el.classList.add('task')
    
    
            const task_cont = document.createElement('div')
            task_cont.classList.add('text')
    
            task_cont.innerText = text
    
            task_el.appendChild(task_cont)
    
    
            const button = document.createElement('button');
            button.classList.add('delete')
            button.innerHTML = 'Delete'
    
    
            task_el.appendChild(button)
    
            tasks.appendChild(task_el)
    
    
            button.addEventListener('click', ()=>{
                tasks.removeChild(task_el)
                todoArr.splice(0,1)
            })

            let obj = {}
            obj.text = text;
            todoArr.push(obj)
            localStorage.setItem('value',JSON.stringify(todoArr))
        }
       

        

    })


    function out(){
        for(let key in localArr){
           
         
            const task_el = document.createElement('div')
            task_el.classList.add('task')


            const task_cont = document.createElement('div')
            task_cont.classList.add('text')

            task_cont.innerText = localArr[key].text

            task_el.appendChild(task_cont)


            const button = document.createElement('button');
            button.classList.add('delete')
            button.innerHTML = 'Delete'
            task_el.appendChild(button)

            button.addEventListener('click', ()=>{
                tasks.removeChild(task_el)
                localStorage.removeItem('value')
                
            })

            tasks.appendChild(task_el)
        }
    }
})