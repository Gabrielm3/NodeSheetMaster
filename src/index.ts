import express, { Request, Response, NextFunction } from 'express';
import { getAuthSheets } from './modules/auth';
import { getMetadata, getRows, AddRow, updateValues } from './modules/sheets';

const app = express();
const PORT = 3001;

app.use(express.json());

// Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});

app.get("/metadata", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

        const metadata = await getMetadata(googleSheets, auth, spreadsheetId);
        console.log(metadata);
        res.send(metadata.data);
    } catch(error) {
        next(error);
    }
});

app.get("/getRows", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
       
        const rows = await getRows(googleSheets, auth, spreadsheetId, "Página1");
        console.log(rows);
        res.send(rows.data);
    } catch(error) {
        next(error);
    }
});

app.post("/addRow", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

        const { values } = req.body;

        const addedRow = await AddRow(googleSheets, auth, spreadsheetId, "Página1", values);
        res.send(addedRow.data);
    } catch(error) {
        next(error);
    }
});

app.post("/updateValues", async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { googleSheets, auth, spreadsheetId } = await getAuthSheets();

        const { values } = req.body;

        const updatedValues = await updateValues(googleSheets, auth, spreadsheetId, "Página1", values);
        res.send(updatedValues.data);
    } catch(error) {
        next(error);
    }
});

app.listen(PORT, () => console.log('Running ', PORT));
