import express from 'express';
import notesRouter from './routes/notes.js';

const app = express();

app.use(express.json());
app.use('/notes', notesRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`QuickNotes API running on port ${PORT}`));