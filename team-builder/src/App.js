import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Member from './component/Member';
import MemberForm from './component/MemberForm';
// import Members from './component/Member';

function App() {
  const [members, setMembers] = useState([]);
  const addNewMember = member => {
    const newMember ={
      id: Date.now(),
      fullname: member.fullname,
      email: member.email,
      roll: member.roll
    };
    setMembers([...members, newMember])
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='MForms'>
        <h1>Members</h1>
        <MemberForm addNewMember={addNewMember}/>
        <Member members={members}/>
      </div>
    </div>
    
  );
}

export default App;
