import React from 'react';
import useFirebaseAddChildToUser from '../../../queries/firebase/useFirebaseAddChildToUser';
import LoadingScreen from '../../LoadingScreen/LoadingScreen';
import Centralizer from '../../Stucture/Centralizer/Centralizer';
import Columnizer from '../../Stucture/Columnizer/Columnizer';

interface props {
  data: {
    name: string,
    birthDate: string
  } | null,
  onCloseClicked: () => void
}

const NewChildTaskModal = ({ data, onCloseClicked }: props) => {

  const { isPending, hasError, error, data: restData } = useFirebaseAddChildToUser("0", data);

  if (isPending) return <LoadingScreen />
  if (error) console.log(error);
  console.log(restData)


  return (
    <div style={{
      position: "fixed",
      zIndex: 5,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "white"
    }}
      onClick={onCloseClicked}>
      <Centralizer>
        <div style={{
          padding: "50px"
        }}>
          {isPending && <LoadingScreen />}
          {hasError && <h1>error</h1>}
          {restData && (
            <div
              style={{
                position: "relative",
              }}
            >
              <Columnizer>
                <h1>Barn sparat!</h1>
                <div>
                  <svg stroke="black" fill="black" strokeWidth="0" viewBox="0 0 1024 1024" height="6em" width="6em" xmlns="http://www.w3.org/2000/svg"><path d="M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path></svg>
                </div>
              </Columnizer>
            </div>
          )}
        </div>
      </Centralizer>
    </div>
  )
}

export default NewChildTaskModal;