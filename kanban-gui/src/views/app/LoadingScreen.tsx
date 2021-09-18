import React, { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from 'axios';
import Palette from "../../common/colorpalette";
import BackgroundStyle from "../../global styles/GlobalBody.style";
import * as st from "./LoadingScreen.styles";
import UrlManager from "../../controllers/UrlManager";
import User from "../../../../data/account/user";


interface Load {
    onLoadComplete(user: User | undefined): void;
}

const LoadingScreen: React.FC<Load> = function({onLoadComplete}) 
{
    const text = useRef<HTMLSpanElement>(null);
    const [loadText, setLoadText] = useState<string>('Loading...');

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
        
        if(text.current !== null) {
            text.current.style.width = 'auto';
            const width = text.current.offsetWidth;
            console.log("Setting width...   " + width)
            text.current.style.width = width+'px';
        }

        fetchUser();
    }, [])

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if(loadText === 'Loading...')
                setLoadText('Loading');
            else
                setLoadText(loadText + '.');
        }, 500);

        return function cleanup(){
            clearTimeout(timeOut);
        }
    }, [loadText])

    return(
        <st.Screen>
            <BackgroundStyle bgCol={Palette.background}/>
            <st.TextWrapper>
                <st.Icon></st.Icon>
                <st.Text ref={text}>{loadText}</st.Text>
            </st.TextWrapper>
        </st.Screen>
    );
}

export default LoadingScreen;