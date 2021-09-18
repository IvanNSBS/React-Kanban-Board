import express, { Router } from 'express';
import Board from '../../../data/board/board';
import dataManager from '../dataManager';

const homeRoute = Router();

homeRoute.get('/', function (req: express.Request, res: express.Response) {
    res.send(JSON.stringify(dataManager.user))
});

homeRoute.get('/folders', function (req: express.Request, res: express.Response) {
    if(dataManager.user.folders.length == 0)
        res.status(204).send('No folders created')
    else
        res.status(200).send( JSON.stringify(dataManager.user.folders) );
})

homeRoute.get('/favorites', function (req: express.Request, res: express.Response) {
    if(dataManager.user.starredBoards.length == 0)
        res.status(204).send('No favorite boards')
    else
        res.status(200).send( JSON.stringify(dataManager.user.starredBoards) );
})

homeRoute.post('/folders', function(req: express.Request, res: express.Response) {
    const folderName = req.body.name;
    const iconUrl = req.body.iconUrl;

    const status = dataManager.createFolder(folderName, iconUrl);
    res.status(200).send(`Folder with name ${folderName} created`);
})

homeRoute.post('/favorites', function(req: express.Request, res: express.Response) {
    const favorites = <Board[]>req.body;
    if(favorites === undefined)
        res.status(406).send('Invalid Folder');

    dataManager.user.starredBoards = favorites;
    res.status(200).send(`Updated Starred Boards`)
})

homeRoute.post('/boards', function(req: express.Request, res: express.Response) {
    const folderIdx: number = req.body.folderIdx;
    const name: string = req.body.name;
    const bgImgUrl: string | undefined = req.body.bgImgUrl;

    const status = dataManager.createBoardOnFolder(folderIdx, name, bgImgUrl);
    res.status(200).send(`Board with name ${name} created`);
})

homeRoute.put('/boards', function(req: express.Request, res: express.Response) {
    const prevFolderName = req.body.prevFolderName;
    const newFolderName = req.body.newFolderName;
    const newFolderIconUrl = req.body.newFolderIconUrl;

    const folder = dataManager.user.folders.find(f => f.name === prevFolderName);
    if(folder === undefined) {
        res.status(406).send("Folder Doesn't exist")
        return;
    }

    folder.name = newFolderName;
    folder.iconUrl = newFolderIconUrl;
    res.status(200).send(`Changed Folder name from <${prevFolderName}> to <${newFolderName}>.\nChanged Icon Url to <${newFolderIconUrl}>`);
})

homeRoute.delete('/folders/:folderName', function(req: express.Request, res: express.Response) { 
    const folderName = req.params.folderName;
    const folder = dataManager.user.folders.find(f => f.name === folderName);
    
    if(folder === undefined) {
        res.status(406).send("Folder Doesn't exist")
        return;
    }

    dataManager.user.folders = dataManager.user.folders.filter(f => f.name !== folderName);
    dataManager.user.starredBoards = dataManager.user.starredBoards
        .filter(st => folder.boards
            .find(b => b.name === st.name && b.foldername === st.foldername) === undefined )
    res.status(200).send(`Folder <${folderName}> deleted.`)
})

homeRoute.delete('/boards/:boardName/:folderName', function(req: express.Request, res: express.Response) { 
    const folderName = req.params.folderName;
    const boardName = req.params.boardName;

    const folder = dataManager.user.folders.find(f => f.name === folderName);
    if(folder === undefined) {
        res.status(406).send("Folder Doesn't exist")
        return;
    }

    const board = folder.boards.find(b => b.name === boardName);
    if(board === undefined) { 
        res.status(406).send("Board Doesn't exist")
        return;
    }

    folder.boards = folder.boards.filter(b => b.name !== boardName);
    dataManager.user.starredBoards = dataManager.user.starredBoards
        .filter(st => st.name !== board.name && st.foldername !== board.foldername);

    res.status(200).send(`Board <${boardName}> from folder <${folderName}> deleted.`)
})

export default homeRoute;