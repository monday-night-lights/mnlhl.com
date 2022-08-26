import React from 'react';

import ImgLogo from 'static/img/mnlhl-logo.png';

export const STATS = 'Stats';

export const navLinks = [
  {
    text: STATS,
    href: '#!',
    icon: 'format_list_numbered',
    dropdownTarget: 'stats-dropdown',
  },
  {
    text: 'Game Times',
    href: '#calendar-modal',
    icon: 'event',
    modalTrigger: true,
  },
  {
    text: 'Shop',
    href: 'http://shop.mnlhl.com',
    icon: 'shopping_cart',
  },
  {
    text: 'Rules',
    href: 'http://rules.mnlhl.com',
    icon: 'book',
  },
  {
    text: 'News',
    href: 'http://news.mnlhl.com',
    icon: 'ballot',
  },
  {
    text: 'Chat',
    href: 'https://mnlhl.slack.com',
    icon: 'message',
  },
  {
    text: 'Photos',
    href: 'http://photos.mnlhl.com',
    icon: 'photo_library',
  },
  {
    text: 'Podcast',
    href: '#podcast-modal',
    icon: 'headset',
    modalTrigger: true,
  },
];

export const MainNavigation = () => {
  return (
    <nav className='grey darken-4'>
      <a href='#' data-target='slide-out' className='sidenav-trigger'>
        <i className='material-icons'>menu</i>
      </a>

      <div className='nav-wrapper wrapper'>
        <a href='#' className='brand-logo'>
          <img src={ImgLogo} className='brand-logo hoverable' />
        </a>

        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {navLinks.map(({ text, href, icon, dropdownTarget, modalTrigger }) => {
            const classes = ['hoverable'];
            if (dropdownTarget) classes.push('dropdown-trigger');
            if (modalTrigger) classes.push('modal-trigger');

            return (
              <li key={text}>
                <a className={classes.join(' ')} href={href} data-target={dropdownTarget || ''}>
                  <i className='material-icons left'>{icon}</i>
                  {text}
                  {dropdownTarget ? <i className='material-icons right'>arrow_drop_down</i> : null}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
