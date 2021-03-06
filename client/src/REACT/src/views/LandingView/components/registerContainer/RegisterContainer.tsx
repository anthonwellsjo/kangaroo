import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import firebase from "firebase/app";
import "firebase/auth";
import Centralizer from '../../../../components/Stucture/Centralizer/Centralizer';
import Columnizer from '../../../../components/Stucture/Columnizer/Columnizer';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import { PageContext } from '../../../../contexts/pageContext';


type Inputs = {
  email: string,
  password: string
};

interface props {
  onOpen: () => void
}


const RegisterContainer = ({ onOpen }: props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const [page, setPage] = useContext(PageContext);
  const onSubmit = data => console.log(data);

  const logInWithGoogleEventHandler = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(() => {
        const user = firebase.auth().currentUser;
        console.log("logged in!");
        setPage(prev => ({ ...prev, user: user }))
      })
      .catch(err => console.log(err.message));

  }
  const logInWithAnonEventHandler = () => {
    firebase.auth().signInAnonymously()
      .then(() => {
        const user = firebase.auth().currentUser;
        console.log("logged in!", user);
        setPage(prev => ({ ...prev, user: user }))
      })
      .catch(err => console.log(err.message));

  }


  return (
    <>
      <div
        style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", justifyContent: "center" }}>
        <h1 onClick={onOpen} style={{ fontWeight: 900, color: "white", display: "inline-block", userSelect: "none" }}>Bli medlem</h1>
      </div>
      <Centralizer>
        <form style={{ marginTop: "30px" }} id="registerForm" className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ position: "relative", zIndex: 1, top: "-50px", width: "80%", borderRadius: "10px", height: "120px", display: "flex", justifyContent: "center", backgroundColor: "white", overflow: "hidden" }}>
            <Columnizer>
              <input id="registerEmail" className="inputText" placeholder="Epost" type="email" {...register("email")} />
              <input className="inputText" placeholder="L??senord" type="password" {...register("password", { required: true })} />
              {errors.password && <span id="varningstext">V??nligen ange ett l??senord</span>}
            </Columnizer>
          </div>
          <input className="signInButton" style={{ position: "relative", top: "-10px" }} value="Registrera" type="submit" />
        </form>
      </Centralizer>
      <Centralizer>
        <div style={{ position: "relative", bottom: "-100px" }}>
          <button
            className="socialSignButton"
            onClick={logInWithGoogleEventHandler}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path></svg>
          </button>
          <button
            className="socialSignButton"
            data-testid="signin-anon"
            onClick={logInWithAnonEventHandler}
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
          </button>
        </div>
      </Centralizer>
    </>

  )
}

export default RegisterContainer;