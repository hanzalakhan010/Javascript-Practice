let projects = JSON.parse(localStorage.getItem("project") ?? '{"projects:[]"}');

function saveState() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function addProject() {
  let projectTitle = document.getElementById("projectTitle").value;
  let projectDesc = document.getElementById("projectDesc").value;
  let liveUrl = document.getElementById("liveURL").value;
  if (projectTitle && projectDesc) {
    projects.push({ projectTitle, projectDesc, liveUrl });
  } else {
    alert("Project Title and project description can\t be empty");
  }
}
