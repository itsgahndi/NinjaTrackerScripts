// Iterates through "Roster" sheet in column B6:B to find largest
// number and return the next number.
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
