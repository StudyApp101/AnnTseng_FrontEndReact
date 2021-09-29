import React from 'react';

import {
    TextDiv,
    TitleText,
    InputDiv
} from './VideoSection.elements';

const VideoSection = ({
    vid,
}) => {
    return (
        <>
                <TextDiv>
                    <TitleText>What is Noteable?</TitleText>
                </TextDiv>
                <InputDiv>
                    <iframe width="560" height="315" src={vid} title="Noteable Product Video"></iframe>
                </InputDiv>
        </>
    );
};

export default VideoSection;