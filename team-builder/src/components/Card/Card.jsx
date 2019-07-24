import React from 'react'
import {CardDiv} from '../StyledComps'
const Card = props =>
{
    const {name, email, role} = props

    return (
        <CardDiv>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{role}</h3>
        </CardDiv>
    )
}

export default Card