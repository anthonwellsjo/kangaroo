import React from 'react';
import useGetChildAgeInMonths from './useGetChildAgeInMonths';

const useGetAgesInMonthsOfChildren = (children: [firebaseUser.Child]) : number[] => {

  const ageArray = Object.keys(children).map(c => {
    if (children[c] !== undefined && children[c] !== null) {
      return useGetChildAgeInMonths(children[c].birthDate)
    }
  })
  return ageArray.filter(c => c !== undefined);

}

export default useGetAgesInMonthsOfChildren;