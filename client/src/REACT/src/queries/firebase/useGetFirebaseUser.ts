import React from 'react';

const useGetFirebaseUser = (data: [databaseUser.Parent], email: string): databaseUser.Parent => {
  let user;

  if (data) {
    (data as [databaseUser.Parent]).forEach(p => {
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