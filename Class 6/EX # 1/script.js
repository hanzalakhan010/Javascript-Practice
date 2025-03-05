function addElement(){
    let newELe = document.createElement('p')
    newELe.textContent = 'Hello students'
    newELe.style.color = 'green'
    newELe.style.fontSize  = '20px'
    document.getElementById('content').append(newELe)
}
addElement()