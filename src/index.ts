import express, { Request, Response } from 'express';
import studentRoutes from './routes/students';
import userRoutes from './routes/users';
import connectToDatabase from './dbserver';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

connectToDatabase()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()); 
app.use('/api', studentRoutes); 
app.use('/api', userRoutes); 


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });


app.listen(port, () => {
console.log(`Server running at http://localhost:${port}`);
});