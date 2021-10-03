import React from 'react';
import Popup from '../Popup/Popup'
import {Container} from '../../globalStyles';
import {useState} from 'react';

import { 
    Heading,
    InfoSec,
    InfoRow,
    InfoColumn,
    MissionText,
    ImgWrapper,
    Img,
    ProfileWrapperFlex,
    ProfileImage,
    ProfileName,
    ProfileDescription,
    ProfileContainer,
} from './OurStory.elements';
const OurStory = ({
    img, 
    alt,
    imgES, //2. Emily Song
    altES,
    textES1,
    textES2,
    textES3,
    linkES,
    imgSK, //1. Shikha Kandpal
    altSK,
    textSK1,
    textSK2,
    textSK3,
    linkSK,
    imgAT, //3. Ann Tseng
    altAT,
    textAT1,
    textAT2,
    textAT3,
    linkAT,
    imgAS, //4. Arooj Saeed
    altAS,
    textAS1,
    textAS2,
    textAS3,
    linkAS,
    imgMG, //5. Meha Goyal
    altMG,
    textMG1,
    textMG2,
    textMG3,
    linkMG,
    imgAN, //6. Anitha Narnavaram
    altAN,
    textAN1,
    textAN2,
    textAN3,
    linkAN,
    imgPG, //7. Priyanka Gupta
    altPG,
    textPG1,
    textPG2,
    textPG3,
    linkPG,
    imgSKa, //8. Seema Kanaje
    altSKa,
    textSKa1,
    textSKa2,
    textSKa3,
    linkSKa
}) => {
    const [buttonPopup1, setButtonPopup1] = useState(false);
    const [buttonPopup2, setButtonPopup2] = useState(false);
    const [buttonPopup3, setButtonPopup3] = useState(false);
    const [buttonPopup4, setButtonPopup4] = useState(false);
    const [buttonPopup5, setButtonPopup5] = useState(false);
    const [buttonPopup6, setButtonPopup6] = useState(false);
    const [buttonPopup7, setButtonPopup7] = useState(false);
    const [buttonPopup8, setButtonPopup8] = useState(false);

    return (
        <>
            <InfoSec>
                <Container>
                    <InfoRow>
                        <InfoColumn>
                            <Heading> Our Story </Heading>
                        </InfoColumn>
                        <InfoColumn>
                                <MissionText> 
                                Noteable is made up of a group of students and early career professionals passionate about learning, growing, and challenging ourselves to create a product that helps people get a head start on learning their topics of interest. Our goal is to provide a tool to everyone who wants to learn or relearn anything.  
                                </MissionText>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>     
                    </InfoRow>   
                </Container>
            </InfoSec>
                <Heading> Meet the Team </Heading>
                <ProfileWrapperFlex>
                    {/* 1. Shikha Kandpal Front*/}
                    <ProfileContainer onClick={() => setButtonPopup1(true)}>
                        <ProfileImage src={imgSK} alt={altSK} />
                        <ProfileName> Shikha Kandpal </ProfileName>
                        <ProfileDescription> 
                            Product Manager
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 6. Anitha Narnavaram Front*/}
                    <ProfileContainer onClick={() => setButtonPopup6(true)}>
                        <ProfileImage src={imgAN} alt={altAN} />
                        <ProfileName> Anitha Narnavaram </ProfileName>
                        <ProfileDescription> 
                             Backend Developer 
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 7. Priyanka Gupta Front*/}
                    <ProfileContainer onClick={() => setButtonPopup7(true)}>
                        <ProfileImage src={imgPG} alt={altPG} />
                        <ProfileName> Priyanka Gupta </ProfileName>
                        <ProfileDescription> 
                            Lead ML Developer
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 2. Emily Song Front*/}
                    <ProfileContainer onClick={() => setButtonPopup2(true)}>
                        <ProfileImage src={imgES} alt={altES} />
                        <ProfileName> Emily Song </ProfileName>
                        <ProfileDescription> 
                            UX Designer
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 3. Ann Tseng Front*/}
                    <ProfileContainer onClick={() => setButtonPopup3(true)}>
                        <ProfileImage src={imgAT} alt={altAT} />
                        <ProfileName> Ann Tseng </ProfileName>
                        <ProfileDescription>
                            UX and Frontend Developer
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 5. Meha Goyal Front*/}
                    <ProfileContainer onClick={() => setButtonPopup5(true)}>
                        <ProfileImage src={imgMG} alt={altMG} />
                        <ProfileName> Meha Goyal </ProfileName>
                        <ProfileDescription> 
                            Backend and Frontend Developer
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 4. Arooj Saeed Front*/}
                    <ProfileContainer onClick={() => setButtonPopup4(true)}>
                        <ProfileImage src={imgAS} alt={altAS} />
                        <ProfileName> Arooj Saeed </ProfileName>
                        <ProfileDescription> 
                            Backend Developer
                        </ProfileDescription>
                    </ProfileContainer>

                    {/* 8. Seema Kanaje Front*/}
                    <ProfileContainer onClick={() => setButtonPopup8(true)}>
                        <ProfileImage src={imgSKa} alt={altSKa} />
                        <ProfileName> Seema Kanaje </ProfileName>
                        <ProfileDescription> 
                            ML Developer
                        </ProfileDescription>
                    </ProfileContainer>

                </ProfileWrapperFlex>

                {/* 1. Shikha Kandpal Back*/}
                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                    <ProfileName>
                        Shikha Kandpal
                    </ProfileName>
                    <ProfileDescription>
                        {textSK1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textSK2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textSK3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkSK}
                    </ProfileDescription>
                </Popup>

                {/* 2. Emily Song Back*/}
                <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                    <ProfileName>
                        Emily Song
                    </ProfileName>
                    <ProfileDescription>
                        {textES1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textES2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textES3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkES}
                    </ProfileDescription>
                </Popup>

                {/* 3. Ann Tseng Back*/}
                <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                    <ProfileName>
                        Ann Tseng
                    </ProfileName>
                    <ProfileDescription>
                        {textAT1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textAT2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textAT3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkAT}
                    </ProfileDescription>
                </Popup>

                {/* 4. Arooj Saeed Back*/}
                <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
                    <ProfileName>
                        Arooj Saeed
                    </ProfileName>
                    <ProfileDescription>
                        {textAS1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textAS2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textAS3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkAS}
                    </ProfileDescription>
                </Popup>

                {/* 5. Meha Goyal Back*/}
                <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
                    <ProfileName>
                        Meha Goyal
                    </ProfileName>
                    <ProfileDescription>
                        {textMG1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textMG2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textMG3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkMG}
                    </ProfileDescription>
                </Popup>

                {/* 6. Anitha Narnavaram Back*/}
                <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6}>
                    <ProfileName>
                        Anitha Narnavaram
                    </ProfileName>
                    <ProfileDescription>
                        {textAN1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textAN2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textAN3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkAN}
                    </ProfileDescription>
                </Popup>

                {/* 7. Priyanka Gupta Back*/}
                <Popup trigger={buttonPopup7} setTrigger={setButtonPopup7}>
                    <ProfileName>
                        Priyanka Gupta
                    </ProfileName>
                    <ProfileDescription>
                        {textPG1}
                    </ProfileDescription>
                    <ProfileDescription>
                        {textPG2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textPG3}
                    </ProfileDescription>
                    <ProfileDescription>
                        {linkPG}
                    </ProfileDescription>
                </Popup>

                {/* 8. Seema Kanaje Back*/}
                <Popup trigger={buttonPopup8} setTrigger={setButtonPopup8}>
                    <ProfileName>
                        Seema Kanaje
                    </ProfileName>
                    <ProfileDescription>
                        {textSKa1}
                    </ProfileDescription>
                    {/* <ProfileDescription>
                        {textSKa2}    
                    </ProfileDescription>
                    <ProfileDescription>
                        {textSKa3}
                    </ProfileDescription> */}
                    <ProfileDescription>
                        {linkSKa}
                    </ProfileDescription>
                </Popup>

        </>
    );
};

export default OurStory;