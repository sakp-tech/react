import React from 'react';
import { DataContext } from './context';

export default function DataProvider({ children }) {
  const data = {
    content: 'Main Content',
    sidebarContent: 'Side Content',
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
