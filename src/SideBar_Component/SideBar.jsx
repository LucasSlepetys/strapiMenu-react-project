import Sublink from './Sublink';
import React from 'react';
import { getContext } from '../ContextAPI/globalContext';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
function SideBar({}) {
  const { isDisplaySideBar, toggleSideBar } = getContext();

  return (
    <div className={isDisplaySideBar ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-container'>
        <FaTimes className='close-btn' onClick={toggleSideBar} />
        {sublinks.map((sublink) => {
          return <Sublink key={sublink.pageId} {...sublink} />;
        })}
      </div>
    </div>
  );
}

export default SideBar;
