import * as modal from './CreateFolderModal.styles';
import React, {useState, useEffect, useRef} from "react";

interface CreationFunction{
    creationFunction(name: string): boolean;
}

const FolderCreator: React.FC<CreationFunction> = function(props)
{
    const [newFolder, setNewFolder] = useState<string>("");
    const [createDisabled, setCreateDisabled] = useState<boolean>(true);
    const createButton = useRef<HTMLButtonElement>(null);

    function onClickCreate(e: React.MouseEvent){
        e.stopPropagation(); 
        e.preventDefault();
        const created: boolean = props.creationFunction(newFolder); 

        if(!created) {
            // TODO: Show error message
        }
    }

    useEffect(() => {
        setCreateDisabled(newFolder === "");
        if(createButton.current !== null)
            createButton.current.disabled = createDisabled;

    }, [newFolder])

    return(
        <modal.Background>
            <form>
                <modal.Input onChange={ e => setNewFolder(e.target.value) } onClick = {e => e.stopPropagation() }
                             type="text" placeholder="Insira um nome para a pasta...">
                </modal.Input>
                <div>
                    <modal.Create ref={createButton} onClick={onClickCreate}>
                        Criar
                    </modal.Create>
                    <modal.Close>X</modal.Close>
                </div>
            </form>
        </modal.Background> 
    );
}

export default FolderCreator;