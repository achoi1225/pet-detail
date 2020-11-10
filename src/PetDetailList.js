import React from 'react';
import PetInformationItem from './PetInformatiionItem';

const PetDetailList = props =>
  <>
    <h2>Details</h2>
    <dl>
        <PetInformationItem name="Name" value={props.pet.name} /> 
        <PetInformationItem name="Age" value={props.pet.age} /> 
        <PetInformationItem name="Type" value={props.pet.type} /> 
    </dl>
  </>
;

PetDetailList.defaultProps = {
    pet: {value: 'loading...'},
}

export default PetDetailList;

