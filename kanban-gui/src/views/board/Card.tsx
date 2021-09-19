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

const Card: React.FC<{isLast?: boolean, title: string}> = function(props) 
{
    return(
        <ListCard isLast={props.isLast}>
            <ContentWrapper>
                <EditButton>
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