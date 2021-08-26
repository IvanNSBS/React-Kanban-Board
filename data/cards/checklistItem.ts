export default class ChecklistItem {
    private _completed: boolean;
    private _text: string;

    constructor(text: string){
        this._text = text;
        this._completed = false;
    }

    public get completed():boolean { return this._completed; }
    public get text():string { return this._text; }

    public set completed(value: boolean) { this._completed = value; }
    public set text(value: string) { this._text = value; }
}