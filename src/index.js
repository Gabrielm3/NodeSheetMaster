const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

// Auth
const authModule = require('./modules/auth');
const sheetsModule = require('./modules/sheets');

// Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message)
})

app.get("/metadata", async (req, res, next) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await authModule.getAuthSheets();

        const metadata = await sheetsModule.getMetadata(googleSheets, auth, spreadsheetId);
        console.log(metadata)
        res.send(metadata.data)
    } catch(error) {
        next(error);
    }
});

app.get("/getRows", async (req, res, next) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await authModule.getAuthSheets();
       
        const getRows = await sheetsModule.getRows(googleSheets, auth, spreadsheetId, "Página1");
        console.log(getRows)
        res.send(getRows.data);
    } catch(error) {
        next(error);
    }
});

app.post("/addRow", async (req, res, next) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await authModule.getAuthSheets();

        const { values } = req.body;

        const addRow = await sheetsModule.AddRow(googleSheets, auth, spreadsheetId, "Página1", values);
        res.send(addRow.data);
    } catch(error) {
        next(error);
    }
});

app.post("/updateValues", async(req, res, next) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await authModule.getAuthSheets();

        const { values } = req.body;

        const updateValues = await sheetsModule.updateValues(googleSheets, auth, spreadsheetId, "Página1", values);
        res.send(updateValues.data);
    } catch(error) {
        next(error);
    }
});

app.listen(PORT, () => console.log('Running ', PORT));