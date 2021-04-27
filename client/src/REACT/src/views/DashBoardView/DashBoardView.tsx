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
import NotificationContainer from './components/NotificationContainer/NotificationContainer';
import UserDash from './components/UserDash/UserDash';
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

  let children;
  if (user) {
    if (user.children) {
      children = [...user.children];
    }
  }


  return (
    <>
      {/* {user &&
        <FadeInTransition trigger delay={100} length={300}>
          <UserGreeting user={user} />
        </FadeInTransition>
      } */}
      <ViewLayoutWrapper>
        {isPending && <LoadingScreen />}
        {hasError && <h1>Error!</h1>}
        {user &&
          <>
            <ViewColumn widthInPercent={10} >
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: useCompositionColor("grey")
              }}>
                <UserDash userChildren={children} />
              </div>
            </ViewColumn>
            <ViewColumn widthInPercent={30} scrollable fadeScroll>
              <FadeInTransition trigger length={300} delay={100}>
                <NotificationContainer children={children} />
              </FadeInTransition>
            </ViewColumn>
            <ViewColumn widthInPercent={60} scrollable >
              <FadeInTransition trigger length={300} delay={600}>
                <div
                  style={{
                    position: "relative",
                    textAlign: "center"
                  }}
                ><h1>Articles</h1></div>
              </FadeInTransition>
            </ViewColumn>
          </>
        }
      </ViewLayoutWrapper>
    </>
  )
}

export default DashBoardView;