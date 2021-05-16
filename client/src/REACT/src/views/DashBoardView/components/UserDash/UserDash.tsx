import React from 'react';
import Centralizer from '../../../../components/Stucture/Centralizer/Centralizer';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import ChildProfile from '../ChildProfile/ChildProfile';
import NewChildButton from '../NewChildButton/NewChildButton';
import User from '../User/User';

interface props {
  userChildren: [databaseUser.Child],
  userParent: databaseUser.Parent
}

const UserDash = ({ userChildren: cn, userParent: up }: props) => {
  return (
    <div style={{
      paddingTop: "10px",
      paddingBottom: "10px",
    }}>
      <div style={{
        position: "relative",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <User parent={up} />
        <div style={{
          marginTop: "25px",
          height: "2px",
          width: "100%",
          backgroundColor: "black"
        }}
        />
        <div style={{
          marginTop: "30px"
        }}>
          {cn !== null && cn !== undefined ? Object.keys(cn).map(k => {
            if (cn[k] !== null) {
              const child = cn[k] as databaseUser.Child;
              return <ChildProfile key={child.name + child.birthDate} child={child}/>
            }
          }) : null}
          <div style={{

          }}>
            <NewChildButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDash;