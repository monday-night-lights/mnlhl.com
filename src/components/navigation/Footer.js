import React from 'react';

const socialLinks = [
  { name: 'Twittter', href: 'https://twitter.com/mnl_hockey' },
  { name: 'Instagram', href: 'https://www.instagram.com/mnl_hockey/' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCkSRdje5r7dCKeuZaeitlXw' },
  { name: 'Twitch', href: 'https://www.twitch.tv/mnlhl' },
];

export const Footer = () => {
  return (
    <footer className='page-footer grey darken-4'>
      <div className='wrapper'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text flow-text'>Monday Night Lights Hockey League</h5>
            <p className='grey-text text-lighten-1 flow-text'>
              Located in Hazel Park, Michigan, Monday Night Lights is the most prestigious hockey
              league in Southeastern Michigan
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text flow-text'>Social</h5>
            <ul>
              {socialLinks.map(({ name, href }) => (
                <li key={name}>
                  <a className='grey-text text-lighten-3 flow-text' href={href}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright black'>
        <div className='wrapper flow-text'>
          &copy; {new Date().getFullYear()} Monday Night Lights Hockey League
          <a href='https://github.com/monday-night-lights/mnlhl.com'>
            <span className='material-icons'>code</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
