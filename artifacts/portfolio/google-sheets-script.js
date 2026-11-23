// Google Apps Script Code - Copy this to your Google Apps Script Editor
// Follow these steps:
// 1. Go to https://script.google.com and create a new project
// 2. Copy this entire code and paste it
// 3. Click Deploy > New Deployment
// 4. Select "Web app"
// 5. Set "Execute as" to "Me"
// 6. Set "Who has access" to "Anyone"
// 7. Click Deploy and copy the Web App URL
// 8. Paste that URL in your use-contact.ts file

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Sheet1");
  }

  // Keep existing columns intact and add Category as the final column.
  var lastColumn = sheet.getLastColumn();
  if (lastColumn === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message", "Category"]);
  } else {
    var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
    if (headers.indexOf("Category") === -1) {
      sheet.getRange(1, lastColumn + 1).setValue("Category");
    }
  }

  var data = JSON.parse(e.postData.contents);
  var row = [
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.subject || "",
    data.message || "",
    data.category || ""
  ];

  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

