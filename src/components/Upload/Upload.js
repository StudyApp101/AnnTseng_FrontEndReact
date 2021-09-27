import React from 'react';

import {
    TextDiv,
    UploadText,
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

        </>
    );
};

export default Upload;