import { useSpring } from '@react-spring/core';
import { parseValue } from 'graphql';
import React, { useContext, useEffect, useState } from 'react';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import Centralizer from '../../components/Stucture/Centralizer/Centralizer';
import Columnizer from '../../components/Stucture/Columnizer/Columnizer';
import FadeInTransition from '../../components/Transitions/FadeIn';
import { PageContext } from '../../contexts/pageContext';
import useCompositionColor from '../../hooks/useCompositionColor';
import useFirebaseUsers from '../../queries/firebase/useFirebaseUsers';
import useGetFirebaseUser from '../../queries/firebase/useGetFirebaseUser';
import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
import NotificationContainer from './components/NotificationContainer/NotificationContainer';
import UserDash from './components/UserDash/UserDash';
import UserGreeting from './components/UserGreeting';

const DashBoardView: React.FC = () => {

  //App-User lives on firebase for prototype-purpose, 
  //will instead be implemented with graphql-apollo-prisma-postgres backend 
  //Firebase-auth will still be used for auth.

  const [user, setUser] = useState<null | firebaseUser.Parent>(null)
  const [page, setPage] = useContext(PageContext);


  const { isPending, hasError, data } = useFirebaseUsers();

  useEffect(() => {
    setPage(prev => ({ ...prev, showFocusOnRegisterBackdrop: false, showKangarooBackdrop: false, }))
  }, [])

  useEffect(() => {
    const user = useGetFirebaseUser(data, "anthon@gmail.com");
    setUser(user);
    console.log("user", user);
  }, [data]);

  let children;
  if (user) {
    if (user.children) {
      children = { ...user.children };
    }
  }

  useEffect(() => {
    if (page.refreshDashboardView) {
      location.reload();
      setPage(prev => ({ ...prev, refreshDashboardView: false }));
    }
  }, [page.refreshDashboardView])


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
                top: "80px",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
              }}>
                <div style={{
                }}>
                  <FadeInTransition trigger length={300} delay={0}>
                    <UserDash userParent={user} userChildren={children} />
                  </FadeInTransition>
                </div>
              </div>
            </ViewColumn>
            <ViewColumn widthInPercent={30} scrollable fadeScroll>
              <FadeInTransition trigger={children} length={300} delay={0}>
                <NotificationContainer children={children} />
              </FadeInTransition>
            </ViewColumn>
            <ViewColumn widthInPercent={60} scrollable >
              <FadeInTransition trigger length={300} delay={600}>
                <ArticlesContainer userChildren={children} />
              </FadeInTransition>
            </ViewColumn>
          </>
        }
      </ViewLayoutWrapper>
    </>
  )
}

export default DashBoardView;