import React, { useContext, useState } from 'react';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import { UserContext } from '../../../../contexts/userContext';

const NewChildButton: React.FC = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <Columnizer>
      <button
        id="newChildBtn"
        onClick={() => setUser(prev => ({ ...prev, modalOpen: !user.modalOpen }))}
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd"></path><path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd"></path></svg>
      </button>
    </Columnizer>
  )
}

export default NewChildButton;