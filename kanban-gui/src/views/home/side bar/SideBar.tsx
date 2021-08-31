import React, { useState, useContext } from "react";
import { UserControllerContext } from "../Home";
import FolderSideBar from "./FolderSideBar";
import * as styles from './SideBar.styles';


const SideBar: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const [folders, setFolders] = useState(userController.getFolders());

    const createFolder = function(){
        setFolders(userController.createFolder("Dummy Folder From Sidebar", 'https://styles.redditmedia.com/t5_2w3z3/styles/communityIcon_s30x7u9v10a21.png'));
    }

    const renderedFolders = folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderSideBar name={folder.name} iconUrl={folder.iconLink}/>
        )
    })

    return(
        <styles.WorkspaceContainer>
            <styles.AllBoards to="/">Todos os Quadros</styles.AllBoards>
            <div>
                <styles.CreateFolder direction="row" justify="space-between" margin="5px 0 5px 0"
                                     onClick={createFolder}>
                    <label>Pastas</label>
                    <button> + </button>
                </styles.CreateFolder>
                {renderedFolders}
            </div>
        </styles.WorkspaceContainer>
    );
}

export default SideBar;