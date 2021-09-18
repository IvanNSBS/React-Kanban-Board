import {createContext} from "react";
import Board from "../../../data/board/board";
import SelectedBoardController from "../controllers/SelectedBoardController";

const SelectedBoardContext = createContext<SelectedBoardController>(new SelectedBoardController(new Board('', '')));
export default SelectedBoardContext;