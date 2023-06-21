import React from 'react';
function Sublink({ page, links }) {
  return (
    <article>
      <h4>{page}</h4>
      <div className='sidebar-sublinks'>
        {links.map((link) => {
          const { id, label, icon, url } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </article>
  );
}

export default Sublink;
