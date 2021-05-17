import { useMutation } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../../../contexts/alertContext';
import useCompositionColor from '../../../hooks/useCompositionColor';
import { apolloDbClient } from '../../../queries/apollo/apolloClients';
import { DELETE_CHILD } from '../../../queries/database/databaseQueries';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import Centralizer from '../../Stucture/Centralizer/Centralizer';
import Columnizer from '../../Stucture/Columnizer/Columnizer';

interface props {
  childId: number,
  onClose: () => void
}

const DeleteChildTaskModal = ({ childId, onClose }: props) => {
  const [alerts, setAlerts] = useContext(AlertContext);
  const [deleteChild, { data: responseData, loading, error }] = useMutation(DELETE_CHILD, { client: apolloDbClient });

  useEffect(() => {
    console.log("removing child", childId);
    deleteChild({ variables: { id: childId } });
  }, [])

  useEffect(() => {
    if (error) {
      console.log("delete error", error);
      const item: AlertItem = { header: "Fel!", text: "Någonting blev fel. Vänligen försök igen...", color: useCompositionColor("red") };
      setAlerts(prev => ([...prev, item]));
    }
    if (responseData) {
      const item: AlertItem = { header: "Det gick bra.", text: `Barnet har nu tagits bort.`, color: useCompositionColor("green") };
      setAlerts(prev => ([...prev, item]));
    }
  }, [error, responseData])

  if (loading) return <LoadingScreen />


  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        zIndex: 5,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(255,255,255,0.8)"
      }}>
      <Centralizer>
        <div style={{
          padding: "50px",
          backgroundColor: "white"
        }}>
          <Columnizer>
            <h1>Barn borttaget!</h1>
            <div>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" height="6em" width="6em" xmlns="http://www.w3.org/2000/svg"><g fill="#D1C4E9"><path d="M38,7H10C8.9,7,8,7.9,8,9v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2V9C40,7.9,39.1,7,38,7z"></path><path d="M38,19H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,19.9,39.1,19,38,19z"></path><path d="M38,31H10c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h28c1.1,0,2-0.9,2-2v-6C40,31.9,39.1,31,38,31z"></path></g><circle fill="#F44336" cx="38" cy="38" r="10"></circle><g fill="#fff"><rect x="36.5" y="32" transform="matrix(-.707 .707 -.707 -.707 91.74 38)" width="3" height="12"></rect><rect x="36.5" y="32" transform="matrix(-.707 -.707 .707 -.707 38 91.74)" width="3" height="12"></rect></g></svg>
            </div>
          </Columnizer>
        </div>
      </Centralizer>
    </div>
  )
}

export default DeleteChildTaskModal;