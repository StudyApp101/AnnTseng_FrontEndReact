import React from 'react';
import {Container} from '../../globalStyles';
import { 
    Heading,
    InfoSec,
    InfoRow,
    InfoColumn,
    MissionText,
    ImgWrapper,
    Img,
    PersonCard,
    PCDiv
} from './OurStory.elements';

const OurStory = ({
    img, 
    alt
}) => {
    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <Heading> Our Story </Heading>
                        </InfoColumn>
                        <InfoColumn>
                                <MissionText> 
                                    Chupa chups dragée cake croissant icing tart gummi bears icing. 
                                    Liquorice lemon drops danish danish gummi bears gingerbread soufflé gummies fruitcake. 
                                    Toffee cupcake candy canes caramels tart cookie gummi bears.  
                                    Chupa chups dragée cake croissant icing gummi.
                                    Toffee cupcake candy canes caramels tart cookie gummi bears.  
                                </MissionText>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>         
                    </InfoRow>   
                </Container>
            </InfoSec>
            <PCDiv>
                                <PersonCard> 
                                    Person
                                </PersonCard>
                                <PersonCard> 
                                    Person
                                </PersonCard>
                                <PersonCard> 
                                    Person
                                </PersonCard>
                                <PersonCard> 
                                    Person
                                </PersonCard>
                    </PCDiv>  
        </>
    );
};

export default OurStory;