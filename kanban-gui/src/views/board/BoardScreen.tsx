import React, {useContext} from "react";
import Board from "../../../../data/board/board";
import SelectedBoardContext from "../../contexts/SelectedBoard";

const BoardScreen: React.FC = function() 
{
    const selectedBoardController = useContext(SelectedBoardContext);
    return(
        <>{JSON.stringify(selectedBoardController.selectedBoard)}</>
    )
} 

export default BoardScreen;