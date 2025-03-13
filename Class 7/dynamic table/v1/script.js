const students = [
    {
        id: 1,
        name: "Emma Rodriguez",
        major: "Computer Science",
        gpa: 3.7
    },
    {
        id: 2,
        name: "Liam Chen",
        major: "Mechanical Engineering", 
        gpa: 3.4
    },
    {
        id: 3,
        name: "Sophia Williams",
        major: "Biology",
        gpa: 3.9
    },
    {
        id: 4,
        name: "Ethan Patel",
        major: "Business Administration",
        gpa: 3.2
    }];

function renderTable(){
    let table = document.getElementById('table')
    let header = document.createElement('tr')
    for (let heading in students[0]){
        console.log(heading)
        let cell = document.createElement('th')
        cell.textContent = heading.toUpperCase()
        header.appendChild(cell)
    }
    table.appendChild(header)

    for (let student of students){
        let row = document.createElement('tr')
        for (details in student){
            let cell = document.createElement('td')
            cell.textContent = student[details]
            row.appendChild(cell)
        }
    table.appendChild(row)
    }
}
renderTable()