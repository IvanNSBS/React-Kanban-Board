import User from '../../data/account/user';
import BoardsFolder from '../../data/account/boardsFolder';
import Board from '../../data/board/board';
import user_actions_status from '../../data/request_statuses/user_statuses'
import CardsList from '../../data/board/cardList';

class DataManager {
    private _user: User;

    constructor() {
        this._user = new User('');
        const serverFolder = new BoardsFolder('Server Folder', 'https://t.ctcdn.com.br/3iFzcXuWD-pKeFYpp7AXgRoOYrE=/512x288/smart/i320336.jpeg');
        const board = new Board('Server Folder Board', serverFolder.name, 
        'https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/16a027a140eec15f3d668010445fc62e/photo-1534631528984-63174ca557d0.jpg')

        this._user.folders.push(serverFolder);
        serverFolder.boards.push(board);
        this._user.starredBoards.push(board);
    }

    public get user() { return this._user; }
    
    public createFolder(name: string, iconUrl?:string) : number 
    {
        this.user.folders.push( new BoardsFolder(name, iconUrl) )
        return user_actions_status.success;
    }

    public createBoardOnFolder(folderIdx: number, name: string, iconUrl?:string) 
    {
        const folderName = this.user.folders[folderIdx].name;
        this.user.folders[folderIdx].boards.push( new Board(name, folderName, iconUrl) )
        return user_actions_status.success;
    }

    public createListOnBoard(folderIdx: number, boardIdx: number, name: string) {
        if(folderIdx < 0 || folderIdx >= this.user.folders.length)
            return user_actions_status.bad_request;
        
        const boards = this.user.folders[folderIdx].boards;
        if(boardIdx < 0 || boardIdx >= boards.length)
            return user_actions_status.bad_request;
            
        const newList = new CardsList(name);
        this.user.folders[folderIdx].boards[boardIdx].cardsCollection.push(newList);

        return user_actions_status.success;
    }
}

const dataManager = new DataManager();
export default dataManager;