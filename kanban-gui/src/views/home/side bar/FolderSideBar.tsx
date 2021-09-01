import React, {useState} from "react";
import * as styles from './FolderSidebar.styles';
import { BiShow } from 'react-icons/bi';
import { MdFilterFrames, MdSettings } from 'react-icons/md'
import FlexDiv from "../../../common/styles/FlexDiv";

const img = require('../../../../public/folder_default_icon.jpg').default;

const FolderSideBar: React.FC<{name: string, iconUrl?: string}> = function(props) { 
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onClick = function() {
        setCollapsed(!collapsed);
    }

    const firstChar = props.name.length > 0 ? props.name.at(0)?.toUpperCase() : "";
    
    // TODO: Load icon from actual url
    const imgRender = props.iconUrl === undefined ?
                      <div style={{backgroundImage:'linear-gradient(336deg, #ab05a5, #2ad5e9)', 
                                    height: "25px", width: "25px", marginRight: "10px", display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                         {firstChar}
                      </div> :
                      <img src={img} style={{backgroundSize: 'cover', height: "25px", width: "25px", marginRight: "10px"}}></img>

    return(
        <div style={{margin: "5px 0 10px 0"}}>
            <styles.FolderTitle onClick={onClick}>
                {imgRender}
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
                            <MdFilterFrames/>
                            <label>Criar Novo Quadro</label>
                        </styles.FolderOption>
                        <styles.FolderOption>
                            <MdSettings/>
                            <label>Configurações</label>
                        </styles.FolderOption>
                    </FlexDiv>
                }
            </FlexDiv>
        </div>
    );
}

export default FolderSideBar;