import { useReactiveVar } from '@apollo/client';
import axios from 'axios';
import { NoUndefinedVariablesRule } from 'graphql';
import React, { useEffect, useState } from 'react';
import useFirebaseUsers from './useFirebaseUsers';

interface props {
  email: string
}

const useGetFirebaseUser = ({ email }: props) => {
  const [didRun, setDidRun] = useState(false);
  const [state, setState] = useState({ userExists: false, user: null, hasError: false, data: null });

  useEffect(() => {
    const { data } = useFirebaseUsers();
    (data as [firebaseUser.Parent]).forEach(p => {
      
    })

  })


  return state;
}

export default useGetFirebaseUser;