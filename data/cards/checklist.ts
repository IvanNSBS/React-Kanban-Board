import ChecklistItem from "./checklistItem";

export default class Checklist {
    private _title: string;
    private _items: ChecklistItem[];
    
    constructor(title: string){
        this._title = title;
        this._items = [];
    }

    public get length() { return this._items.length; }
    public get title() { return this._title; }
    public set title(value: string) { this._title = value; }
    

    public addItem(itemText: string){
        this._items.push( new ChecklistItem(itemText));
    }

    public setItemText(value: string, index: number): boolean {
        if(index < 0 || index >= this.length)
            return false;

        this._items[index].text = value;
        return true;
    }
    
    public setItemCompleted(value: boolean, index: number): boolean {
        if(index < 0 || index >= this.length)
            return false;

        this._items[index].completed = value;
        return true;
    }
}