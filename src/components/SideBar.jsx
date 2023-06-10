import React from 'react';
import Texts from './Texts';

export default function SideBar() {
  return (
    <div className="side-content">
      Side Content:
      <Texts sideBar={true} />
    </div>
  );
}
