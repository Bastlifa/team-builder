import React, { useState } from 'react'
// import { Route, Link } from 'react-router-dom'
import Form from './components/Form/Form'
import CardList from './components/CardList/CardList'

import './App.css';

function App() {

  const [teamMembers, setTeamMembers] = useState([])

  const [memberToEdit, setMemberToEdit] = useState({name: "", email: "", role: ""})

  const [formName, setFormName] = useState("Add Member")
  // const editMember = (member) => {...teamMembers, }

  return (
    <div className="App">
      <Form 
        teamMembers={teamMembers} 
        setTeamMembers={setTeamMembers} 
        memberToEdit={memberToEdit} 
        setMemberToEdit={setMemberToEdit}
        formName={formName}
        setFormName={setFormName}
      />
      <CardList 
        teamMembers={teamMembers} 
        setMemberToEdit={setMemberToEdit} 
        memberToEdit={memberToEdit}
        setFormName={setFormName}
      />
    </div>
  );
}

export default App;
