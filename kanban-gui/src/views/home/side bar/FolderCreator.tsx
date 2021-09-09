import * as modal from './FolderCreator.styles';
import React, {useState, useEffect, useRef, useContext} from "react";
import { LocalizerContext } from '../../../contexts/Localizer';
import FlexDiv from '../../../common/styles/FlexDiv';

interface CreationFunction{
    creationFunction(name: string, iconUrl?:string): Promise<boolean>;
}

const FolderCreator: React.FC<CreationFunction> = function(props)
{
    const [newFolder, setNewFolder] = useState<string>("");
    const [newFolderIconUrl, setNewFolderIconUrl] = useState<string>("");
    const [createDisabled, setCreateDisabled] = useState<boolean>(true);
    const createButton = useRef<HTMLButtonElement>(null);
    const folderNameInput = useRef<HTMLInputElement>(null);
    const localizer = useContext(LocalizerContext);

    function onClickCreate(e: React.MouseEvent){
        e.stopPropagation(); 
        e.preventDefault();
        const url: string | undefined = newFolderIconUrl === "" ? undefined : newFolderIconUrl;

        props.creationFunction(newFolder, url).then(created => {
            if(!created) {
                // TODO: Show error message
                alert("Not Created")
            }
        })
        .catch(e => {
            alert(e);
        }); 
    }

    function openIconSelectModal(e: React.MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
    }

    useEffect(() => {
        if(newFolder === "" && folderNameInput.current != null)
            folderNameInput.current.focus();
            
        setCreateDisabled(newFolder === "");
        if(createButton.current !== null)
            createButton.current.disabled = createDisabled;

    }, [newFolder])

    return(
        <modal.Background>
            <form>
                <modal.Input onChange={ e => setNewFolder(e.target.value) } onClick = {e => e.stopPropagation() }
                             type="text" placeholder={localizer.getTextById(localizer.texts.input_create_folder_placeholder)} 
                             ref={folderNameInput}>
                </modal.Input>
                <div>
                    <FlexDiv>
                        <modal.Input onChange={ e => setNewFolderIconUrl(e.target.value) } onClick = {e => e.stopPropagation() }
                                    type="text" placeholder={localizer.getTextById(localizer.texts.input_create_folder_icon_placeholder)}>
                        </modal.Input>
                        <modal.Create type='button' onClick={openIconSelectModal} style={{marginLeft: '10px', width:'auto'}}>
                            {localizer.getTextById(localizer.texts.btn_select_or_upload_img)}
                        </modal.Create>
                    </FlexDiv>
                    <modal.Create type='submit' ref={createButton} onClick={onClickCreate}>
                        {localizer.getTextById(localizer.texts.btn_txt_create)}
                    </modal.Create>
                    <modal.Close>X</modal.Close>
                </div>
            </form>
        </modal.Background> 
    );
}

export default FolderCreator;