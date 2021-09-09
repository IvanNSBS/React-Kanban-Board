import User from '../../data/account/user';
import BoardsFolder from '../../data/account/boardsFolder';
import Board from '../../data/board/board';
import user_actions_status from '../../data/request_statuses/user_statuses'

class UserManager {
    private _user: User;

    constructor() {
        this._user = new User('');
        const serverFolder = new BoardsFolder('Server Folder', undefined);
        const board = new Board('Server Folder Board', serverFolder.name, 
        'https://s2.glbimg.com/rZddFXm-uylDO-055Zo0yJLzNAw=/0x0:2761x1840/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/5/o/Fup5dESmmxeeVEdtuMTA/jongsun-lee-f-pszo-jee8-unsplash.jpg')

        this._user.folders.push(serverFolder);
        serverFolder.boards.push(board);
        this._user.starredBoards.push(board);
    }

    public get user() { return this._user; }
    
    public createFolder(name: string, iconUrl?:string) : number {
        if(name === "" || name === undefined)
            return user_actions_status.bad_request;

        if(this.user.folders.filter(f => f.name === name).length > 0){
            console.log("Name already exists")
            return user_actions_status.already_exists;
        }
        
        this.user.folders.push( new BoardsFolder(name, iconUrl) )
        return user_actions_status.success;
    }
}


const userManager = new UserManager();
export default userManager;