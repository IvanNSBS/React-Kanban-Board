import React, { useState, useContext, useRef } from "react";
import { UserControllerContext } from "../Home";
import FolderSideBar from "./FolderSideBar";
import FolderCreator from './FolderCreator';
import * as styles from './SideBar.styles';

import * as modal from './CreateFolderModal.styles';


const SideBar: React.FC = function() 
{
    const userController = useContext(UserControllerContext);

    const [folders, setFolders] = useState(userController.getFolders());
    const [creatingFolder, setCreatingFolder] = useState<boolean>(false);

    const renderedFolders = folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderSideBar key={idx} name={folder.name} iconUrl={folder.iconLink}/>
        )
    })

    const tryCreateNewFolder = function(name: string): boolean{
        const prevLength = folders.length;
        const newFolders = userController.createFolder(name);
        const created = newFolders.length > prevLength;

        if(created){
            setFolders(newFolders);
            setCreatingFolder(false);
        }

        return created;
    }

    return(
        <styles.WorkspaceContainer onClick={() => setCreatingFolder(false)}>

            <styles.AllBoards to="/">Todos os Quadros</styles.AllBoards>
            <div>
                <styles.CreateFolder direction="row" justify="space-between" margin="5px 0 5px 0"
                                     onClick={ e => {setCreatingFolder(true); e.stopPropagation(); }}>
                    <label>Pastas</label>
                    <button> + </button>
                </styles.CreateFolder>
                {renderedFolders}
            </div>

            {
                creatingFolder && 
                <FolderCreator creationFunction={ name => tryCreateNewFolder(name) }></FolderCreator>
            }
        </styles.WorkspaceContainer>
    );
}

export default SideBar;