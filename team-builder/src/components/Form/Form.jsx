import React, { useState } from 'react'


const Form = (props) =>
{

    const {teamMembers, setTeamMembers, memberToEdit} = props

    const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""})

    const handleSubmit = event =>
    {
        event.preventDefault()
        if(teamMember.name === "" || teamMember.email === "" || teamMember.role === "")
        {
            alert("please fill out all required fields");
            return;
        }

        setTeamMembers([...teamMembers, teamMember])
        setTeamMember({name: "", email: "", role: ""})
    }

    const handleChange = event =>
    {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                {`Name: `}
                <input 
                    type="text" 
                    value={teamMember.name} 
                    name="name" 
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                {`email: `}
                <input 
                    type="text" 
                    value={teamMember.email} 
                    name="email" 
                    onChange={event => handleChange(event)}
                />
            </label>
            <label>
                {`role: `}
                <input 
                    type="text" 
                    value={teamMember.role} 
                    name="role" 
                    onChange={event => handleChange(event)}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form