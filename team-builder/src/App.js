import React, { useState, useEffect } from 'react'
// import { Route, Link } from 'react-router-dom'
import Form from './components/Form/Form'
import CardList from './components/CardList/CardList'

import './App.css';

function App() {

  const [teamMembers, setTeamMembers] = useState([])

  // useEffect(() => {console.log("tm from app", teamMembers)}, [teamMembers])

  return (
    <div className="App">
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <CardList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
