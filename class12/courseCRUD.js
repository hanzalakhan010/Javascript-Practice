const courses_enrollements = [];

// Create
function addCourse(course) {
  courses_enrollements.push(course);
}

// Get Course By id
function getCourseEnrollmentById(course_id) {
  let enrollment = courses_enrollements.find(
    (course) => course.course_id == course_id
  );
  return enrollment;
}

function getAllCoursesEnrollmentByStudentId(student_id) {
  let courses_enrollements_by_student = courses_enrollements.filter(
    (ele) => ele.student_id == student_id
  );
  return courses_enrollements_by_student;
}

function updateCourseEnrollment(course_id, student_id, data) {
  let courses_enrollements_index = courses_enrollements.findIndex(
    (ele) => ele.student_id == student_id && ele.course_id == course_id
  );
  if (courses_enrollements_index == -1)
    return new Error("Courses Enrollement not found");
  courses_enrollements[courses_enrollements_index] = {
    ...courses_enrollements[courses_enrollements_index],
    ...data,
  };
  return courses_enrollements[courses_enrollements_index];
}

function removeCourseEnrollment(course_id, student_id) {
  let courses_enrollements_index = courses_enrollements.findIndex(
    (ele) => ele.student_id == student_id && ele.course_id == course_id
  );
  if (courses_enrollements_index == -1)
    return new Error("Courses Enrollement not found");
  courses_enrollements.splice(courses_enrollements_index, 1);
}
addCourse({
  course_id: 101,
  student_id: 1,
  course_name: "Data Structures",
  status: "enrolled",
  semester: "Spring 2025"
});

addCourse({
  course_id: 102,
  student_id: 1,
  course_name: "Web Development",
  status: "waitlisted",
  semester: "Spring 2025"
});
