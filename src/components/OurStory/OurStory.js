import { Button } from '@material-ui/core';
import { Description } from '@material-ui/icons';
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
    ProfileWrapperFlex,
    ProfileImage,
    ProfileName,
    ProfileDescription,
    ProfileContainer,
} from './OurStory.elements';

const OurStory = ({
    img, 
    alt,
    imgES,
    altES
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
            <InfoColumn>
                <Heading> Meet the Team </Heading>
            </InfoColumn> 
            <ProfileWrapperFlex>
                <ProfileContainer>
                    <ProfileImage src={imgES} alt={altES} />
                    <ProfileName> First Last </ProfileName>
                    <ProfileDescription> 
                        Role XYZ
                    </ProfileDescription>
                </ProfileContainer>
            </ProfileWrapperFlex>

        </>
    );
};
export default OurStory;