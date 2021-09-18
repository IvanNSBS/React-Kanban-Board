import React, { useRef, useState } from "react";
import { CardTitleInput, ListHeader } from "./CardList.styles";
import { BsThreeDots } from 'react-icons/bs'

interface CardListData {
    name: string;
    changeName(newName: string): void;
}

const CardListTitle: React.FC<CardListData> = function(props) 
{
    const titleInput = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string>(props.name);
    
    function onStopEditing() {
        titleInput.current?.blur();
        props.changeName(name);
    }

    return(
        <form onSubmit={e => { e.preventDefault(); onStopEditing(); }}>
            <ListHeader>
                <CardTitleInput 
                    value={name}
                    ref={titleInput}
                    onChange={e => setName(e.target.value)}
                    onBlur={onStopEditing}>
                </CardTitleInput>
                <button type='button'><BsThreeDots/></button>
            </ListHeader>
        </form>
    );
}

export default CardListTitle;