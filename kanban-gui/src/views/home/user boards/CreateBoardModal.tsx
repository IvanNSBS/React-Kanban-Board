import React, { useEffect, useRef, useState, useContext } from "react";
import * as styles from "./CreateBoardModal.styles";
import FlexDiv from "../../../common/styles/FlexDiv";
import Palette from '../../../common/colorpalette'
import { LocalizerContext } from "../../../contexts/Localizer";
import user_actions_status from "../../../../../data/request_statuses/user_statuses";

interface CreateBoard {
    isOpen: boolean;
    index: number;
    setActive(value: boolean): void;
    createBoard(index: number, name: string, bgImgUrl?:string): Promise<number>;
}

const CreateBoardModal: React.FC<CreateBoard> = function(props) 
{
    const [name, setName] = useState<string>("");
    const [bgImgUrl, setBgImgUrl] = useState<string | undefined>(undefined);
    const nameInput = useRef<HTMLInputElement>(null);
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

    const createBoard = function(e: React.MouseEvent)
    {        
        e.preventDefault();
    
        if(name === "")
            return;
    
        props.createBoard(props.index, name, bgImgUrl).then(status => {
            if(status === user_actions_status.success) {
                props.setActive(false);
            }
            else if(status === user_actions_status.already_exists){
                alert("Board already exists")
            }
        })
        .catch(e => {
            alert(e);
        });
    }

    const openImageSelection = function(e: React.MouseEvent) {
        e.stopPropagation();
        e.preventDefault();
    }

    useEffect(() => {
        if(props.isOpen){
            disableScroll();
            if(createBtn.current !== null)
                createBtn.current.disabled = name === "";
        }

        nameInput?.current?.focus();

        return function(){
            window.onscroll = function() {};
        }
    }, [props.isOpen, name])

    return(
        <styles.ModalBackground onClick={() => props.setActive(false)}>
            <styles.AbsoluteDiv onClick={e => e.stopPropagation()}>
                <form>
                    <FlexDiv justify="space-between" height="95px">
                        <FlexDiv direction="column" alignContent="space-between" 
                                    width="100%" padding="7px" backgroundColor={Palette.boardCard} borderRadius="8px">

                                <FlexDiv justify="space-between">
                                    <styles.Input type="text" placeholder={localizer.getTextById(localizer.texts.input_board_modal_placeholder)} 
                                                  ref={nameInput}  onChange={e => setName(e.target.value)}>
                                    </styles.Input>
                                    <styles.Close type='button' onClick={() => props.setActive(false)}>x</styles.Close>
                                </FlexDiv>

                                <FlexDiv alignContent='center' alignItems='center'>
                                    <styles.Input type="text" 
                                                placeholder={localizer.getTextById(localizer.texts.input_create_folder_icon_placeholder)} 
                                                onChange={e => setBgImgUrl(e.target.value)}>
                                    </styles.Input>
                                    <styles.Create type='button' onClick={openImageSelection}
                                                   style={{margin: '0 0 0 10px'}}>
                                        {localizer.getTextById(localizer.texts.btn_select_or_upload_img)}
                                    </styles.Create>
                                </FlexDiv>

                        </FlexDiv>
                    </FlexDiv>
                    <styles.Create onClick={createBoard} type='submit'>
                        {localizer.getTextById(localizer.texts.btn_txt_create)}
                    </styles.Create>
                </form>
            </styles.AbsoluteDiv>
        </styles.ModalBackground>
    )
}

export default CreateBoardModal;