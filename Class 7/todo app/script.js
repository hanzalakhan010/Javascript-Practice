var todos = []
function addTodo(){
    let todo = document.getElementById('newTodo').value
    if (todo){
        let newTodo = document.createElement('p')
        newTodo.innerText = todo
        newTodo.classList.add('todo')
        document.getElementById('todos').appendChild(newTodo)

        todos.push(newTodo)
        document.getElementById('newTodo').value = ''

    }
}
document.getElementById('main').addEventListener('submit',(event)=>{
    event.preventDefalt()
    addTodo()
})


document.getElementById('addBtn').addEventListener('click',addTodo)