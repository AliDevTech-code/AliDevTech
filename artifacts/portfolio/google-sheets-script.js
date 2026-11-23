// Google Apps Script Code - Contact form to Google Sheets
// The script maps values by header name, so Category can be placed in any column.
// After updating this file in Apps Script, redeploy the Web App as a new version.

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");

  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Sheet1");
    sheet.appendRow(["Timestamp", "Name", "Email", "Category", "Subject", "Message"]);
  }

  var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  var lastColumn = sheet.getLastColumn();

  if (lastColumn === 0) {
    var defaultHeaders = ["Timestamp", "Name", "Email", "Category", "Subject", "Message"];
    sheet.getRange(1, 1, 1, defaultHeaders.length).setValues([defaultHeaders]);
    lastColumn = defaultHeaders.length;
  }

  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var valuesByHeader = {
    "timestamp": data.timestamp || new Date().toISOString(),
    "name": data.name || "",
    "email": data.email || "",
    "category": data.category || "",
    "subject": data.subject || "",
    "message": data.message || ""
  };

  var row = headers.map(function(header) {
    var key = String(header || "").trim().toLowerCase();
    return Object.prototype.hasOwnProperty.call(valuesByHeader, key) ? valuesByHeader[key] : "";
  });

  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput("Contact Form API is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}
