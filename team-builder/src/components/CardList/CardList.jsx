import React from 'react'
import Card from '../Card/Card'
import {CardGrid} from '../StyledComps'
const CardList = props =>
{
    const {teamMembers, setMemberToEdit, memberToEdit} = props

    if (teamMembers === [] )
    {
        return (
            <div>
                No cards present
            </div>
        )
    }

    return (
        <CardGrid>
            { teamMembers.map((teamMember, index) => 
                <Card 
                    name={teamMember.name} 
                    email={teamMember.email} 
                    role={teamMember.role}
                    key={index}
                    setMemberToEdit={setMemberToEdit}
                    teamMembers={teamMembers}
                    memberIndex={index}
                    memberToEdit={memberToEdit}
                />)
            }
        </CardGrid>
    )
}

export default CardList