import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Button3 } from '../../globalStyles';
import { 
    Heading,
    Form,
    FormInput,
    InfoSec,
    InfoRow,
    InfoColumn,
    ImgWrapper,
    Img,
    LoginWrapper,
    InterFormWrapper,
    InterFormInputWrapper,
    EandPIndicator,
} from './Login.elements';

const Login = ({
    lightBg, 
    imgStart, 
    img,
    alt,
    start
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart= {imgStart}>
                        <InfoColumn>
                            <LoginWrapper> 
                                <Form>
                                    <InterFormWrapper>
                                        <Heading>Log In</Heading>
                                    </InterFormWrapper>
                                    <InterFormInputWrapper>
                                        <EandPIndicator for="email">Email:</EandPIndicator>
                                        <FormInput name="email" id="email" type="email"  placeholder="name@email.com" />
                                    </InterFormInputWrapper>
                                    <InterFormInputWrapper>
                                        <EandPIndicator for="password">Password:</EandPIndicator>
                                        <FormInput name="password" id="password" type="password" placeholder="Password" />
                                    </InterFormInputWrapper>
                                    <InterFormWrapper>
                                        <Button3> Enter </Button3>
                                    </InterFormWrapper>
                                </Form>
                            </LoginWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default Login;