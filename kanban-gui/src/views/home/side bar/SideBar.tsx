import React , { useState }from "react";
import Account from "../../../../../data/account/account";
import FlexDiv from "../../../common/styles/FlexDiv";
import * as styles from './SideBar.styles';

import { BiShow } from 'react-icons/bi';
import { MdCreateNewFolder } from 'react-icons/md'

const FolderView: React.FC<{name: string}> = function(props) { 
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onClick = function() {
        setCollapsed(!collapsed);
    }

    return(
        <div style={{margin: "5px 0 10px 0"}}>
            <styles.FolderTitle onClick={onClick}>
                <div style={{backgroundColor: "red", height: "25px", width: "25px", marginRight: "10px"}}></div>
                <label>{props.name}</label>
            </styles.FolderTitle>

            <FlexDiv direction="column" backgroundColor="transparent">
                { collapsed && 
                    <FlexDiv direction="column">
                        <styles.FolderOption>
                            <BiShow/>
                            <label>Mostrar Quadros</label>
                        </styles.FolderOption>
                        <styles.FolderOption>
                            <MdCreateNewFolder/>
                            <label>Criar Novo Quadro</label>
                        </styles.FolderOption>
                    </FlexDiv>
                }
            </FlexDiv>
        </div>
    );
}


const SideBar: React.FC<{account: Account}> = function(props) {
    const folders = props.account.folders.map((folder, idx) => {
        return (
            // TODO: Add icon to folder data
            <FolderView name={folder.name}/>
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