import User from '../../data/account/user';
import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const user: User = new User('Krakowski');

app.get('/', (req: Request, res: Response) => {
    res.send(`User name: ${user.username}`)
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});