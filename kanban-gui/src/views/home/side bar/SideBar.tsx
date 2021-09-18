import React, { useState, useContext, useEffect } from "react";
import { UserControllerContext } from "../../../contexts/UserController";
import FolderSideBar from "./FolderSideBar";
import FolderCreator from './FolderCreator';
import * as styles from './SideBar.styles';
import { LocalizerContext } from "../../../contexts/Localizer";
import { eventsHandlers } from "../../../controllers/EventManager";
import { FolderEvents } from "../../../controllers/UserController";
import user_actions_status from "../../../../../data/request_statuses/user_statuses";

const SideBar: React.FC = function() 
{
    const userController = useContext(UserControllerContext);
    const localizer = useContext(LocalizerContext);

    const [folders, setFolders] = useState(userController.getFolders());
    const [creatingFolder, setCreatingFolder] = useState<boolean>(false);

    const renderedFolders = folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderSideBar key={idx} name={folder.name} iconUrl={folder.iconUrl}/>
        )
    })

    const tryCreateNewFolder = function(name: string, iconUrl?:string): number {
        const createStatus = userController.createFolder(name, iconUrl);

        if(createStatus === user_actions_status.success) {
            setFolders(userController.getFolders());
            setCreatingFolder(false);
        }

        return createStatus;
    }

    return(
        <styles.WorkspaceContainer onClick={() => setCreatingFolder(false)}>

            <styles.AllBoards to="/">{ localizer.getTextById(localizer.texts.txt_sidebar_all_boards) }</styles.AllBoards>
            <div>
                <styles.CreateFolder direction="row" justify="space-between" margin="5px 0 5px 0"
                                     onClick={ e => {setCreatingFolder(true); e.stopPropagation(); }}>
                    <label>{localizer.getTextById(localizer.texts.txt_folders_plural)}</label>
                    <button> + </button>
                </styles.CreateFolder>
                {renderedFolders}
            </div>

            {
                creatingFolder && 
                <FolderCreator creationFunction={ (name, iconUrl) => tryCreateNewFolder(name, iconUrl) }></FolderCreator>
            }
        </styles.WorkspaceContainer>
    );
}

export default SideBar;