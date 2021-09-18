import React, { useState } from "react";
import User from "../../../../data/account/user";
import LoadingScreen from "./LoadingScreen";
import AppRouter from "./AppRouter";

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
        
    return <AppRouter></AppRouter>
}

export default AppLoader;