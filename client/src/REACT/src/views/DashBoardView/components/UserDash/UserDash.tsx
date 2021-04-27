import React from 'react';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';

interface props {
  userChildren: [firebaseUser.Child]
}

const UserDash = ({ userChildren: cn }: props) => {
  return (
    <Columnizer>
      {cn.map(c => {
        return <div>{(c as firebaseUser.Child).name}</div>
      })}
    </Columnizer>
  )
}

export default UserDash;