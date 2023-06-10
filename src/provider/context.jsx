import React, { createContext, useContext } from 'react';

export const DataContext = createContext();

console.log('ok context is: ', DataContext);

export default function useDataContext() {
  const data = useContext(DataContext);
  return data;
}
