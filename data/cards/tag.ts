export default class Tag {
    private _color: string;
    private _name: string;

    constructor(color: string, name: string){
        this._color = color;
        this._name = name;
    }

    public get color() { return this._color; }
    public get name() { return this._name;} 

    public set color(value: string) { this._color = value;}
    public set name(value: string) { this._name = value; }
}