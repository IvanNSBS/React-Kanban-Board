import React, { useContext } from "react";
import { LocalizerContext } from "../../contexts/Localizer";
import { AddListBtn, CancelButton, ContentWrapper, ListNameInput } from "./CreateList.styles";

const CreateList: React.FC = function() 
{
    const localizer = useContext(LocalizerContext);

    return(
        <form>
            <ContentWrapper>
                <ListNameInput value={`+ ${localizer.getTextById(localizer.texts.input_add_new_list)}`}></ListNameInput>
                <div>
                    <AddListBtn>{localizer.getTextById(localizer.texts.btn_add_list)}</AddListBtn>
                    <CancelButton>X</CancelButton>
                </div>
            </ContentWrapper>
        </form>
    )
}

export default CreateList;