import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const WorkspaceContainer = styled.div`
    background-color: cyan;
    width: 300px;
    height: auto;

    margin: 0 40px 0 40px;
    padding: 10px;

    display: flex;
    flex-direction: column;
`

interface FlexInterface{
    direction: string;
    align?: string;
    justify?: string;
}

const FlexContainer = styled.div<FlexInterface>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
`

const FolderView: React.FC<{name: string}> = function(props) { 
    return(
        <div>
            <FlexContainer direction="row" justify="space-between" align="center">
                <FlexContainer direction="row">
                    <div style={{backgroundColor: "red", height: "20px", width: "20px"}}></div>
                    <label>{props.name}</label>
                </FlexContainer>
                <button>V</button>
            </FlexContainer>
            <FlexContainer direction="column">
                <button>Ver Quadros</button>
                <button>Criar Quadro</button>
            </FlexContainer>
        </div>
    );
}


const SideView: React.FC = function() {
    return(
        <WorkspaceContainer>
            <Link to="/">Todos os Quadros</Link>
            <div>
                <label>Pastas</label>
                <button> + </button>
                <FolderView name="Geeko's Productions"></FolderView>
                <FolderView name="Bethesda Softworks"></FolderView>
            </div>
        </WorkspaceContainer>
    );
}

export default SideView;