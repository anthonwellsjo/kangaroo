import React, { useContext, useEffect, useState } from 'react';
import Frame from '../Frame/Frame';
import CSS from 'csstype';
import Centralizer from '../Stucture/Centralizer/Centralizer';
import Navbar from '../Navbar/Navbar';
import SiteTitle from '../SiteTitle/SiteTitle';
import Rectangle from '../Composition/Rectangle';
import LogoMenu from '../Logo/LogoMenu';
import { PageContext } from '../../contexts/pageContext';
import firebase from 'firebase/app';
import AlertHandler from '../AlertHandler/AlertHandler';
import useCompositionColor from '../../hooks/useCompositionColor';

const style: CSS.Properties = {
  height: "100vh",
  width: "100vw"
}

const MainLayout: React.FC = ({ children }) => {
  const [page, setPage] = useContext(PageContext);
  const [array, setArray] = useState<AlertItem[]>([]);

  const onLogOutEventHandler = () => {
    firebase.auth().signOut()
      .then(() => {
        setPage(prev => ({ ...prev, user: firebase.auth().currentUser }));
      })
      .catch(err => console.log(err))

  }


  useEffect(() => {
    const user = firebase.auth().currentUser;
    setTimeout(() => {
      setArray(prev => ([...prev, { header: "Pass på!", text: "Det här är min återanvändbara komponent. Den heter AlertHandler.", color: useCompositionColor("orange") }]));
    }, 1000)
    setTimeout(() => {
      setArray(prev => ([...prev, { header: "Varning!", text: "Den använder react-spring för att generera meddelanden med hooken useTransition.", color: useCompositionColor("red") }]));
    }, 4000)
    setTimeout(() => {
      setArray(prev => ([...prev, { header: "Bra nyheter!", text: "Den tar t.ex. en prop av typen AlertItem[]. Du kan läsa dokumentationen inuti komponenten.", color: useCompositionColor("green") }]));
    }, 7000)
    setPage(prev => ({ ...prev, user: user }));
  }, [])


  return (
    <>
      <AlertHandler messageDelayMs={6000} setter={setArray} items={array} />
      <div style={style}>
        {page.user && <button
          style={{
            zIndex: 5,
            position: "fixed",
            top: "20px",
            right: "200px",
            backgroundColor: "red"
          }}
          onClick={onLogOutEventHandler}
        >
          Sign Out
        </button>
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