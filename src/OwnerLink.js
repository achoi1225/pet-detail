import React from 'react'
import OwnersList from './OwnersList';

const OwnerLink = (props) => {
    return (
        <a href={props.href}>
            {props.lastName},{props.firstName}
        </a>
    );
};

export default OwnerLink;
