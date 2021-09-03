class EventHandlers
{
    private _events: Map<string, Function[]>;

    constructor() {
        this._events = new Map<string, Function[]>();
    }

    public addSubscriber(eventId: string, callBack: Function) {
        if(!this._events.has(eventId))
            this._events.set(eventId, []);
        
        this._events.get(eventId)?.push(callBack);
    }

    public removeSubscriber(eventId: string, callBack: Function) {
        this._events.get(eventId)?.filter( f => f !== callBack );
    }

    public invoke(eventId: string) {
        this._events.get(eventId)?.forEach(f => f());
    }
}

export const eventsHandlers = new EventHandlers();