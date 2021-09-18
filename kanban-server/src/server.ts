import express, { Request, Response } from 'express';
import cors from 'cors'
import homeRoute from './routes/homeRoute';
import boardRoute from './routes/boardRoute';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use('/', homeRoute);
app.use('/board', boardRoute);

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});