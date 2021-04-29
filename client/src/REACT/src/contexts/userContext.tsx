import React, { createContext, useState } from 'react';

let user = {};
let setUser;

const UserContext = createContext([user, setUser])

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserContextData>({
    showNewChildModal: false

  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  )
};

export { UserContext };
export { UserContextProvider };

