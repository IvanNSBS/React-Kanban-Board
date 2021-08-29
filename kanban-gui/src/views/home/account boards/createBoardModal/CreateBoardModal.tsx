import React, { useEffect, useState, useRef } from "react";
import { AbsoluteDiv, ModalBackground } from "./CreateBoardModal.styles";
import BoardsFolder from "../../../../../../data/account/boardsFolder";

interface CreateBoard {
    isOpen: boolean;
    folders: BoardsFolder[];
}

const CreateBoardModal: React.FC<CreateBoard> = function(props) 
{
    const [isActive, setActive] = useState(props.isOpen);
    const inputRef = useRef<HTMLInputElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const disableScroll = function(){
        const x = window.scrollX;
        const y = window.screenY;
        window.onscroll = (e) => {
            e.preventDefault()
            window.scrollTo(x, y);
        };
    }

    const deactivate = function(){
        setActive(false);
    }

    const createBoard = function(){
        deactivate();
    }

    useEffect(() => {
        if(isActive)
            disableScroll();

        return function(){
            window.onscroll = function() {};
        }
    }, [isActive])

    if(isActive){
        
        const options = props.folders.map((folder, idx) => {
            return <option value={folder.name}>{folder.name}</option>
        })

        return(
            <ModalBackground onClick={deactivate}>
                <AbsoluteDiv onClick={e => e.stopPropagation()}>
                    <div>
                        <div>
                            <input ref={inputRef} type="text" placeholder="Nome do Quadro"></input>
                            <button onClick={deactivate}>x</button>
                        </div>
                        <select ref={selectRef} name={props.folders[0].name}>
                            {options}
                        </select>
                    </div>
                    <div>
                        <button onClick={createBoard}>Criar</button>
                    </div>
                </AbsoluteDiv>
            </ModalBackground>
        )
    }

    return null;
}

export default CreateBoardModal;