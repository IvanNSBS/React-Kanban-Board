import express, { Router } from 'express';
import BoardsFolder from '../../../data/account/boardsFolder';
import Board from '../../../data/board/board';
import userManager from '../userManager';

const homeRoute = express.Router();

homeRoute.get('/', function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(userManager.user))
});

homeRoute.get('/folders', function (req: express.Request, res: express.Response) {
    console.log(JSON.stringify(userManager.user.folders));
    res.send( JSON.stringify(userManager.user.folders) );
})

homeRoute.get('/favorites', function (req: express.Request, res: express.Response) {
    console.log(JSON.stringify(userManager.user.starredBoards));
    res.send( JSON.stringify(userManager.user.starredBoards) );
})

homeRoute.post('/folders', function(req: express.Request, res: express.Response) {
    const folder = <BoardsFolder>req.body;
    if(folder.name === undefined || folder.name === ""){
        res.status(406).send('Invalid Folder');
    }

    userManager.user.folders = userManager.user.folders.concat(folder);
    res.status(200).send(`Folder with name ${folder.name} created`)
})

homeRoute.post('/favorites', function(req: express.Request, res: express.Response) {
    const favorites = <Board[]>req.body;
    if(favorites === undefined)
        res.status(406).send('Invalid Folder');

    userManager.user.starredBoards = favorites;
    res.status(200).send(`Updated Starred Boards`)
})

homeRoute.post('/boards', function(req: express.Request, res: express.Response) {
    const folderIdx: number = req.body.folderIdx;
    const folderName: string = req.body.folderName;
    const name: string = req.body.name;
    const bgImgUrl: string | undefined = req.body.bgImgUrl;

    if( folderIdx < 0 || folderIdx >= userManager.user.folders.length || 
        name === "" || name === undefined || folderName === "" || folderName === undefined)
    {
        res.status(406).send('Invalid parameters for boards');
    }
    else{
        userManager.user.folders[folderIdx].boards.push(new Board(name, folderName, bgImgUrl));
        res.status(200).send(`Board created for folder ${folderName} Created`);
    }
})

export default homeRoute;