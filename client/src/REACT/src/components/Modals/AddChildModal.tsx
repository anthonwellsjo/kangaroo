import React, { useContext } from 'react';
import Centralizer from '../Stucture/Centralizer/Centralizer';
import { useForm } from "react-hook-form";
import Columnizer from '../Stucture/Columnizer/Columnizer';
import { UserContext } from '../../contexts/userContext';
import useFirebaseAddChildToUser from '../../queries/firebase/useFirebaseAddChildToUser';

type Inputs = {
  name: string,
  age: string
};

const AddChildModal: React.FC = () => {
  const [user, setUser] = useContext(UserContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = () => {
    data => console.log(data);
    const { isPending: false, hasError: false, data: null } = useFirebaseAddChildToUser()
  }

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div
      style={{
        position: "fixed",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: "100vw",
        height: "100vh",
        zIndex: 5,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Centralizer>
        <div style={{
          backgroundColor: "white",
          boxShadow: "2px 2px 100px lightgrey",
          position: "relative",
          minWidth: "300px"
        }}>
          <div style={{
            width: "100%",
            textAlign: "center",
            paddingBottom: "30px"
          }}>
            <h1>Nytt barn</h1>
          </div>
          <form style={{ marginTop: "30px" }} id="registerForm" className="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <div style={{ position: "relative", zIndex: 1, top: "-50px", width: "80%", borderRadius: "10px", height: "120px", display: "flex", justifyContent: "center", backgroundColor: "white", overflow: "hidden" }}>
              <Columnizer>
                <input id="registerEmail" className="inputText" placeholder="Namn" type="string" {...register("name", { required: true })} />
                <input className="inputText" placeholder="Ålder" type="number" {...register("age", { required: true })} />
                {errors.password && <span id="varningstext">Vänligen ange ett lösenord</span>}
              </Columnizer>
            </div>
            <input className="signInButton" style={{ position: "relative", top: "-10px" }} value="Lägg till" type="submit" />
          </form>
          <div style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            cursor: "pointer"
          }}
            onClick={() => setUser(prev => ({ ...prev, showNewChildModal: false }))}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg>
          </div>
        </div>
      </Centralizer>
    </div>
  )
}

export default AddChildModal;