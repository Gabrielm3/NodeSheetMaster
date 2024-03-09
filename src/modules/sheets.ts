import { sheets_v4 } from 'googleapis';

export async function getMetadata(googleSheets: sheets_v4.Sheets, auth: any, spreadsheetId: string) {
    return await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    });
}

export async function getRows(googleSheets: sheets_v4.Sheets, auth: any, spreadsheetId: string, range: string) {
    return await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range,
        valueRenderOption: "UNFORMATTED_VALUE",
        dateTimeRenderOption: "FORMATTED_STRING",
    });
}

export async function AddRow(googleSheets: sheets_v4.Sheets, auth: any, spreadsheetId: string, range: string, values: any[]) {
    return await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values,
        },
    });
}

export async function updateValues(googleSheets: sheets_v4.Sheets, auth: any, spreadsheetId: string, range: string, values: any[]) {
    return await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values,
        }
    });
}
