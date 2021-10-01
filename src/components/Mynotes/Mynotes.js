import React from 'react';
import {Container} from '../../globalStyles';

import { 
    InfoSec,
    InfoRow,
    PDFviewer,
    Noteviewer
} from './Mynotes.elements';
const Mynotes = ({
}) => {

    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <PDFviewer src="TextPDF.pdf"></PDFviewer>
                        <Noteviewer> Start typing here... </Noteviewer>
                    </InfoRow>   
                </Container>
            </InfoSec>
        </>
    );
};

export default Mynotes;