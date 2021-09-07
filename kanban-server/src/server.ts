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
const board = new Board('Server Folder Board', serverFolder.name, 'https://s2.glbimg.com/rZddFXm-uylDO-055Zo0yJLzNAw=/0x0:2761x1840/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/5/o/Fup5dESmmxeeVEdtuMTA/jongsun-lee-f-pszo-jee8-unsplash.jpg')

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