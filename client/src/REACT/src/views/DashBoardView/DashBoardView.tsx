import React, { useEffect } from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import useFirebaseUsers from '../../queries/firebase/useFirebaseUsers';

const DashBoardView: React.FC = () => {

  const { isPending, hasError, data } = useFirebaseUsers();
  if (isPending) return <LoadingScreen />
  if (hasError) return <h1>Error!</h1>
  console.log("got data", data);


  return (
    <h1>Dashboard</h1>
  )
}

export default DashBoardView;