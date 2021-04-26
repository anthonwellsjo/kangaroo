import { useSpring } from '@react-spring/core';
import React, { useEffect, useState } from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import useFirebaseUsers from '../../queries/firebase/useFirebaseUsers';

const DashBoardView: React.FC = () => {
  const [user, setUser] = useState<null | firebaseUser.Parent>(null)


  const { isPending, hasError, data } = useFirebaseUsers();

  useEffect(() => {
    console.log("got data hell yeah", data);
    const user = (() => {
      if (data) {
        (data as [firebaseUser.Parent]).forEach(p => {
          console.log(p);
          if (p.email == "anthon@gmail.com") {
            console.log("found it!");
            return p;
          }
        })
      }
    })();
  }, [data]);




  return (
    <>
      {isPending && <LoadingScreen />}
      {hasError && <h1>Error!</h1>}
      <h1>Dashboard</h1>
      {data && <h1>{(data[0] as firebaseUser.Parent).name}</h1>}
    </>
  )
}

export default DashBoardView;