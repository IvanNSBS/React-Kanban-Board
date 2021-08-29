import React, { useEffect, useState } from "react";
import { AbsoluteDiv, ModalBackground } from "./CreateBoardModal.styles";

const CreateBoardModal: React.FC<{active: boolean}> = function({active}) 
{
    const [isActive, setActive] = useState(active);

    const disableScroll = function(){
        const x = window.scrollX;
        const y = window.screenY;
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(x, y);
        };
    }

    useEffect(() => {
        if(isActive)
            disableScroll();

        return function(){
            window.onscroll = function() {};
        }
    }, [isActive])

    if(active){
        return(
            <ModalBackground>
                <AbsoluteDiv>
                    Hello
                </AbsoluteDiv>
            </ModalBackground>
        )
    }

    return null;
}

export default CreateBoardModal;