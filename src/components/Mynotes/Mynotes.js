import React, {useState} from 'react';
import {Container} from '../../globalStyles';

import { 
    InfoSec,
    InfoRow,
    PDFviewer,
    Noteviewer,
    InputStyle
} from './Mynotes.elements';


const Mynotes = ({}) => {
    var pdffile_url=""
    const onInputChange = (e) => {
        pdffile_url=URL.createObjectURL(e.target.files[0])
        console.log(pdffile_url)
        document.getElementsByTagName('iframe')[0].src=pdffile_url
    };
    return (
        <>
            <InfoSec>
                <InputStyle id="uploadPDF" onChange={onInputChange} type="file" name="file" accept=".pdf"/>
                <Container>
                    <InfoRow>
                        <PDFviewer src=""></PDFviewer>
                        <Noteviewer> Start typing here... </Noteviewer>
                    </InfoRow>   
                </Container>
            </InfoSec> 
        </>
    );
};

export default Mynotes;