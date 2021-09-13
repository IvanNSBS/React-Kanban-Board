import React from "react";
import { AddListBtn, CancelButton, ContentWrapper, ListNameInput } from "./CreateList.styles";

const CreateList: React.FC = function() 
{
    return(
        <form>
            <ContentWrapper>
                <ListNameInput value='+ Adicionar outra lista'></ListNameInput>
                <div>
                    <AddListBtn>Adicionar Lista</AddListBtn>
                    <CancelButton>X</CancelButton>
                </div>
            </ContentWrapper>
        </form>
    )
}

export default CreateList;