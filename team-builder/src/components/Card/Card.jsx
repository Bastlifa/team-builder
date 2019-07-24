import React from 'react'
import {CardDiv, EditButton, NameAndEditDiv} from '../StyledComps'
const Card = props =>
{
    const {name, email, role, memberIndex, setMemberToEdit, teamMembers, memberToEdit, setFormName} = props

    const clickHandler = _ =>
    {
        if(memberToEdit !== {name:"", email:"", role:""} &&
            memberToEdit.name === name && memberToEdit["email"] === email && memberToEdit.role === role)
        {
            setFormName("Add Member")
            setMemberToEdit({name:"", email:"", role:""})
        }
        else
        {
            setFormName("Edit Member")
            setMemberToEdit(teamMembers[memberIndex]);
        }
    }

    return (
        <CardDiv>
                <EditButton onClick={clickHandler}>
                    <img src={require(`../../assets/images/edit-pencil.png`)} alt="pencil"/>
                </EditButton>
                <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{role}</h3>
        </CardDiv>
    )
}

export default Card