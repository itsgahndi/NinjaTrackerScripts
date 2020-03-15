function updateAlert() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('Update 20/3c Changelog','-  Added Code Ninjas Tab in Menu Bar to automate enrolling and removing students. [WIP]\n-  Added GUI to "Add Students".\n\nNote: If adding new students, drag down from the previous row. This populates the cell with the correct formula.', ui.ButtonSet.OK);
}