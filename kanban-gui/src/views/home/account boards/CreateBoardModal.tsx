import React, { useEffect, useRef } from "react";
import BoardsFolder from "../../../../../data/account/boardsFolder";

import * as styles from "./CreateBoardModal.styles";
import FlexDiv from "../../../common/styles/FlexDiv";
import Palette from '../../../common/colorpalette'

interface CreateBoard {
    isOpen: boolean;
    folders: BoardsFolder[];
    setActive(value: boolean): void;
}

const CreateBoardModal: React.FC<CreateBoard> = function(props) 
{
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const disableScroll = function(){
        const x = window.scrollX;
        const y = window.screenY;
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(x, y);
        };
    }

    const deactivate = function(){
        props.setActive(false);
    }

    const createBoard = function(){
        deactivate();
    }

    useEffect(() => {
        if(props.isOpen)
            disableScroll();

        return function(){
            window.onscroll = function() {};
        }
    }, [props.isOpen])

    if(props.isOpen){
        
        const options = props.folders.map((folder, idx) => {
            return <option value={folder.name}>{folder.name}</option>
        })

        return(
            <styles.ModalBackground onClick={deactivate}>
                <styles.AbsoluteDiv onClick={e => e.stopPropagation()}>

                    <FlexDiv justify="space-between" height="95px">
                        <FlexDiv direction="column" alignContent="space-between" 
                                 width="100%" padding="7px" backgroundColor={Palette.boardCard} borderRadius="8px">

                                <FlexDiv justify="space-between">
                                    <styles.Input ref={inputRef} type="text" placeholder="Nome do Quadro"></styles.Input>
                                    <styles.Close onClick={deactivate}>x</styles.Close>
                                </FlexDiv>

                            <styles.Dropdown ref={selectRef} name={props.folders[0].name}>
                                {options}
                            </styles.Dropdown>
                        </FlexDiv>
                        <styles.Upload>Upload Thumbnail</styles.Upload>
                    </FlexDiv>

                    <styles.Create onClick={createBoard}>Criar Quadro</styles.Create>

                </styles.AbsoluteDiv>
            </styles.ModalBackground>
        )
    }

    return null;
}

export default CreateBoardModal;