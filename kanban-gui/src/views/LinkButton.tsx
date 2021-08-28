import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const linkBtn: React.FC<{to: string, className?:string, inner?:string}> = function(props) {
    const history = useHistory();

    return(
        <button className={props.className} onClick={() => history.push(props.to)}>
            {props.inner}
        </button>
    )
}

const LinkButton = styled(linkBtn)`
    text-decoration: none;
    height: 40px;
    background-color: #ff00003b;
    border: 0px;
    border-radius: 5px;
    color: black;

    &:hover{
        background-color: #ff00007b
    }

    &:active{
        background-color: #ff0000c8
    }
`
export default LinkButton;
