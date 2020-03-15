function studentManagement() {
  SpreadsheetApp.getUi()
     .createMenu('Code Ninjas') //creates new menu called "Code Ninjas"
     .addItem('Add Student', 'addStudent') //adds "Add Student" button and calls function addStudent
     .addItem('Remove Student', 'remStudent') //adds "Remove Student" button and calls function remStudent
     .addToUi();
}

function addStudent() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService
                 .createHtmlOutputFromFile('AddStudentHtml')
                 .setHeight(250)
                 .setWidth(500);
  ui.showModalDialog(html, 'Add Student');
}

function remStudent() {
  var ui = SpreadsheetApp.getUi();
  var html = HtmlService
                 .createHtmlOutputFromFile('RemStudentHtml')
                 .setHeight(300)
                 .setWidth(500);
  ui.showModalDialog(html, 'Remove Student');
}

function getNewID() {
  var rosterID = SpreadsheetApp.getActiveSpreadsheet()
                  .getSheetByName('Roster')
                  .getRange("B6:B");
  var values = rosterID.getValues();
  
  var tempLarge = 0;
  var next;
  
  for (var i = 1; i < rosterID.getLastRow() - 5; i++) {
    
    next = values[i][0];
    
    if (next > tempLarge)
      tempLarge = next;

  }
  return tempLarge + 1;
} 