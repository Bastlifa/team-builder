import React from 'react'
import {CardDiv, EditButton, NameAndEditDiv} from '../StyledComps'
const Card = props =>
{
    const {name, email, role, memberIndex, setMemberToEdit, teamMembers, memberToEdit} = props

    const clickHandler = _ =>
    {
        if(memberToEdit !== {} && memberToEdit[name] === name && memberToEdit[role] === role && memberToEdit[email] === email)
        {
            setMemberToEdit({})
        }
        else
        {
            setMemberToEdit(teamMembers[memberIndex]);
        }
    }

    return (
        <CardDiv>
                <EditButton onClick={_ => setMemberToEdit(teamMembers[memberIndex])}>
                    <img src={require(`../../assets/images/edit-pencil.png`)} alt="pencil"/>
                </EditButton>
                <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{role}</h3>
        </CardDiv>
    )
}

export default Card