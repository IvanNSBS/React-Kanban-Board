import React from "react";
import { CardText, ContentWrapper, LabelWrapper, ListCard, EditButton } from "./Card.styles";
import { FiTrash } from 'react-icons/fi';

const Label: React.FC = function() {
    return(
        <LabelWrapper>
            <span>Label</span>
        </LabelWrapper>
    )
}

interface Card {
    title: string;
    isLast?: boolean;
    delete(): void;
}

const Card: React.FC<Card> = function(props) 
{
    return(
        <ListCard isLast={props.isLast}>
            <ContentWrapper>
                <EditButton onClick={props.delete}>
                    <FiTrash/>
                </EditButton>
                <Label/>
                <CardText>
                    {props.title}
                </CardText>
            </ContentWrapper>
        </ListCard>
    )
}

export default Card;