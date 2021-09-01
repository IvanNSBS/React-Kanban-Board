import * as modal from './FolderCreator.styles';
import React, {useState, useEffect, useRef, useContext} from "react";
import { LocalizerContext } from '../../../contexts/Localizer';

interface CreationFunction{
    creationFunction(name: string): boolean;
}

const FolderCreator: React.FC<CreationFunction> = function(props)
{
    const [newFolder, setNewFolder] = useState<string>("");
    const [createDisabled, setCreateDisabled] = useState<boolean>(true);
    const createButton = useRef<HTMLButtonElement>(null);
    const folderNameInput = useRef<HTMLInputElement>(null);
    const localizer = useContext(LocalizerContext);

    function onClickCreate(e: React.MouseEvent){
        e.stopPropagation(); 
        e.preventDefault();
        const created: boolean = props.creationFunction(newFolder); 

        if(!created) {
            // TODO: Show error message
        }
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
                    <modal.Create ref={createButton} onClick={onClickCreate}>
                        {localizer.getTextById(localizer.texts.btn_txt_create)}
                    </modal.Create>
                    <modal.Close>X</modal.Close>
                </div>
            </form>
        </modal.Background> 
    );
}

export default FolderCreator;