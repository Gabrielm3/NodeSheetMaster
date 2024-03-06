exports.getMetadata = async function(googleSheets, auth, spreadsheetId){
    return await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,
    })
}

exports.getRows = async function(googleSheets, auth, spreadsheetId, range){
    return await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: range,
        valueRenderOption: "UNFORMATTED_VALUE",
        dateTimeRenderOption: "FORMATTED_STRING",
    });
}

exports.AddRow = async function(googleSheets, auth, spreadsheetId, range, values) {
    return await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: values
        }
    });
};

exports.updateValues = async function(googleSheets, auth, spreadsheetId, range, values) {
    return await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: values,
        }
    })
}