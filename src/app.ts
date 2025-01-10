import express, { Request, Response } from 'express';


const app = express();
const port = 3000;

app.get('/about', (req: Request, res: Response) => {
    res.status(200).json({message: 'This is an application that interacts with twitter apis'});
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});