import React, {useContext, useEffect, useState} from "react";
import Board from "../../../../data/board/board";
import * as styles from './BoardScreen.styles';
import SelectedBoardContext from "../../contexts/SelectedBoard";

const BoardScreen: React.FC = function() 
{
    const selectedBoardController = useContext(SelectedBoardContext);
    const [bgImgUrl, setBgImgUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        console.log(`bgImgUrl: ${selectedBoardController.selectedBoard?.backgroundImgUrl}`)
        setBgImgUrl(selectedBoardController.selectedBoard?.backgroundImgUrl);
    }, [])

    return(
        <styles.BoardBackground bgImgUrl={bgImgUrl}>
            <>{JSON.stringify(selectedBoardController.selectedBoard)}</>
        </styles.BoardBackground>
    )
} 

export default BoardScreen;