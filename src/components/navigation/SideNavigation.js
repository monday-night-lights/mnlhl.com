import React from 'react';

import ImgLogo from 'static/img/mnlhl-logo.png';

import { STATS, navLinks } from './MainNavigation';
import { StatsMenu } from './StatsMenu';

export const SideNavigation = () => {
  return (
    <div id='slide-out' className='sidenav flow-text'>
      <div className='logo'>
        <a href='#' className='brand-logo'>
          <img src={ImgLogo} className='brand-logo responsive-image' />
        </a>
      </div>
      <div>
        <ul className='collapsible collapsible-accordion'>
          {navLinks.map(({ text, href, icon, modalTrigger }) => (
            <li key={text}>
              {text === STATS ? (
                <>
                  <a className='collapsible-header'>
                    <i className='material-icons left'>{icon}</i>
                    {text}
                    <i className='material-icons bigger right'>arrow_drop_down</i>
                  </a>
                  <StatsMenu className='collapsible-body' />
                </>
              ) : (
                <a href={href} className={modalTrigger ? 'modal-trigger' : ''}>
                  <i className='material-icons left'>{icon}</i>
                  {text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
