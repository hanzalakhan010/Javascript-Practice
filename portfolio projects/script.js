var projects = JSON.parse(localStorage.getItem("projects") ?? "[]");

function saveState() {
  localStorage.setItem("projects", JSON.stringify(projects ?? []));
}

function loadState() {
  if (projects) {
    projects.forEach((project, index) => {
      document.querySelector("tbody").insertAdjacentHTML(
        "beforeend",
        `
                  <tr>
                      <td id = 'title_id-${index}'>${project.projectTitle}</td>
                      <td id = 'desc_id-${index}'>${project.projectDesc}</td>
                      <td ><a id = 'link_id-${index}' target = '__blank' href = '${project.liveUrl}'>Link</a></td>
                      <td><button onclick = editProject('${index}')>Edit</button></td>
                      <td><button>Delete</button></td>
                  </tr>
                  `
      );
    });
  }
}

function addProject() {
  let projectTitle = document.getElementById("projectTitle").value;
  let projectDesc = document.getElementById("projectDesc").value;
  let liveUrl = document.getElementById("liveURL").value;
  let index = projects.length
  if (projectTitle && projectDesc) {
    projects.push({ projectTitle, projectDesc, liveUrl });
    saveState();
    document.querySelector("tbody").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td id = 'title_id-${index}'>${projectTitle}</td>
            <td id = 'desc_id-${index}'>${projectDesc}</td>
            <td ><a id = 'link_id-${index}' target = '__blank' href = '${liveUrl}'>Link</a></td>
            <td><button onclick = editProject('${index}')>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
        `
    );
    closeModdal()
  } else {
    alert("Project Title and project description can\t be empty");
  }
}
function openModal(){
  document.getElementById('editDiv').style.display = 'block'
  document.getElementById('projectsDiv').style.display = 'none'
  
}
function closeModdal(){
  document.getElementById('editDiv').style.display = 'none'
  document.getElementById('projectsDiv').style.display = 'block'
  
}
document.getElementById("addBtn").addEventListener("click", (event) => {
  event.preventDefault();
  addProject();
});
document.getElementById('closeBtn').addEventListener('click',(event)=>{
  event.preventDefault()
  closeModdal()
})
document.addEventListener("DOMContentLoaded", () => {
  loadState();
});
