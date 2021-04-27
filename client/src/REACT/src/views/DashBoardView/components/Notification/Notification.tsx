import React from 'react';
import { SanityNotification } from '../../../../../../../sanity-types';
import CSS from 'csstype';
import useCompositionColor from '../../../../hooks/useCompositionColor';

const cardStyle: CSS.Properties = {
  height: "100px",
  width: "80%",
  backgroundColor: useCompositionColor("pink"),
  margin: "10px"
}

const titleStyle: CSS.Properties = {
  fontSize: "1.1em",
  fontFamily: "Nanito Sans"
}
const descStyle: CSS.Properties = {
  fontSize: ".8em",
  fontFamily: "Nanito Sans",
  textOverflow: "ellipsis",
  whiteSpace:"pre-wrap"
}

interface props {
  notification: SanityNotification
}


const Notification = ({ notification: n }: props) => {
  return (
    <div style={cardStyle}>
      <h1 style={titleStyle}>{n.title}</h1>
      <p style={descStyle}>{n.description}</p>
    </div>
  )
}

export default Notification;