import React, { useContext, useEffect, useState, useRef } from "react";
import { LocalizerContext } from "../../contexts/Localizer";
import { AddListBtn, CancelButton, ContentWrapper, InactiveText, ListNameInput, ActiveContentWrapper, ButtonsContainer } from "./CreateList.styles";
import { GoPlus } from 'react-icons/go';
import { VscChromeClose } from 'react-icons/vsc';

interface ActivateCreate {
    isActive: boolean;
    setIsActive(val: boolean): void;
    createList(name: string): void;
}

const CreateList: React.FC<ActivateCreate> = function(props) 
{
    const textArea = useRef<HTMLTextAreaElement>(null);
    const [name, setName] = useState<string>("");
    const localizer = useContext(LocalizerContext);

    const inactiveText = localizer.getTextById(localizer.texts.input_add_new_list);
    const activeText = localizer.getTextById(localizer.texts.input_ph_insert_list_title);

    function onOpenForm(e: React.MouseEvent) {
        e.stopPropagation();
        props.setIsActive(true);
    }

    function onClickAdd(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        if(name === "")
            return;
        
        props.createList(name);
        setName("");
        props.setIsActive(false);
    }

    function onClickCancel(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        setName("");
        props.setIsActive(false);
    }

    useEffect(() => {
        if(textArea.current !== null && name !== "")
        {
            textArea.current.style.height = 'auto';
            textArea.current.style.height = textArea.current.scrollHeight + 'px';
        }
    }, [name])

    useEffect(() => {
        if(props.isActive)
            textArea.current?.focus();
    }, [props.isActive])

    const InactiveRender =  <InactiveText 
                                ref={textArea}
                                onClick = { onOpenForm }>
                                <GoPlus/>
                                {inactiveText}
                            </InactiveText>

    const ActiveRender =    <ActiveContentWrapper>
                                <ListNameInput 
                                    value   = {name}
                                    placeholder = { activeText }
                                    ref = {textArea}
                                    onClick = { e => e.stopPropagation() } 
                                    onChange = { e => setName(e.target.value) }>
                                </ListNameInput>
                                <ButtonsContainer>
                                    <AddListBtn   onClick = { onClickAdd }>{localizer.getTextById(localizer.texts.btn_add_list)}</AddListBtn>
                                    <CancelButton onClick = { onClickCancel }><VscChromeClose/></CancelButton>
                                </ButtonsContainer>
                            </ActiveContentWrapper>

    return(
        <form style={{paddingLeft: '6px'}}>
            <ContentWrapper>
                { props.isActive ? ActiveRender : InactiveRender }
            </ContentWrapper>
        </form>
    )
}

export default CreateList;