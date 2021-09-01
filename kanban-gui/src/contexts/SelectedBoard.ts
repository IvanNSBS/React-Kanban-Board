import {createContext} from "react";
import SelectedBoardController from "../controllers/SelectedBoardController";

const SelectedBoardContext = createContext<SelectedBoardController>(new SelectedBoardController(null));
export default SelectedBoardContext;