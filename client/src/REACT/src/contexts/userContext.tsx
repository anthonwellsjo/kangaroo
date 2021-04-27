import React, { createContext, useState } from 'react';

let userContext = {};
let setUserContext;

const UserContext = createContext([userContext, setUserContext])

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserContextData>({
    showNewChildModal: false

  });
  return (
    <UserContext.Provider value={[UserContext, setUserContext]}>
      {children}
    </UserContext.Provider>
  )
};

export { UserContext };
export { UserContextProvider };

