import React from 'react';
import { ImageAndAlt } from './Data';
import { OurStory } from '../../components';

const Home = () => {
    return (
        <>
           < OurStory {...ImageAndAlt}/>
        </>
    )
}

export default Home;