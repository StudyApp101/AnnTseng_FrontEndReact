import React, {useState} from 'react';
import {Container} from '../../globalStyles';

import { 
    InfoSec,
    InfoRow,
    PDFviewer,
    Noteviewer
} from './Mynotes.elements';


const Mynotes = ({}) => {
    var pdffile_url=""
    const onInputChange = (e) => {
        pdffile_url=URL.createObjectURL(e.target.files[0])
        console.log(pdffile_url)
        document.getElementsByTagName('embed')[0].src=pdffile_url
    };
    return (
        <>
            <form>
                <input id="uploadPDF" onChange={onInputChange} type="file" name="file"/>
                <div>
                    <embed src="" frameborder="0" scrolling="yes" width="300" height="200"></embed>
                </div>
            </form>
        </>
        // <>
        //     <InfoSec>
        //         <Container>
        //             <InfoRow>
        //                 <PDFviewer src="https://drive.google.com/file/d/1FkcsLNKRD3qmkC_p_RuV6_fzkzo98Qnh/preview"></PDFviewer>
        //                 <Noteviewer> Start typing here... </Noteviewer>
        //             </InfoRow>   
        //         </Container>
        //     </InfoSec> 
        // </>
    );
};

export default Mynotes;