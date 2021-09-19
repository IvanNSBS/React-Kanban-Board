import React, { useRef, useState, useContext } from "react";
import { CardTitleInput, ListHeader } from "./CardList.styles";
import { FaTrash } from 'react-icons/fa'
import { localizer, texts } from "../../contexts/Localizer";
import SelectedBoardContext from "../../contexts/SelectedBoard";

interface CardListData {
    name: string;
    index: number;
}

const CardListTitle: React.FC<CardListData> = function(props) 
{
    const titleInput = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string>(props.name);
    const boardController = useContext(SelectedBoardContext);

    function onStopEditing() {
        titleInput.current?.blur();
        boardController.changeListTitle(props.index, name);
    }

    function deleteCard(e: React.MouseEvent) {
        e.stopPropagation();
        e.preventDefault();

        const deleteTxt = localizer.getTextById(texts.txt_confirm_delete);
        if(confirm(deleteTxt))
            boardController.deleteList(props.index);
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
                <button type='button' onClick={deleteCard}>
                    <FaTrash/>
                </button>
            </ListHeader>
        </form>
    );
}

export default CardListTitle;