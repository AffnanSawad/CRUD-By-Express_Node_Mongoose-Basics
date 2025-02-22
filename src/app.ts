import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Student_Routes } from './Modules/Student/student.route';
const app: Application = express();

const port = 3000;

//  parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', Student_Routes)

const get_Controller =  (req: Request, res: Response) => {
  // const a = 10
  res.send('Hello World!');
}

//
app.get('/', get_Controller);

export default app;
