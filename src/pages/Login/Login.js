import React from 'react';
import { ImageAndAlt } from './Data'
import { Login } from '../../components';

const Home = () => {
    return (
        <>
           <Login {...ImageAndAlt} /> 
        </>
    )
}

export default Home;

