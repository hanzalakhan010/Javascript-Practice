var projects = JSON.parse(localStorage.getItem("projects") ?? "[]");

function saveState() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

crypto
function loadState() {
  if (projects) {
    projects.forEach((project) => {
      document.getElementById("tbody").insertAdjacentHTML(
        "beforeend",
        `
                  <tr>
                      <td>${project.projectTitle}</td>
                      <td>${project.projectDesc}</td>
                      <td class = 'liveURL'><a target = '__blank' href = '${project.liveUrl}'>Link</a></td>
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
  if (projectTitle && projectDesc) {
    projects.push({ projectTitle, projectDesc, liveUrl });
    saveState();
    document.getElementById("tbody").insertAdjacentHTML(
      "beforeend",
      `
        <tr>
            <td>${projectTitle}</td>
            <td>${projectDesc}</td>
            <td class = 'liveURL'><a target = '__blank' href = '${liveUrl}'>Link</a></td>
        </tr>
        `
    );
  } else {
    alert("Project Title and project description can\t be empty");
  }
}

document.getElementById("addBtn").addEventListener("click", (event) => {
  event.preventDefault();
  addProject();
});
document.addEventListener("DOMContentLoaded", () => {
  loadState();
});
