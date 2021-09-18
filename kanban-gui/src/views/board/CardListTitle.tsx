import React, { useEffect, useState } from "react";
import { ListHeader } from "./CardList.styles";
import { BsThreeDots } from 'react-icons/bs'

interface CardListData {
    name: string;
}

const CardListTitle: React.FC<CardListData> = function(props) 
{
    return(
        <ListHeader>
            <input value={props.name}></input>
            <button><BsThreeDots/></button>
        </ListHeader>
    );
}

export default CardListTitle;