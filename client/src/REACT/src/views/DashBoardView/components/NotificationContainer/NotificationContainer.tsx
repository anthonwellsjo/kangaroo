import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { SanityNotification, SanityNotificationsQuery } from '../../../../../../../sanity-types';
import LoadingScreen from '../../../../components/LoadingScreen/LoadingScreen';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import FadeInTransition from '../../../../components/Transitions/FadeIn';
import useGetAgesInMonthsOfChildren from '../../../../hooks/useGetAgesInMonthsOfChildren';
import useGetChildAgeInMonths from '../../../../hooks/useGetChildAgeInMonths';
import { GET_USER_NOTIFICATIONS } from '../../../../queries/sanity/sanityQueries';
import Notification from '../Notification/Notification';

interface props {
  children: [firebaseUser.Child] | null,
  ageArray: number[] | null

}


const NotificationContainer = ({ children, ageArray }: props) => {

  console.log("children", children);
  console.log("object keys",);



  const { loading, error, data } = useQuery<SanityNotificationsQuery>(GET_USER_NOTIFICATIONS, { variables: { ageInMonths: ageArray[0] } });
  if (loading) return <LoadingScreen />
  if (error) {
    console.log(error);
    return <h1>Couldnt fetch notifications.</h1>
  }

  // console.log("notifications", (data.allNotification[0] as SanityNotification).title);
  console.log("notiser");
  return (
    <div style={{
      position: "relative",
      textAlign: "center",
      width: "100%",
    }}>
      <h1
        style={{
          fontWeight: 100
        }}
      >Notiser</h1>
      {data !== null && data !== undefined ? (
        <FadeInTransition trigger={true} length={300} delay={300} >
          < div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {data.allNotification.map((c, i, a) => {
              return <Notification key={(c as SanityNotification).externalId} notification={c} />
            })}
          </div>
        </FadeInTransition>) : null
      }
    </div >
  )
}

export default NotificationContainer;