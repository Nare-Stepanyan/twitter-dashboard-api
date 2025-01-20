import dotenv from 'dotenv';
import express from 'express';
import aboutRouter from './routes/about';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/about', aboutRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
