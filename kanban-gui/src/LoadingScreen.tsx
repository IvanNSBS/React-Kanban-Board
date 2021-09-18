import React, { useEffect } from "react";
import axios, { AxiosError } from 'axios';
import UrlManager from "./controllers/UrlManager";
import User from "../../data/account/user";

interface Load {
    onLoadComplete(user: User | undefined): void;
}

const LoadingScreen: React.FC<Load> = function({onLoadComplete}) 
{
    
    useEffect(() => {
        async function fetchUser() {
            await new Promise(r => setTimeout(r, 2000));
            await axios.get(UrlManager.user)
            .then(res => {
                const user: User = res.data as User;
                onLoadComplete(user);
            })
            .catch( (e:AxiosError) => {
                onLoadComplete(undefined);
            });
        }

        fetchUser();
    }, [])

    return(
        <span>Loading...</span>
    );
}

export default LoadingScreen;