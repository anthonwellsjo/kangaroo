import React, { useState } from 'react';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import CSS from 'csstype';
import FadeInTransition from '../../../../components/Transitions/FadeIn';
import useFirebaseDeleteChildFromUser from '../../../../queries/firebase/useFirebaseDeleteChildFromUser';
import DeleteChildTaskModal from '../../../../components/Modals/DeleteChildTaskModal/DeleteChildTaskModal';
import useGetChildAgeInMonths from '../../../../hooks/useGetChildAgeInMonths';

interface props {
  child: firebaseUser.Child,
  childId: string
}

const titleStyle: CSS.Properties = {
  marginTop: "5px",
  fontWeight: 900,
  fontSize: "0.8em",
  fontFamily: "Martel"
}
const ageStyle: CSS.Properties = {
  marginTop: "-20px",
  fontWeight: 500,
  fontSize: "0.7em",
  fontFamily: "Martel"
}
const optionsStyle: CSS.Properties = {
  width: "25px",
  height: "25px",
  right: "-25%",
  top: "-10px",
  position: "absolute",
}

const ChildProfile = ({ child, childId }: props) => {

  const onClickDeleteChildEventHandler = () => {
    setState(prev => ({ ...prev, deleteChildStatusModalOpen: true }));

  }
  const [state, setState] = useState({ isHovering: false, deleteChildStatusModalOpen: false });
  const onCloseStatusModal = () => {
    setState(prev => ({ ...prev, deleteChildStatusModalOpen: false }));
    location.reload();
  }

  return (
    <div
      onMouseEnter={() => setState(prev => ({ ...prev, isHovering: true }))}
      onMouseLeave={() => setState(prev => ({ ...prev, isHovering: false }))}
      style={{
        cursor: "pointer",
      }}>
      <Columnizer>
        <svg className="childBtn" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><circle cx="14.5" cy="10.5" r="1.25"></circle><circle cx="9.5" cy="10.5" r="1.25"></circle><path d="M22.94 12.66c.04-.21.06-.43.06-.66s-.02-.45-.06-.66c-.25-1.51-1.36-2.74-2.81-3.17-.53-1.12-1.28-2.1-2.19-2.91C16.36 3.85 14.28 3 12 3s-4.36.85-5.94 2.26c-.92.81-1.67 1.8-2.19 2.91-1.45.43-2.56 1.65-2.81 3.17-.04.21-.06.43-.06.66s.02.45.06.66c.25 1.51 1.36 2.74 2.81 3.17.52 1.11 1.27 2.09 2.17 2.89C7.62 20.14 9.71 21 12 21s4.38-.86 5.97-2.28c.9-.8 1.65-1.79 2.17-2.89 1.44-.43 2.55-1.65 2.8-3.17zM19 14c-.1 0-.19-.02-.29-.03-.2.67-.49 1.29-.86 1.86C16.6 17.74 14.45 19 12 19s-4.6-1.26-5.85-3.17c-.37-.57-.66-1.19-.86-1.86-.1.01-.19.03-.29.03-1.1 0-2-.9-2-2s.9-2 2-2c.1 0 .19.02.29.03.2-.67.49-1.29.86-1.86C7.4 6.26 9.55 5 12 5s4.6 1.26 5.85 3.17c.37.57.66 1.19.86 1.86.1-.01.19-.03.29-.03 1.1 0 2 .9 2 2s-.9 2-2 2zM7.5 14c.76 1.77 2.49 3 4.5 3s3.74-1.23 4.5-3h-9z"></path></svg>
        {state.isHovering &&
          <FadeInTransition trigger length={300}>
            <div
              style={optionsStyle}
            >
              <Columnizer>
                <div style={{
                  marginBottom: "3px"
                }}>
                  <svg stroke="green" fill="green" strokeWidth="0" viewBox="0 0 24 24" height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M12,17 C14.7614237,17 17,14.7614237 17,12 C17,9.23857625 14.7614237,7 12,7 C9.23857625,7 7,9.23857625 7,12 C7,14.7614237 9.23857625,17 12,17 Z"></path></svg>
                </div>
                <div
                  onClick={onClickDeleteChildEventHandler}
                >
                  <svg stroke="red" fill="red" strokeWidth="0" viewBox="0 0 24 24" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path></g></svg>
                </div>
              </Columnizer>
            </div>
          </FadeInTransition>
        }
        <p style={titleStyle}
        >{child.name}</p>
        <p style={ageStyle}
        >{useGetChildAgeInMonths(child.birthDate)}</p>
        <p style={ageStyle}>månader</p>
      </Columnizer>
      {state.deleteChildStatusModalOpen && <DeleteChildTaskModal onClose={onCloseStatusModal} childId={childId} parentId="0" />}
    </div>
  )
}

export default ChildProfile;