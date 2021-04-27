import React from 'react';
import Centralizer from '../../../../components/Stucture/Centralizer/Centralizer';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import useCompositionColor from '../../../../hooks/useCompositionColor';
import ChildProfile from '../ChildProfile/ChildProfile';
import NewChildButton from '../NewChildButton/NewChildButton';
import User from '../User/User';

interface props {
  userChildren: [firebaseUser.Child],
  userParent: firebaseUser.Parent
}

const UserDash = ({ userChildren: cn, userParent: up }: props) => {
  return (
    <div style={{
      backgroundColor: useCompositionColor("blue"),
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
          {cn.map(c => {
            return <ChildProfile key={c.name + c.birthDate} child={c} />
          })}
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