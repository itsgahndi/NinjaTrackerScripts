function studentManagement() {
  SpreadsheetApp.getUi()
    .createMenu('Code Ninjas') // creates new menu called "Code Ninjas"
    .addItem('Add Student', 'addStudent') // adds "Add Student" button and calls function addStudent
    .addItem('Remove Student', 'remStudent') // adds "Remove Student" button and calls function remStudent
    .addToUi();
}

function addStudent() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService
    .createHtmlOutputFromFile('src/html/AddStudentHtml')
    .setHeight(250)
    .setWidth(500);
  ui.showModalDialog(html, 'Add Student');
}

function remStudent() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService
    .createHtmlOutputFromFile('src/html/RemStudentHtml')
    .setHeight(300)
    .setWidth(500);
  ui.showModalDialog(html, 'Remove Student');
}
