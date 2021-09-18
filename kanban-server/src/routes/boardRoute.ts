import express, { Router } from 'express';
import Board from '../../../data/board/board';
import dataManager from '../dataManager';

const boardRoute = Router();

boardRoute.get('/:name/:boardName', function (req: express.Request, res: express.Response) {
    const folderName = req.params.name;
    const boardName = req.params.boardName;

    const folder = dataManager.user.folders.find(f => f.name === folderName);
    let board = undefined;
    if(folder !== undefined)
        board = folder.boards.find(b => b.name === boardName);

    res.send(`folderName: ${folderName} | boardName: ${boardName} | data: ${JSON.stringify(board)}`)
});

// boardRoute.get('/folders', function (req: express.Request, res: express.Response) {
//     if(dataManager.user.folders.length == 0)
//         res.status(204).send('No folders created')
//     else
//         res.status(200).send( JSON.stringify(dataManager.user.folders) );
// })

// boardRoute.post('/folders', function(req: express.Request, res: express.Response) {
//     const folderName = req.body.name;
//     const iconUrl = req.body.iconUrl;

//     const status = dataManager.createFolder(folderName, iconUrl);
//     res.status(200).send(`Folder with name ${folderName} created`);
// })

export default boardRoute;