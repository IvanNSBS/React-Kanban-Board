import User from '../../data/account/user';
import BoardsFolder from '../../data/account/boardsFolder';
import Board from '../../data/board/board';

const user: User = new User('Server User');

class UserManager {
    private _user: User;

    constructor() {
        this._user = new User('');
        const serverFolder = new BoardsFolder('Server Folder', undefined);
        const board = new Board('Server Folder Board', serverFolder.name, 
        'https://s2.glbimg.com/rZddFXm-uylDO-055Zo0yJLzNAw=/0x0:2761x1840/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/5/o/Fup5dESmmxeeVEdtuMTA/jongsun-lee-f-pszo-jee8-unsplash.jpg')

        user.folders.push(serverFolder);
        serverFolder.boards.push(board);
        user.starredBoards.push(board);
    }

    public get user() { return this._user; }
}


const userManager = new UserManager();
export default userManager;