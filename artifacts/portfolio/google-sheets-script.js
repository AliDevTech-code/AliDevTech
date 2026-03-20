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
  // Get the spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  
  // If sheet doesn't exist, create it
  if (!sheet) {
    sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Sheet1");
    // Add headers
    sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
  }
  
  // Parse the incoming data
  var data = JSON.parse(e.postData.contents);
  
  // Get existing headers
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // If no headers, add them
  if (headers.length === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
    headers = ["Timestamp", "Name", "Email", "Subject", "Message"];
  }
  
  // Prepare row data
  var row = [
    data.timestamp || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.subject || "",
    data.message || ""
  ];
  
  // Append the data
  sheet.appendRow(row);
  
  // Return success response
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput("Contact Form API is working!")
    .setMimeType(ContentService.MimeType.TEXT);
}
