import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { 
    InfoSec
} from './Signup.elements';

const Signup = ({
    lightBg
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                </Container>
            </InfoSec>
        </>
    );
};

export default Signup;