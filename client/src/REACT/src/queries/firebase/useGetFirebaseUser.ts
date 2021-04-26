import React from 'react';

const useGetFirebaseUser = (data: [firebaseUser.Parent], email: string) => {
  let user;

  if (data) {
    (data as [firebaseUser.Parent]).forEach(p => {
      console.log(p);
      if (p.email == email) {
        console.log("found it!", p.email, email);
        user = p;
      }
    })
  }
  return user;
}



export default useGetFirebaseUser;