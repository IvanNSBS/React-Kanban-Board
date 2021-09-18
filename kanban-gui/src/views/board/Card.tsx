import React from "react";
import { CardText, ContentWrapper, LabelWrapper, ListCard } from "./Card.styles";

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
            {/* <div>Edit</div> */}
            <ContentWrapper>
                <Label/>
                <CardText>
                    {props.title}
                </CardText>
            </ContentWrapper>
        </ListCard>
    )
}

export default Card;