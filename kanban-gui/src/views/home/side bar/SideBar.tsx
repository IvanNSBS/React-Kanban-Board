import React from "react";
import User from "../../../../../data/account/user";
import FolderSideBar from "./FolderSideBar";
import * as styles from './SideBar.styles';


const SideBar: React.FC<{account: User}> = function(props) {
    const folders = props.account.folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderSideBar name={folder.name}/>
        )
    })

    return(
        <styles.WorkspaceContainer>
            <styles.AllBoards to="/" inner="Todos os Quadros"/>
            <div>
                <styles.CreateFolder direction="row" justify="space-between" margin="5px 0 5px 0">
                    <label>Pastas</label>
                    <button> + </button>
                </styles.CreateFolder>
                {folders}
            </div>
        </styles.WorkspaceContainer>
    );
}

export default SideBar;