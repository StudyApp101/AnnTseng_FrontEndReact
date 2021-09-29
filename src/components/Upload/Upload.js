import React from 'react';

import {
    TextDiv,
    UploadText,
    InputDiv,
    InputFile,
    SubmitButton
} from './Upload.elements';

const Upload = ({
}) => {
    return (
        <>
            <TextDiv>
                <UploadText>
                Hello!  <br />
                Please select a PDF file to work from:
                </UploadText>
            </TextDiv>
            <InputDiv>
                <InputFile type="file" name="upload" class="random" accept=".pdf"/>
            </InputDiv>
            <InputDiv>
                <SubmitButton> Submit </SubmitButton>
            </InputDiv>
        </>
    );
};

export default Upload;