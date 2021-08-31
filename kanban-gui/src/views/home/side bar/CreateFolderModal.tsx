import React, { useEffect, useRef, useState } from "react";

import * as styles from "./CreateFolderModal.styles";
import FlexDiv from "../../../common/styles/FlexDiv";
import Palette from '../../../common/colorpalette'
import { CreateBoard } from "../account boards/BoardCard.styles";
import { Close } from "../account boards/CreateBoardModal.styles";

interface CreateFolder {
    isOpen: boolean;
    setActive(value: boolean): void;
    onCreate(name: string): void;
}

const CreateFolderModal: React.FC<CreateFolder> = function(props) 
{
    const [title, setTitle] = useState<string>("");
    const createBtn = useRef<HTMLButtonElement | null>(null);

    const disableScroll = function(){
        const x = window.scrollX;
        const y = window.screenY;
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(x, y);
        };
    }

    const close = function() {
        setTitle("");
        props.setActive(false);
    }

    const createBoard = function(e: React.MouseEvent) {
        e.preventDefault();
        props.onCreate(title);
        close();
    }

    useEffect(() => {
        if(props.isOpen){
            disableScroll();
            if(createBtn.current !== null)
                createBtn.current.disabled = title === "";
        }

        return function(){
            window.onscroll = function() {};
        }
    }, [props.isOpen, title])

    if(props.isOpen)
    {
        return(
            <styles.ModalBackground onClick={() => props.setActive(false)}>
                <styles.AbsoluteDiv onClick={e => e.stopPropagation()}>

                    <FlexDiv justify="space-between" height="95px">
                        <FlexDiv direction="column" alignContent="space-between" 
                                 width="100%" padding="7px" backgroundColor={Palette.boardCard} borderRadius="8px">

                                <FlexDiv justify="space-between">
                                    <styles.Input type="text" placeholder="Nome da Pasta"
                                                  onChange={e => setTitle(e.target.value)}>
                                    </styles.Input>
                                    <styles.Close onClick={close}>
                                        x
                                    </styles.Close>
                                </FlexDiv>
                        </FlexDiv>
                    </FlexDiv>
                    <form>
                        <styles.Create ref={createBtn} onClick={createBoard}>Criar Pasta</styles.Create>
                    </form>
                </styles.AbsoluteDiv>
            </styles.ModalBackground>
        )
    }

    return null;
}

export default CreateFolderModal;