import React from 'react';
import useDataContext from '../provider/context';

export default function Texts({ sideBar }) {
  const data = useDataContext();
  return <div>{sideBar ? data.sidebarContent : data.content}</div>;
}
