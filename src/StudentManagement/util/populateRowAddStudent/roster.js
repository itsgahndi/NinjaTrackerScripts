function roster(firstName, lastName, dateEnrolled, dojoUsername, scratchUsername, scratchPassword) {
  var rosterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
  var lastRow = rosterSheet.getLastRow();
  var lastColumn = rosterSheet.getLastColumn();

  rosterSheet.insertRowAfter(lastRow);

  var activeRange = rosterSheet.getRange(lastRow, 2, 1, lastColumn - 2);
  var formulasRange = rosterSheet.getRange(lastRow - 1, 2, 1, lastColumn - 1);
  var beltFormulaCell = rosterSheet.getRange(lastRow, 5);
  var status = "Active";
  var values = [[getNewID(), firstName, lastName, "", dateEnrolled, status, dojoUsername, scratchUsername, scratchPassword]];

  activeRange.setValues(values);
  activeRange.setFormulas(formulasRange);
}
