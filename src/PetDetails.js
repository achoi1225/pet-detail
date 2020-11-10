import React from 'react';
import Navigation from './Navigation';
import PetDetailList from './PetDetailList';

const PetDetails = (props) => {
    return (
        <PetDetailList pet={props.pet} />
    )
}

export default PetDetails;