import React from "react";
import { CardText, ContentWrapper, LabelWrapper, ListCard } from "./Card.styles";

const Label: React.FC = function() {
    return(
        <LabelWrapper>
            <span>Label</span>
        </LabelWrapper>
    )
}

const Card: React.FC = function() {
    return(
        <ListCard>
            {/* <div>Edit</div> */}
            <ContentWrapper>
                <Label/>
                <CardText>
                    Header não aparece quando abre pelo Home
                </CardText>
            </ContentWrapper>
        </ListCard>
    )
}

export default Card;