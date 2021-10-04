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
    var resultOutput=""
    const onInputChange = (e) => {
        pdffile_url=URL.createObjectURL(e.target.files[0])
        document.getElementsByTagName('iframe')[0].src=pdffile_url
    };

    const onSummaryChange = (e) => {
        console.log(e.target.value)
        resultOutput=e.target.value
        document.getElementById('result').value=resultOutput
    };   

    return (
        <>
            <InfoSec>
                <InputStyle id="uploadPDF" onChange={onInputChange} type="file" name="file" accept=".pdf"/>
                <Container>
                    <InfoRow>
                        <PDFviewer src=""></PDFviewer>
                        <InputDiv>
                            <Noteviewer onChange={onSummaryChange}> Input some PDF text here... </Noteviewer>
                            <Noteviewer id="result"> Output summary space... </Noteviewer>
                        </InputDiv>
                    </InfoRow>  
                </Container>
            </InfoSec> 
        </>
    );
};

export default Summarize;