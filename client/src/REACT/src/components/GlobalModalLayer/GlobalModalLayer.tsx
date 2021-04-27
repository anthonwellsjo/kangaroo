import React, { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import AddChildModal from '../Modals/AddChildModal';

const GlobalModalLayer: React.FC = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div>
      {children}
      {(user as UserContextData).showNewChildModal && <AddChildModal /> }
    </div>
  )
}

export default GlobalModalLayer;