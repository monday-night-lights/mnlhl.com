import React from 'react';

const cards = [
  {
    title: 'Stats and Schedule',
    text: 'Statistics, schedule, and scores can be found here.',
    link: {
      href: 'http://stats.mnlhl.com',
      text: 'Click Here',
    },
  },
  {
    title: 'Monday Night Lights Hockey Network',
    text: 'Your best source for Monday Night Lights news, rumors, analysis, stats, and recaps.',
    link: {
      href: 'http://news.mnlhl.com',
      text: 'Read Up!',
    },
  },
  {
    title: 'MNL Shop',
    text: 'Your one-stop spot for Monday Night Lights gear!',
    link: {
      href: 'http://shop.mnlhl.com',
      text: 'Shop Now!',
    },
  },
];

export const Cards = () => {
  return (
    <div className='wrapper' style={{ marginTop: '15px' }}>
      <div className='card-row row'>
        {cards.map(({ title, text, link }) => (
          <div className='card grey lighten-4 col l3 s11 hoverable' key={title}>
            <div className='card-content'>
              <span className='card-title'>{title}</span>
              <p className='flow-text'>{text}</p>
            </div>
            <div className='card-action'>
              <a href={link.href} className='flow-text'>
                {link.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
