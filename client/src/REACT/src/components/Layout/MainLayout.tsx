import React, { useContext, useEffect } from 'react';
import Frame from '../Frame/Frame';
import CSS from 'csstype';
import Centralizer from '../Stucture/Centralizer/Centralizer';
import Navbar from '../Navbar/Navbar';
import SiteTitle from '../SiteTitle/SiteTitle';
import Rectangle from '../Composition/Rectangle';
import LogoMenu from '../Logo/LogoMenu';
import { PageContext } from '../../contexts/pageContext';
import firebase from 'firebase/app';

const style: CSS.Properties = {
  height: "100vh",
  width: "100vw"
}

const MainLayout: React.FC = ({ children }) => {
  const [page, setPage] = useContext(PageContext);

  const onLogOutEventHandler = () => {
    firebase.auth().signOut()
      .then(() => {
        setPage(prev => ({ ...prev, user: firebase.auth().currentUser }));
      })
      .catch(err => console.log(err))

  }


  useEffect(() => {
    const user = firebase.auth().currentUser;
    setPage(prev => ({ ...prev, user: user }));
  }, [])


  return (
    <>
      <div style={{
        position: "absolute",
        bottom: 0,
        fontSize:".7em",
        
      }}>
        <p>
          Obs! För att testa funktionerna i denna prototyp:
          1.Logga in anonymt genom att klicka på Testa Nu / Bli Medlem och registrera med facebook-loggan
          2.Ta bort och lägg till barn med olika åldrar (högst 10 år och minst 3 månader) för att se hur innehållet på sidan uppdateras
        </p>
      </div>

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