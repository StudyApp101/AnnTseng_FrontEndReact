import React from 'react';
import {Container} from '../../globalStyles';

import { 
    Heading,
    InfoSec,
    InfoRow,
    InfoColumn,
    MissionText,
} from './Mynotes.elements';
const Mynotes = ({
}) => {

    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <MissionText>
                                Hello!
                            </MissionText>
                        </InfoColumn>  
                    </InfoRow>   
                </Container>
            </InfoSec>
        </>
    );
};

export default Mynotes;