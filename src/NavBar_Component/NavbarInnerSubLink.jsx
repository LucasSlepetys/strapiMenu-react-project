import React, { useRef } from 'react';
import { getContext } from '../ContextAPI/globalContext';
function NavbarInnerSubLink() {
  const { innerSubInfo, setInnerSubInfo } = getContext();
  const submenuContainer = useRef(null);

  const handleLeave = (event) => {
    //distances from left border and top border of the page until left/right/bottom side of component
    const { left, right, bottom } =
      submenuContainer.current.getBoundingClientRect();
    //Coordinates for cursor:
    const { clientX, clientY } = event;

    //if cursor is outside container, hides the subInnerLinks
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setInnerSubInfo(null);
    }
  };

  return (
    <div
      className={innerSubInfo ? 'submenu show-submenu' : 'submenu'}
      onMouseLeave={handleLeave}
      ref={submenuContainer}
    >
      <h5>{innerSubInfo?.page}</h5>
      <div
        className='submenu-links'
        style={{
          gridTemplateColumns:
            innerSubInfo?.links?.length > 3 ? 'repeat(2,1fr)' : '1fr',
        }}
      >
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
  );
}

export default NavbarInnerSubLink;
