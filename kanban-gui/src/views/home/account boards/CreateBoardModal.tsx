import React, { useEffect, useRef, useState } from "react";
import BoardsFolder from "../../../../../data/account/boardsFolder";

import * as styles from "./CreateBoardModal.styles";
import FlexDiv from "../../../common/styles/FlexDiv";
import Palette from '../../../common/colorpalette'

interface CreateBoard {
    isOpen: boolean;
    folders: BoardsFolder[];
    index: number;
    setActive(value: boolean): void;
    createBoard(index: number, name: string): void;
}

const CreateBoardModal: React.FC<CreateBoard> = function(props) 
{
    const [name, setName] = useState<string>("");
    const selectRef = useRef<HTMLSelectElement>(null);
    const createBtn = useRef<HTMLButtonElement>(null);

    const disableScroll = function(){
        const x = window.scrollX;
        const y = window.screenY;
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(x, y);
        };
    }

    const close = function() {
        setName("");
        props.setActive(false);
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


    if(props.isOpen){
        
        const options = props.folders.map((folder, idx) => {
            return <option value={folder.name}>{folder.name}</option>
        })

        return(
            <styles.ModalBackground onClick={close}>
                <styles.AbsoluteDiv onClick={e => e.stopPropagation()}>

                    <FlexDiv justify="space-between" height="95px">
                        <FlexDiv direction="column" alignContent="space-between" 
                                 width="100%" padding="7px" backgroundColor={Palette.boardCard} borderRadius="8px">

                                <FlexDiv justify="space-between">
                                    <styles.Input type="text" placeholder="Nome do Quadro" onChange={e => setName(e.target.value)}></styles.Input>
                                    <styles.Close onClick={close}>x</styles.Close>
                                </FlexDiv>

                            <styles.Dropdown ref={selectRef} name={props.folders[0].name}>
                                {options}
                            </styles.Dropdown>
                        </FlexDiv>
                        <styles.Upload>Upload Thumbnail</styles.Upload>
                    </FlexDiv>

                    <form>
                        <styles.Create onClick={createBoard}>Criar Quadro</styles.Create>
                    </form>

                </styles.AbsoluteDiv>
            </styles.ModalBackground>
        )
    }

    return null;
}

export default CreateBoardModal;