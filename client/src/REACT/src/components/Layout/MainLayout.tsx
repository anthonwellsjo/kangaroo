import React, { useContext, useEffect, useState } from 'react';
import Frame from '../Frame/Frame';
import CSS from 'csstype';
import Centralizer from '../Stucture/Centralizer/Centralizer';
import Rectangle from '../Composition/Rectangle';
import LogoMenu from '../Logo/LogoMenu';
import { PageContext } from '../../contexts/pageContext';
import firebase from 'firebase/app';
import { UserContext } from '../../contexts/userContext';
import SignOutButton from './components/SignOutButton';
import { AlertContext } from '../../contexts/alertContext';
import useCompositionColor from '../../hooks/useCompositionColor';

const style: CSS.Properties = {
  height: "100vh",
  width: "100vw"
}

const MainLayout: React.FC = ({ children }) => {
  const [page, setPage] = useContext(PageContext);
  const [user, setUser] = useContext(UserContext);
  const [alerts, setAlerts] = useContext(AlertContext);

  const onLogOutEventHandler = () => {
    firebase.auth().signOut()
      .then(() => {
        setPage(prev => ({ ...prev, user: null }));
        setUser(prev => ({ ...prev, loggedInUser: null }));
        const alert: AlertItem = {header:"Välkommen åter.", text: "Du har nu loggats ut.", color: useCompositionColor("red")}
        setAlerts(prev=>([...prev, alert]));
      })
      .catch(err => { 
        console.log(err);
        const alert: AlertItem = {header:"Oopps..", text: "Något blev fel.", color: useCompositionColor("red")}
        setAlerts(prev=>([...prev, alert]));
      })

  }


  useEffect(() => {
    const user = firebase.auth().currentUser;
    setPage(prev => ({ ...prev, user: user }));
  }, [])


  return (
    <>
      <div style={style}>
        {page.user &&

          <SignOutButton onClick={onLogOutEventHandler} />

        }
        <Centralizer>
          <Frame>
            {children}
            {/* <Navbar /> */}
            {/* <SiteTitle /> */}
            <div style={{ position: "absolute", left: "20px", top: "90px", }}>
              <Rectangle color={"orange"} height="90px" width="10px" />
            </div>
          </Frame>
        </Centralizer>
        <LogoMenu />
      </div>
    </>
  )
}

export default MainLayout;