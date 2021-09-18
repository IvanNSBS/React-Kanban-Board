import express, { Router } from 'express';
import Board from '../../../data/board/board';
import CardsList from '../../../data/board/cardList';
import Card from '../../../data/cards/card';
import dataManager from '../dataManager';

const boardRoute = Router();

function validateFolderAndBoard(folderName: string, boardName: string): [boolean, string] {
    const folder = dataManager.user.folders.find(f => f.name === folderName);
    if(folder === undefined) {
        return [false, "Folder Doesn't Exist"];
    }

    let board = folder.boards.find(b => b.name === boardName);
    if(board === undefined){
        return [false, "Board Doesn't Exist"];
    }

    return [true, "Folder is Valid"];
}

function findBoard(folderName: string, boardName: string): Board | undefined {
    return dataManager.user.folders.find(f => f.name === folderName)?.boards.find(b => b.name === boardName); 
}

boardRoute.get('/:name/:boardName', function (req: express.Request, res: express.Response) {
    const folderName = req.params.name;
    const boardName = req.params.boardName;

    const folder = dataManager.user.folders.find(f => f.name === folderName);
    let board = undefined;
    if(folder !== undefined)
        board = folder.boards.find(b => b.name === boardName);

    res.send(`folderName: ${folderName} | boardName: ${boardName} | data: ${JSON.stringify(board)}`)
});

boardRoute.post('/list', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const boardName = req.body.boardName;
    const listName = req.body.listName;

    const [isValid, message] = validateFolderAndBoard(folderName, boardName);
    if(!isValid){
        res.status(406).send(message)
        return;
    }
    
    const board = findBoard(folderName, boardName);
    board?.cardsCollection.push( new CardsList(listName) );
    res.status(200).send("List Created");
});

boardRoute.post('/list/card', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const boardName = req.body.boardName;
    const listIndex = req.body.listIndex;
    const cardTitle = req.body.cardTitle;
    
    const [isValid, message] = validateFolderAndBoard(folderName, boardName);
    if(!isValid) {
        res.status(406).send(message)
        return;
    }

    const board = findBoard(folderName, boardName);
    if(board === undefined) {
        res.status(406).send(message)
        return; 
    }

    if(listIndex < 0 || listIndex >= board?.cardsCollection.length) {
        res.status(406).send("Invalid list index")
        return;
    }

    board?.cardsCollection[listIndex].cards.push( new Card(cardTitle) );
    res.status(200).send("Card Created");
});

boardRoute.put('/name', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const prevName = req.body.prevName;
    const newName = req.body.newName;
    
    const [isValid, message] = validateFolderAndBoard(folderName, prevName);
    if(!isValid) {
        res.status(406).send(message)
        return;
    }

    const board = findBoard(folderName, prevName);
    if(board === undefined) {
        res.status(406).send(message)
        return; 
    }

    board.name = newName;
    res.status(200).send(`Board <${prevName}> at folder <${folderName}> changed name to <${newName}>`)
});

boardRoute.put('/list/name', function (req: express.Request, res: express.Response) {
    const folderName = req.body.folderName;
    const boardName = req.body.boardName;
    const listIdx = req.body.listIdx;
    const newName = req.body.newName;

    const [isValid, message] = validateFolderAndBoard(folderName, boardName);
    if(!isValid) {
        res.status(406).send(message)
        return;
    }

    const board = findBoard(folderName, boardName);
    // This should never happen!!
    if(board === undefined) {
        res.status(406).send(message)
        return; 
    }

    board.cardsCollection[listIdx].name = newName;
    res.status(200).send(`Changed list idx <${listIdx}> name to <${newName}>`)
});

boardRoute.put('/list/card/name', function (req: express.Request, res: express.Response) {
    
});

export default boardRoute;