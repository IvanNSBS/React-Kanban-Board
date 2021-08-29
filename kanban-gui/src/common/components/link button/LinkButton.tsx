import React from "react";
import { useHistory } from "react-router-dom";
import { StyledButton } from "./LinkButton.styles";

const LinkButton: React.FC<{to: string, className?:string, inner?:string}> = function(props) {
    const history = useHistory();

    return(
        <StyledButton className={props.className} onClick={() => history.push(props.to)}>
            {props.inner}
        </StyledButton>
    )
}

export default LinkButton;
