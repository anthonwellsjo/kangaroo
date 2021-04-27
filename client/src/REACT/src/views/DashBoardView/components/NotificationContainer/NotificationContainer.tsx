import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { SanityNotification, SanityNotificationsQuery } from '../../../../../../../sanity-types';
import LoadingScreen from '../../../../components/LoadingScreen/LoadingScreen';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import useGetChildAgeInMonths from '../../../../hooks/useGetChildAgeInMonths';
import { GET_USER_NOTIFICATIONS } from '../../../../queries/sanity/sanityQueries';
import Notification from '../Notification/Notification';

interface props {
  children: [firebaseUser.Child]
}


const NotificationContainer = ({ children }: props) => {
  console.log("children", children);
  const childMonths = useGetChildAgeInMonths(children[0].birthDate);
  const { loading, error, data } = useQuery<SanityNotificationsQuery>(GET_USER_NOTIFICATIONS, { variables: { ageInMonths: childMonths } });
  if (loading) return <LoadingScreen />
  if (error) {
    console.log(error);
    return <h1>Couldnt fetch notifications.</h1>
  }

  console.log("notifications", (data.allNotification[0] as SanityNotification).title);

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
      <div style={{
        position: "relative",
        top: "150px"
      }}>
        <Columnizer>
          {data.allNotification.map((c, i, a) => {
            return <Notification notification={c} />
          })}
        </Columnizer>
      </div>
    </div>
  )
}

export default NotificationContainer;