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

    return(
        <st.FromWrapper>
            <st.InputsWrapper>
                <st.StringInputs defaultValue={"Server Folder"}/>
                <st.StringInputs defaultValue={"htto://asdasdas.com"}/>
            </st.InputsWrapper>

            <st.ButtonsWrapper>
                <div>
                    <st.EditBtn type='button'>
                        {localizer.getTextById(localizer.texts.btn_txt_create)}
                    </st.EditBtn>
                    <st.CancelBtn type='button'>
                        <MdClose/>
                    </st.CancelBtn>
                </div>

                <st.DeleteBtn type='button'>
                    Excluir
                </st.DeleteBtn>
            </st.ButtonsWrapper>
        </st.FromWrapper>
    )
}

export default FolderEditor;