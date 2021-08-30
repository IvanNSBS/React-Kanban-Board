import React, {useState} from "react";
import * as styles from './FolderSidebar.styles';
import { BiShow } from 'react-icons/bi';
import { MdFilterFrames } from 'react-icons/md'
import FlexDiv from "../../../common/styles/FlexDiv";

const FolderSideBar: React.FC<{name: string}> = function(props) { 
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
                            <MdFilterFrames/>
                            <label>Criar Novo Quadro</label>
                        </styles.FolderOption>
                    </FlexDiv>
                }
            </FlexDiv>
        </div>
    );
}

export default FolderSideBar;