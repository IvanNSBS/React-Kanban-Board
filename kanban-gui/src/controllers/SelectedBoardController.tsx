import Board from "../../../data/board/board";

export default class SelectedBoardController
{
    private _selectedBoard: Board | null;

    constructor(board: Board | null){
        this._selectedBoard = board;
    }   

    public get selectedBoard() { return this._selectedBoard; }
    public set selectedBoard(value: Board | null) { this._selectedBoard = value; }
}
