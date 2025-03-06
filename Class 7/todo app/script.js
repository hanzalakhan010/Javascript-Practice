var todos = []
var nextId = todos.length
function* idGenerator() {
    yield nextId++

}
function done(todoId) {
    document.getElementById(todoId).classList.add('done')
    document.getElementById(todoId).childNodes[1].style.textDecoration = 'line-through'
    // document.getElementById(todoId).sin
}
function del(todoId){
    document.getElementById(todoId).remove()
}
function prepareTodoDiv(todo) {
    let _id = idGenerator().next().value
    let newTodo = `
        <div id = '${_id}' class = 'todo'>
            <p>${todo}</p>
            <button class = 'doneBtn' onclick = 'done(${_id})'>Done</button>
            <button class = 'delBtn' onclick = 'del(${_id})'>Delete</button>
        </div>
    `
    return newTodo
}


function addTodo() {
    let todo = document.getElementById('newTodo').value
    if (todo) {
        document.getElementById('todos').innerHTML+= prepareTodoDiv(todo)
        todos.push({id:nextId,todo})
        console.log(todos)
        document.getElementById('newTodo').value = ''

    }
}
document.getElementById('newTodo').addEventListener('keydown', ({ key }) => {
    if (key == 'Enter') {
        addTodo()
    }
})

document.querySelectorAll('tag').forEach(()=>{})

document.getElementById('addBtn').addEventListener('click', addTodo)