import React, { useContext, useEffect, useRef, useState } from "react";
import { LocalizerContext } from "../../contexts/Localizer";
import { ListCard, CardCreator } from "./Card.styles";
import { VscChromeClose } from 'react-icons/vsc';
import * as st from "./CreateList.styles";
import SelectedBoardContext from "../../contexts/SelectedBoard";

interface CreationInterface {
    index: number;
    onFinishCreate(): void;
}

const CreationCard: React.FC<CreationInterface> = function(props)
{
    const [title, setTitle] = useState<string>("");
    const textArea = useRef<HTMLTextAreaElement>(null);
    const localizer = useContext(LocalizerContext);
    const boardController = useContext(SelectedBoardContext);
    
    function onClickAdd(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        if(title === "")
            return;

        boardController.addCardToList(props.index, title);
        props.onFinishCreate();
    }

    useEffect(() => {
        textArea.current?.focus();
        if(textArea.current !== null){
            textArea.current.style.height = 'auto';
            textArea.current.style.height = textArea.current.scrollHeight + 'px';
        }
    }, [title])

    return(
        <form>
            <ListCard>
                <CardCreator
                    value={title}
                    placeholder={localizer.getTextById(localizer.texts.input_ph_insert_card_title)} 
                    onClick={e => e.stopPropagation()}
                    onChange={e => setTitle(e.target.value)}
                    ref={textArea}>
                </CardCreator>
            </ListCard>
            <st.ButtonsContainer>
                <st.AddListBtn onClick={onClickAdd}>
                    {localizer.getTextById(localizer.texts.btn_add_card)}
                </st.AddListBtn>
                <st.CancelButton>
                    <VscChromeClose/>
                </st.CancelButton>
            </st.ButtonsContainer>
        </form>
    );
}

export default CreationCard;