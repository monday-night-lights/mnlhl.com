import React from 'react';

import ImgPodcast from 'static/img/podcast.png';

const podcastLink = [
  {
    name: 'RSS Feed',
    href: 'http://feeds.feedburner.com/blogspot/mnlpodcast',
    color: 'black',
  },
  {
    name: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/us/podcast/mnl-podcast/id1467355332',
    color: 'light',
  },
  {
    name: 'Google Podcasts',
    href: 'https://play.google.com/music/m/I75vvrmsmatnlev2nbjh57thdim?t=MNL_Podcast',
    color: 'orange',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/show/3KgE6mPRGUWnchg9k4rMcZ',
    color: 'green',
  },
  {
    name: 'Stitcher',
    href: 'https://www.stitcher.com/s?fid=421604&refid=stpr',
    color: 'yellow',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/playlist?list=PLEpruuj5NdamZD_hb5wSK_8n-GYX67SgQ',
    color: 'red',
  },
];

export const PodcastModal = () => {
  return (
    <div id='podcast-modal' className='modal'>
      <div className='modal-content'>
        <h4>Monday Night Lights Podcast</h4>
        <p>A podcast about MNL Hockey League. 70 skaters, 7 goalies, and 1 dream.</p>

        <div className='row'>
          <div className='col m12 l6'>
            <img
              src={ImgPodcast}
              alt='A podcast about MNL Hockey League. 70 skaters, 7 goalies, and 1 dream.'
              className='center responsive-img'
            />
          </div>
          <div className='col m12 l6'>
            <div className='podcast-list'>
              {podcastLink.map(({ name, href, color }) => (
                <a href={href} className={`waves-effect btn-flat waves-${color}`} key={name}>
                  Listen on {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
