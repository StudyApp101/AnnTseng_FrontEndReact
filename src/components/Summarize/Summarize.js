import React, {useState} from 'react';
import {Container} from '../../globalStyles';

import { 
    InfoSec,
    InfoRow,
    PDFviewer,
    Noteviewer,
    InputStyle,
    InputDiv
} from './Summarize.elements';


const Summarize = ({}) => {
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
                        <InputDiv>
                            <Noteviewer> Input some PDF text here... </Noteviewer>
                            <Noteviewer> Summary is displayed and edited here... </Noteviewer>
                        </InputDiv>
                    </InfoRow>  
                </Container>
            </InfoSec> 
        </>
    );
};

export default Summarize;