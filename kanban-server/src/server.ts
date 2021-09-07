import User from '../../data/account/user';
import express, { Request, Response } from 'express';
import cors from 'cors'
import BoardsFolder from '../../data/account/boardsFolder';
import Board from '../../data/board/board';
import HomeRouteController from './routes/homeRoute';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const user: User = new User('Server User');
const serverFolder = new BoardsFolder('Server Folder', undefined);
const board = new Board('Server Folder Board', serverFolder.name, undefined)

user.folders.push(serverFolder);
serverFolder.boards.push(board);
user.starredBoards.push(board);

const homeRouteController = new HomeRouteController(user);

app.use('/', homeRouteController.route);
app.get('/', (req: Request, res: Response) => {
    res.send(JSON.stringify(user))
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});