function roster(firstName, lastName, dateEnrolled, dojoUsername, scratchUsername, scratchPassword) {
  var rosterSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
  var lastRow = rosterSheet.getLastRow();
  var lastColumn = rosterSheet.getLastColumn();

  rosterSheet.insertRowAfter(lastRow);

  var range = rosterSheet.getRange(lastRow, 2, 1, lastColumn - 1);
  var beltFormulaCell = rosterSheet.getRange(lastRow, 5);

  var beltFormula = "=IFS(VLOOKUP(B72,'Black Belt'!B70:G,6,FALSE)=TRUE, "Complete Program",VLOOKUP(B72,'Red Belt'!B70:G,6,FALSE)=TRUE, "Black Belt",VLOOKUP(B72,'Brown Belt'!B70:G,6,FALSE)=TRUE, "Red Belt",VLOOKUP(B72,'Purple Belt'!B70:G,6,FALSE)=TRUE, "Brown Belt",VLOOKUP(B72,'Blue Belt'!B70:G,6,FALSE)=TRUE, "Purple Belt",VLOOKUP(B72,'Green Belt'!B70:G,6,FALSE)=TRUE, "Blue Belt",VLOOKUP(B72,'Orange Belt'!B70:G,6,FALSE)=TRUE, "Green Belt",VLOOKUP(B72,'Yellow Belt V3'!B70:G,6,FALSE)=TRUE, "Orange Belt",VLOOKUP(B72,'Yellow Belt V2'!B70:G,6,FALSE)=TRUE, "Orange Belt",VLOOKUP(B72,'White Belt V3'!B70:G,6,FALSE)=TRUE, "Yellow Belt",VLOOKUP(B72,FUNdamentals!B70:G,6,FALSE)=TRUE, "White Belt", 1=1, "FUNdamentals")";
  var status = "Active";
  var values = [getNewID(), firstName, lastName, "", dateEnrolled, status, dojoUsername, scratchUsername, scratchPassword];

  range.setValues(values);
  beltFormulaCell.setFormula(beltFormula);
}
