import React from 'react';
import Navigation from './Navigation';
import PetDetailList from './PetDetailList';
import OwnersList from './OwnersList';
import PetDetailPage from './PetDetailPage';

const PetDetails = (props) => {
    return (
        <>
            <PetDetailList pet={props.pet} />
            <OwnersList owners={props.pet.Owners} />
        </>
    )
}

PetDetails.defaultProps = {
    pet: {
        PetType: {},
    },
};

export default PetDetails;
