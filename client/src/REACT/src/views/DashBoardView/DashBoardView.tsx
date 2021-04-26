import { useSpring } from '@react-spring/core';
import React, { useEffect, useState } from 'react';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import Centralizer from '../../components/Stucture/Centralizer/Centralizer';
import FadeInTransition from '../../components/Transitions/FadeIn';
import useCompositionColor from '../../hooks/useCompositionColor';
import useFirebaseUsers from '../../queries/firebase/useFirebaseUsers';
import useGetFirebaseUser from '../../queries/firebase/useGetFirebaseUser';
import Notifications from './components/Notifications/Notifications';
import UserGreeting from './components/UserGreeting';

const DashBoardView: React.FC = () => {

  //App-User lives on firebase for prototype-purpose, 
  //will instead be implemented with graphql-apollo-prisma-postgres backend 
  //Firebase-auth will still be used for auth.

  const [user, setUser] = useState<null | firebaseUser.Parent>(null)


  const { isPending, hasError, data } = useFirebaseUsers();

  useEffect(() => {
    const user = useGetFirebaseUser(data, "anthon@gmail.com");
    setUser(user);
    console.log("user", user);
  }, [data]);




  return (
    <>
      <ViewLayoutWrapper>
        {isPending && <LoadingScreen />}
        {hasError && <h1>Error!</h1>}
        {user &&
          <>
            <FadeInTransition trigger length={300}>
              <UserGreeting user={user} />
            </FadeInTransition>
            <ViewColumn widthInPercent={30} scrollable >
              <FadeInTransition trigger length={300} delay={500}>
                <Notifications user={user}/>
              </FadeInTransition>
            </ViewColumn>
            <ViewColumn widthInPercent={70} scrollable >
            </ViewColumn>
          </>
        }
      </ViewLayoutWrapper>
    </>
  )
}

export default DashBoardView;