import express, { Request, Response } from 'express';
import studentRoutes from './routes/students';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); 
app.use('/api', studentRoutes); 


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });


app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});