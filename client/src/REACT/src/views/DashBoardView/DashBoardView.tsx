import React, { useContext, useEffect, useState } from 'react';
import ColumnStroke from '../../components/Composition/ColumnStroke';
import ViewColumn from '../../components/Layout/ViewLayout/ViewColumn';
import ViewLayoutWrapper from '../../components/Layout/ViewLayout/ViewLayoutWrapper';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import FadeInTransition from '../../components/Transitions/FadeIn';
import { PageContext } from '../../contexts/pageContext';
import { UserContext } from '../../contexts/userContext';
import useGetAgesInMonthsOfChildren from '../../hooks/useGetAgesInMonthsOfChildren';
import useFirebaseUsers from '../../queries/firebase/useFirebaseUsers';
import useGetFirebaseUser from '../../queries/firebase/useGetFirebaseUser';
import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
import NotificationContainer from './components/NotificationContainer/NotificationContainer';
import UserDash from './components/UserDash/UserDash';

const DashBoardView: React.FC = () => {

  const [user, setUser] = useContext(UserContext);
  const [page, setPage] = useContext(PageContext);

  const loggedInUser = user.loggedInUser as databaseUser.Parent;
  const childAgesArray = useGetAgesInMonthsOfChildren(loggedInUser.children);


  useEffect(() => {
    setPage(prev => ({ ...prev, showFocusOnRegisterBackdrop: false, showKangarooBackdrop: false, }));
  }, [])

  useEffect(() => {
    if (page.refreshDashboardView) {
      //reloads page to rerender all children of user
      location.reload();
      setPage(prev => ({ ...prev, refreshDashboardView: false }));
    }
  }, [page.refreshDashboardView])


  return (
    <>
      <ViewLayoutWrapper>
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
                  <UserDash userParent={loggedInUser} userChildren={loggedInUser.children} />
                </FadeInTransition>
              </div>
            </div>
          </ViewColumn>
          <ViewColumn widthInPercent={40} scrollable fadeScroll>
            {childAgesArray != null && childAgesArray.length > 0 ?
              <FadeInTransition trigger length={300} delay={0}>
                <NotificationContainer ageArray={childAgesArray} children={loggedInUser.children} />
              </FadeInTransition> : null}
            <ColumnStroke style="grey" />
          </ViewColumn>
          <div style={{ position: "absolute", right: "150px" }}>
            <ColumnStroke style="pink" />
          </div>
          <ViewColumn widthInPercent={50} scrollable fadeScroll>
            {childAgesArray != null && childAgesArray.length > 0  && loggedInUser != null ?
              <FadeInTransition trigger length={300} delay={600}>
                <ArticlesContainer ageArray={childAgesArray} userChildren={loggedInUser.children} />
              </FadeInTransition> : null
            }
          </ViewColumn>
        </>
      </ViewLayoutWrapper>

    </>
  )
}

export default DashBoardView;