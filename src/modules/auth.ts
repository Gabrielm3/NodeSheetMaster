import path from 'path';
import { GoogleAuth } from 'google-auth-library';
import { sheets_v4, google } from 'googleapis';

interface AuthSheets {
    auth: GoogleAuth;
    googleSheets: sheets_v4.Sheets;
    spreadsheetId: string;
}

export async function getAuthSheets(): Promise<AuthSheets> {
    //Or path ./
    const credentialsPath = path.join(__dirname, '../../config/credentials.json');

    
    const auth = new GoogleAuth({
        keyFile: credentialsPath,
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    google.options({ auth: auth });

    const googleSheets = google.sheets('v4') as sheets_v4.Sheets;

    const spreadsheetId = "1VAgBkSyGrbzzChustc_eXn-ZzSrzUjpvLKUHlSwR8Q8";

    return {
        auth,
        googleSheets,
        spreadsheetId,
    };
}
