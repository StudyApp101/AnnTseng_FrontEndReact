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
} from './Feedback.elements';
const Feedback = ({
    img, 
    alt,
}) => {

    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <Heading> Feedback </Heading>
                        </InfoColumn>
                        <InfoColumn>
                                <MissionText> 
                                    Regarding feedback on Noteable, please feel free to fill our feedback form below. <br/>
                                    The Noteable team is working hard to improve this product and we appreciate your feedback! <br/>
                                    <br/>
                                    <a href="https://forms.gle/KnsnmFjuh5qELTxFA" target="_blank">Noteable Feedback Form</a>
                                </MissionText>
                        </InfoColumn>  
                    </InfoRow>   
                </Container>
            </InfoSec>
        </>
    );
};

export default Feedback;