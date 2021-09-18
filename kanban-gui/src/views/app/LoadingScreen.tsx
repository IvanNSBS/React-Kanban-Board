import React, { useEffect } from "react";
import axios, { AxiosError } from 'axios';
import { VscLoading } from 'react-icons/vsc';
import * as st from "./LoadingScreen.styles";
import UrlManager from "../../controllers/UrlManager";
import User from "../../../../data/account/user";


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

        // fetchUser();
    }, [])

    return(
        <st.Screen>
            <st.TextWrapper>
                <st.Icon></st.Icon>
                <st.Text>Loading...</st.Text>
            </st.TextWrapper>
        </st.Screen>
    );
}

export default LoadingScreen;