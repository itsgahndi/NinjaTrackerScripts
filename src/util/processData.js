// process data from "AddStudentHtml.html
// and calls "populateRowAddStudent.js"
function processData(newStudent) {
  var firstName = newStudent.firstName;
  var lastName = newStudent.lastName;
  var dateEnrolled = newStudent.dateEnrolled;
  var dojoUsername = newStudent.dojoUsername;
  var scratchUsername = newStudent.scratchUsername;
  var scratchPassword = newStudent.scratchPassword;

  Logger.log(firstName + " " + lastName + " " + dateEnrolled);
}
