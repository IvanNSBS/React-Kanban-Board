import React, { useEffect, useRef, useState, useContext } from "react";
import * as styles from "./CreateBoardModal.styles";
import FlexDiv from "../../../common/styles/FlexDiv";
import Palette from '../../../common/colorpalette'
import { LocalizerContext } from "../../../contexts/Localizer";

interface CreateBoard {
    isOpen: boolean;
    index: number;
    setActive(value: boolean): void;
    createBoard(index: number, name: string): void;
}

const CreateBoardModal: React.FC<CreateBoard> = function(props) 
{
    const [name, setName] = useState<string>("");
    const createBtn = useRef<HTMLButtonElement>(null);
    const localizer = useContext(LocalizerContext);

    const disableScroll = function(){
        const x = window.scrollX;
        const y = window.screenY;
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(x, y);
        };
    }

    const createBoard = function(e: React.MouseEvent){
        e.preventDefault();
        props.createBoard(props.index, name);
        props.setActive(false);
    }

    useEffect(() => {
        if(props.isOpen){
            disableScroll();
            if(createBtn.current !== null)
                createBtn.current.disabled = name === "";
        }

        return function(){
            window.onscroll = function() {};
        }
    }, [props.isOpen, name])

    return(
        <styles.ModalBackground onClick={() => props.setActive(false)}>
            <styles.AbsoluteDiv onClick={e => e.stopPropagation()}>

                <FlexDiv justify="space-between" height="95px">
                    <FlexDiv direction="column" alignContent="space-between" 
                                width="100%" padding="7px" backgroundColor={Palette.boardCard} borderRadius="8px">

                            <FlexDiv justify="space-between">
                                <styles.Input type="text" placeholder={localizer.getTextById(localizer.texts.input_board_modal_placeholder)} 
                                              onChange={e => setName(e.target.value)}>
                                </styles.Input>
                                <styles.Close onClick={() => props.setActive(false)}>x</styles.Close>
                            </FlexDiv>

                    </FlexDiv>
                    <styles.Upload>Upload Thumbnail</styles.Upload>
                </FlexDiv>

                <form>
                    <styles.Create onClick={createBoard}>{localizer.getTextById(localizer.texts.btn_txt_create)}</styles.Create>
                </form>

            </styles.AbsoluteDiv>
        </styles.ModalBackground>
    )
}

export default CreateBoardModal;