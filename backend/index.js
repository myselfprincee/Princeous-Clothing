import express from 'express';
import cors from 'cors';
import connectToMongo from './db.js';
import apiRouter from './routes/api.js';

connectToMongo();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});