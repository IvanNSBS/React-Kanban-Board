import React, { useState, createContext } from "react";
import User from "../../../../data/account/user";
import LoadingScreen from "./LoadingScreen";
import AppRouter from "./AppRouter";
import { UserControllerContext } from "../../contexts/UserController";
import UserController from "../../controllers/UserController";


const AppLoader: React.FC = function() {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function onLoadComplete(user: User | undefined) {
        setUser(user);
        setIsLoading(false);
    }

    if(isLoading){
        return <LoadingScreen onLoadComplete = { onLoadComplete }/>
    }
    else if(user === undefined)
        return <span>Couldn't fetch user data</span>
        
    return (
        <UserControllerContext.Provider value={new UserController(user)}>
            <AppRouter>
            </AppRouter>
        </UserControllerContext.Provider>
    );
}

export default AppLoader;