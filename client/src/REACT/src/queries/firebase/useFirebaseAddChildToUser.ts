import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFirebaseAddChildToUser = (userId: string, child: firebaseUser.Child) => {
  const [didRun, setDidRun] = useState(false);
  const [state, setState] = useState({ isPending: false, hasError: false, error: null, data: null });
  console.log("running");
  useEffect(() => {
    if (!state.isPending && !state.hasError && !state.data && !didRun) {
      setDidRun(true);
      setState(prev => ({ ...prev, isPending: true }));
      console.log("running2");
      axios.post(`https://kangaroo-auth-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/children.json`, child)
        .then(res => {
          const data = res.data;
          console.log("got data", data);
          setState(prev => ({ ...prev, data: data }));
        })
        .catch(err => {
          console.log(err);
          setState(prev => ({ ...prev, hasError: true, error: err }));
        })
        .finally(() => {
          setState(prev => ({ ...prev, isPending: false }));
        })
    }
  }, [])


  return state;
}

export default useFirebaseAddChildToUser;