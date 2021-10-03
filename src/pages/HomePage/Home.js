import React from 'react';
import { homeObjOne, videoSection} from './Data'
import { InfoSection } from '../../components';
import { VideoSection } from '../../components';

const Home = () => {
    return (
        <>
           <InfoSection {...homeObjOne} /> 
           {/* <VideoSection {...videoSection}/>  */}
        </>
    )
}

export default Home;
