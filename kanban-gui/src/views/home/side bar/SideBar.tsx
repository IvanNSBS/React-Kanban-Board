import React from "react";
import { Link } from "react-router-dom";
import * as styles from './SideBar.styles'

const FolderView: React.FC<{name: string}> = function(props) { 
    return(
        <div style={{margin: "5px 0 10px 0"}}>
            <styles.FlexContainer direction="row" justify="space-between" align="center">
                <styles.FlexContainer direction="row">
                    <div style={{backgroundColor: "red", height: "20px", width: "20px", marginRight: "10px"}}></div>
                    <label>{props.name}</label>
                </styles.FlexContainer>
                <button>V</button>
            </styles.FlexContainer>
            <styles.FlexContainer direction="column">
                <button>Ver Quadros</button>
                <button>Criar Quadro</button>
            </styles.FlexContainer>
        </div>
    );
}


const SideBar: React.FC = function() {
    return(
        <styles.WorkspaceContainer>
            <Link to="/">Todos os Quadros</Link>
            <div>
                <styles.MarginFlexContainer direction="row" justify="space-between" margin="5px 0 5px 0">
                    <label>Pastas</label>
                    <button> + </button>
                </styles.MarginFlexContainer>
                <FolderView name="Geeko's Productions"></FolderView>
                <FolderView name="Bethesda Softworks"></FolderView>
            </div>
        </styles.WorkspaceContainer>
    );
}

export default SideBar;