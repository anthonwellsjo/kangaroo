import React from 'react';
import useFirebaseDeleteChildFromUser from '../../../queries/firebase/useFirebaseDeleteChildFromUser';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import Centralizer from '../../Stucture/Centralizer/Centralizer';
import Columnizer from '../../Stucture/Columnizer/Columnizer';

interface props {
  childId: string,
  parentId: string,
  onClose: () => void
}

const DeleteChildTaskModal = ({ childId, parentId, onClose }: props) => {

  const { isPending, hasError, error, data } = useFirebaseDeleteChildFromUser(parentId, childId)

  if (isPending) return <LoadingScreen />
  if (hasError) return <h1>Error</h1>

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