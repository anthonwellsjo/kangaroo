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
      setArray(prev => ([...prev, { header: "1", text: "1", color: "red" }]));
    }, 500)
    setTimeout(() => {
      setArray(prev => ([...prev, { header: "2", text: "2", color: "green" }]));
    }, 1000)
    setPage(prev => ({ ...prev, user: user }));
  }, [])


  return (
    <>
      <AlertHandler color="red" setter={setArray} items={array} />
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