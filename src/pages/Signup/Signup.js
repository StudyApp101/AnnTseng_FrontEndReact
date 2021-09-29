import React from 'react';
import { Signup } from '../../components';
import { ImageAndAlt } from './Data';

const Home = () => {
    return (
        <>
           <Signup {...ImageAndAlt} /> 
        </>
    )
}

export default Home;
