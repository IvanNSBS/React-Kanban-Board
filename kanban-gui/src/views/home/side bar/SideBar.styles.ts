import styled from 'styled-components';

export interface FlexInterface{
    direction: string;
    align?: string;
    justify?: string;
}

const WorkspaceContainer = styled.div`
    background-color: cyan;
    width: 300px;
    height: auto;

    margin: 0 40px 0 40px;
    padding: 10px;

    display: flex;
    flex-direction: column;
`

const FlexContainer = styled.div<FlexInterface>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
`

const MarginFlexContainer = styled(FlexContainer)<{margin: string}>`
    margin: ${(props) => props.margin};
`

export { WorkspaceContainer, FlexContainer, MarginFlexContainer }