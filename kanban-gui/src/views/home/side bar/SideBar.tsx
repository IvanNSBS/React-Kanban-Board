import React, { useState, useContext } from "react";
import { UserControllerContext } from "../Home";
import FolderSideBar from "./FolderSideBar";
import * as styles from './SideBar.styles';
import CreateFolderModal from "./CreateFolderModal";


const SideBar: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const [folders, setFolders] = useState(userController.getFolders());
    const [creatingFolder, setCreatingFolder] = useState<boolean>(false);

    const renderedFolders = folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderSideBar name={folder.name} iconUrl={folder.iconLink}/>
        )
    })

    return(
        <styles.WorkspaceContainer>
            <CreateFolderModal isOpen={creatingFolder} setActive={setCreatingFolder}
                               onCreate={name => setFolders(userController.createFolder(name))}>
            </CreateFolderModal>
            <styles.AllBoards to="/">Todos os Quadros</styles.AllBoards>
            <div>
                <styles.CreateFolder direction="row" justify="space-between" margin="5px 0 5px 0"
                                     onClick={() => setCreatingFolder(true)}>
                    <label>Pastas</label>
                    <button> + </button>
                </styles.CreateFolder>
                {renderedFolders}
            </div>
        </styles.WorkspaceContainer>
    );
}

export default SideBar;