import React from 'react';

const useGetChildAgeInMonths = (birthDate) => {
  console.log("birthdate", birthDate);
  const date = new Date(birthDate);
  return Math.round((new Date().getTime() - date.getTime()) / 1000 / 60 / 60 / 24 / 30);
}

export default useGetChildAgeInMonths;