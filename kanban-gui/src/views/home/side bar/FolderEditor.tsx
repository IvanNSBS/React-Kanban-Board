import React, { useContext, useState, useRef, useEffect } from "react";
import { LocalizerContext } from "../../../contexts/Localizer";
import { MdClose } from "react-icons/md";
import * as st from "./FolderEditor.styles";

interface Editor {
    name: string;
    iconUrl?: string;
    finish(newName: string, newIconUrl?: string): void;
    delete(): void;
    cancel(): void;
}

const FolderEditor: React.FC<Editor> = function(props) 
{
    const nameInput = useRef<HTMLInputElement>(null);
    const [name, setName] = useState<string>(props.name);
    const [iconUrl, setIconUrl] = useState<string | undefined>(props.iconUrl);
    const localizer = useContext(LocalizerContext);

    const namePh = localizer.getTextById(localizer.texts.input_create_folder_placeholder);
    const urlPh = localizer.getTextById(localizer.texts.input_create_folder_icon_placeholder);

    useEffect(() => {
        nameInput.current?.focus();
    }, [])

    function submit(e: React.FormEvent<HTMLFormElement>) 
    {
        e.preventDefault();
        props.finish(name, iconUrl);
    }

    function tryDelete() {
        if(confirm(localizer.getTextById(localizer.texts.txt_confirm_delete)))
            props.delete();
    }

    return(
        <st.FromWrapper onSubmit={ submit }>
            <st.InputsWrapper>
                <st.StringInputs ref={nameInput}
                                 placeholder={namePh} 
                                 value={name} 
                                 onChange={e => setName(e.target.value)}>
                </st.StringInputs>
                <st.StringInputs placeholder={urlPh} 
                                 value={iconUrl} 
                                 onChange={e => setIconUrl(e.target.value)}>
                </st.StringInputs>
            </st.InputsWrapper>

            <st.ButtonsWrapper>
                <st.ButtonsWrapper>
                    <st.EditBtn type='submit' onClick = { () => props.finish(name, iconUrl) }>
                        {localizer.getTextById(localizer.texts.btn_txt_edit)}
                    </st.EditBtn>
                    <st.CancelBtn type='button' onClick={props.cancel}>
                        <MdClose/>
                    </st.CancelBtn>
                </st.ButtonsWrapper>

                <st.DeleteBtn type='button' onClick={props.delete}>
                    {localizer.getTextById(localizer.texts.btn_txt_delete)}
                </st.DeleteBtn>
            </st.ButtonsWrapper>
        </st.FromWrapper>
    )
}

export default FolderEditor;