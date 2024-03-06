const path = require('path');
const { google } = require("googleapis");

exports.getAuthSheets = async function() {
    const credentialsPath = path.join(__dirname, '../../credentials.json');
    
    const auth = new google.auth.GoogleAuth({
        keyFile: credentialsPath,
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });

    const spreadsheetId = "1VAgBkSyGrbzzChustc_eXn-ZzSrzUjpvLKUHlSwR8Q8";

    return {
        auth,
        client,
        googleSheets,
        spreadsheetId,
    };
};
