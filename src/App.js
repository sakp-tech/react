import React from 'react';
import './style.css';
import SideBar from './components/SideBar';
import Content from './components/Content';
import DataProvider from './provider/DataProvider';

export default function App() {
  return (
    <div>
      <h1>Provider Pattern!</h1>
      <DataProvider>
        <SideBar />
        <Content />
      </DataProvider>
    </div>
  );
}
