import { createContext } from "react";
import User from "../../../data/account/user";
import UserController from "../controllers/UserController";

export const UserControllerContext = createContext<UserController>(new UserController(new User('')));
