import React from 'react';

import Navigation from './Navigation';
import PetDetails from './PetDetails';


const PetDetailPage = props => {

    return (
        <>
            <Navigation />
            <PetDetails pet={props.pet} />
        </>
    )
}

export default PetDetailPage;
