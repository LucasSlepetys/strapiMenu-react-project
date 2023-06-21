import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { getContext } from './globalContext';
import sublinks from './data';
function NavBar({}) {
  const { toggleSideBar } = getContext();
  const [isSubDisplayed, setIsSubDisplayed] = useState(false);
  const [innerSubInfo, setInnerSubInfo] = useState({});

  const displaySubLinks = (id) => {
    setIsSubDisplayed(true);
    sublinks.forEach((link) => {
      if (link.pageId === id) {
        setInnerSubInfo(link);
        return;
      }
    });
  };

  return (
    <nav>
      <div className='nav-center'>
        <h4 className='logo'>Strapi</h4>
        <FaBars className='btn toggle-btn' onClick={toggleSideBar} />

        <div className='nav-links'>
          {sublinks.map((sublink) => {
            return (
              <button
                key={sublink.pageId}
                className='nav-link'
                onMouseEnter={() => displaySubLinks(sublink.pageId)}
              >
                {sublink.page}
              </button>
            );
          })}
        </div>
        <div
          className={isSubDisplayed ? 'submenu show-submenu' : 'submenu'}
          onMouseLeave={() => setIsSubDisplayed(false)}
        >
          <h5>{innerSubInfo.page}</h5>
          <div className='submenu-links'>
            {innerSubInfo?.links?.map((innerLink) => {
              const { id, label, icon, url } = innerLink;
              return (
                <a key={id} className='submenu-links' href={url}>
                  {icon} {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
