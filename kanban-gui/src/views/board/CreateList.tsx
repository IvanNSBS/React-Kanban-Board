import React, { useContext, useState } from "react";
import { LocalizerContext } from "../../contexts/Localizer";
import { AddListBtn, CancelButton, ContentWrapper, InactiveText, ListNameInput, ActiveContentWrapper, ButtonsContainer } from "./CreateList.styles";
import { GoPlus } from 'react-icons/go';
import { VscChromeClose } from 'react-icons/vsc';

interface ActivateCreate {
    isActive: boolean;
    setIsActive(val: boolean): void;
}

const CreateList: React.FC<ActivateCreate> = function(props) 
{
    const [name, setName] = useState<string>("");
    const localizer = useContext(LocalizerContext);

    const inactiveText = localizer.getTextById(localizer.texts.input_add_new_list);
    const activeText = localizer.getTextById(localizer.texts.input_ph_insert_list_title);

    function onClickAdd(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
    }

    function onClickCancel(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        setName("");
        props.setIsActive(false);
    }

    const InactiveRender =  <InactiveText onClick = { e => { props.setIsActive(true); e.stopPropagation(); } }>
                                <GoPlus/>
                                {inactiveText}
                            </InactiveText>

    const ActiveRender =    <ActiveContentWrapper>
                                <ListNameInput 
                                    value   = {name}
                                    placeholder = { activeText }
                                    onClick = { e => e.stopPropagation() } 
                                    onChange = { e => setName(e.target.value) }>
                                </ListNameInput>
                                <ButtonsContainer>
                                    <AddListBtn   onClick = { onClickAdd }>{localizer.getTextById(localizer.texts.btn_add_list)}</AddListBtn>
                                    <CancelButton onClick = { onClickCancel }><VscChromeClose/></CancelButton>
                                </ButtonsContainer>
                            </ActiveContentWrapper>

    return(
        <form>
            <ContentWrapper>
                { props.isActive ? ActiveRender : InactiveRender }
            </ContentWrapper>
        </form>
    )
}

export default CreateList;