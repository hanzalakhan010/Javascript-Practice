const assignments = [
  { id: 1, title: "Assignment 1", deadline: new Date("5/10/24"),status:'pending' },
  { id: 2, title: "Assignment 2", deadline: new Date("5/11/24"),status:'pending' },
  { id: 3, title: "Assignment 3", deadline: new Date("6/1/25") ,status:'pending'},
  { id: 4, title: "Assignment 4", deadline: new Date("9/1/24") ,status:'pending'},
];
let archived = ''

// Create: Add new assignment entry (title, deadline)
// This is not via student

// Read: View upcoming and submitted assignments sorted by deadline
function getAssignements() {
  let sortedAssignments = assignments.sort(
    (assignment1, assignment2) => assignment1.deadline - assignment2.deadline
  );
  return sortedAssignments
}


// Update: Mark as submitted, edit submission notes

function submitAssignment(assignment_id){
    let assignmentIndex = assignments.findIndex((assignment)=>assignment.id === assignment_id)
    if (assignmentIndex == -1) throw new Error('Assignment not found')
        assignments[assignmentIndex]?.['status'] = 'submitted'
}


// Delete: Delete old assignments

function deleteAssignment(assignment_id){
    let assignmentIndex = assignments.findIndex((assignment)=>assignment.id == assignment_id)
    if (assignmentIndex == -1) throw new Error('Assignment not found')
    assignments.splice(assignmentIndex,1)
    return 'Assignment deleted'

}


// Archive: json.stringify

function archiveAssignment(assignment_id){
    let assignmentIndex = assignments.findIndex((assignment)=>assignment.id == assignment_id)
    if (assignmentIndex == -1) throw new Error('Assignment not found')
    let string = JSON.stringify(assignments[assignment_id])
    archived+=string
    return 'Archived assignment'
}

assignments.push(
  { id: 5, title: "DBMS Assignment", deadline: new Date("7/20/24"), status: "pending" },
  { id: 6, title: "OS Lab", deadline: new Date("6/30/24"), status: "pending" }
);
