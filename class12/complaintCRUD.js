const complaints = [
  {
    id: 1,
    title: "Laptop screen",
    description: "Laptop screen is blank",
    status: "pending",
    categories: new Set(["laptop", "technical"]),
    date: new Date("1/12/24"),
  },
];

// In this i will use auto increment of id
function addComplaint(complain) {
  let id = complaints.length + 1;
  complaints.push({
    id,
    date: Date.now(),
    categories: new Set(complain?.categories),
    ...complain,
  });
  return "complain added";
}

function viewComplainsByCategory(categories) {
  let filteredComplaints = complaints.filter((complain) => {
    let __categories = new Set(categories);
    let intersection__ = __categories.intersection(complain.categories);
    if (__categories.size == intersection__.size) return true;
    return false;
  });
  return filteredComplaints;
}

// console.log(viewComplainsByCategory(["laptop"]));
function viewComplainsByDate(start, end) {
  let filteredComplaints = complaints.filter((complain) => {
    if (
      (start &&
        end &&
        complain.date > new Date(start) &&
        complain.date < new Date(end)) ||
      (start && !end && complain.date > new Date(start)) ||
      (!start && end && complain.date < new Date(end)) ||
      (!start && !end)
    )
      return true;
    return false;
  });
  return filteredComplaints;
}
// console.log(viewComplainsByDate('1/4/25','2/2/25'))

addComplaint({
  title: "WiFi not working",
  description: "Unable to connect to campus WiFi",
  status: "pending",
  categories: ["network", "technical"],
  date: new Date("3/10/24"),
});

addComplaint({
  title: "Projector issue",
  description: "Projector flickers in Room 401",
  status: "open",
  categories: ["classroom", "hardware"],
  date: new Date("5/5/24"),
});