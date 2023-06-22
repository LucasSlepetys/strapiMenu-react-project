import NavbarInnerSubLink from './NavbarInnerSubLink';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { getContext } from '../ContextAPI/globalContext';
import sublinks from '../data';
function NavBar({}) {
  const { toggleSideBar, setInnerSubInfo } = getContext();

  const displaySubLinks = (id) => {
    sublinks.forEach((link) => {
      if (link.pageId === id) {
        setInnerSubInfo(link);
        return;
      }
    });
  };

  const handleOver = (e) => {
    console.log(e.target.classList);
    if (!e.target.classList.contains('nav-link')) {
      setInnerSubInfo(null);
    }
  };

  return (
    <nav>
      <div className='nav-center'>
        <h4 className='logo'>Strapi</h4>
        <FaBars className='btn toggle-btn' onClick={toggleSideBar} />
        <div onMouseOver={handleOver} className='nav-links'>
          {sublinks.map((sublink) => {
            const { pageId, page } = sublink;
            return (
              <button
                key={pageId}
                className='nav-link'
                onMouseOver={() => displaySubLinks(pageId)}
              >
                {page}
              </button>
            );
          })}
        </div>
        <NavbarInnerSubLink />
      </div>
    </nav>
  );
}

export default NavBar;
