import React, { useContext, useState } from "react";
import { LocalizerContext } from "../../../contexts/Localizer";
import { MdClose } from "react-icons/md";
import * as st from "./FolderEditor.styles";

interface Editor {
    name: string;
    iconUrl?: string;
    onFinish(newName: string, newIconUrl?: string): void;
}

const FolderEditor: React.FC<Editor> = function(props) 
{
    const [name, setName] = useState<string>(props.name);
    const [iconUrl, setIconUrl] = useState<string | undefined>(props.iconUrl);
    const localizer = useContext(LocalizerContext);

    const namePh = localizer.getTextById(localizer.texts.input_create_folder_placeholder);
    const urlPh = localizer.getTextById(localizer.texts.input_create_folder_icon_placeholder);

    return(
        <st.FromWrapper>
            <st.InputsWrapper>
                <st.StringInputs placeholder={namePh} 
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
                    <st.EditBtn type='button'>
                        {localizer.getTextById(localizer.texts.btn_txt_edit)}
                    </st.EditBtn>
                    <st.CancelBtn type='button'>
                        <MdClose/>
                    </st.CancelBtn>
                </st.ButtonsWrapper>

                <st.DeleteBtn type='button'>
                    {localizer.getTextById(localizer.texts.btn_txt_delete)}
                </st.DeleteBtn>
            </st.ButtonsWrapper>
        </st.FromWrapper>
    )
}

export default FolderEditor;