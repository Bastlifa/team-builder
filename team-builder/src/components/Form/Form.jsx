import React, { useState, useEffect } from 'react'
import {StyledSubmit} from '../StyledComps'

const Form = (props) =>
{
    const {teamMembers, setTeamMembers, memberToEdit, setMemberToEdit, formName, setFormName} = props
    const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""})

    useEffect(() => 
    {
        setTeamMember(memberToEdit)
    }, [memberToEdit])

    const handleSubmit = event =>
    {
        event.preventDefault()
        if(teamMember.name === "" || teamMember.email === "" || teamMember.role === "")
        {
            alert("please fill out all required fields");
            return;
        }

        if(formName === "Add Member")
        {
            setTeamMembers([...teamMembers, teamMember])
            setTeamMember({name: "", email: "", role: ""})
            setMemberToEdit({name: "", email: "", role: ""})
        }
        else if (formName === "Edit Member")
        {
            setTeamMembers(teamMembers.map( tm => tm === memberToEdit ? teamMember : tm))
            setTeamMember({name: "", email: "", role: ""})
            setMemberToEdit({name: "", email: "", role: ""})
            setFormName("Add Member")
        }
    }

    const handleChange = event =>
    {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <fieldset>
                <legend>{formName}</legend>
                <label>
                    {` Name: `}
                    <input 
                        type="text" 
                        value={teamMember.name} 
                        name="name" 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    {` email: `}
                    <input 
                        type="email" 
                        value={teamMember.email} 
                        name="email" 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    {` Role: `}
                    <input 
                        type="text" 
                        value={teamMember.role} 
                        name="role" 
                        onChange={event => handleChange(event)}
                    />
                </label>
                <StyledSubmit type="submit" />
            </fieldset>
        </form>
    )
}

export default Form