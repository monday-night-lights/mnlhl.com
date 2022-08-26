import React from "react";

import ImgPodcast from "static/img/podcast.png";

export const PodcastModal = () => {
  return (
    <div id="podcast-modal" className="modal">
      <div className="modal-content">
        <h4>Monday Night Lights Podcast</h4>
        <p>A podcast about MNL Hockey League. 70 skaters, 7 goalies, and 1 dream.</p>
        <div className="row">
          <div className="col m12 l6">
            <img
              src={ImgPodcast}
              alt="A podcast about MNL Hockey League. 70 skaters, 7 goalies, and 1 dream."
              className="center responsive-img"
            />
          </div>
          <div className="col m12 l6">
            <div className="podcast-list">
              <a
                href="http://feeds.feedburner.com/blogspot/mnlpodcast"
                className="waves-effect waves-black btn-flat"
              >
                Listen on RSS Feed
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/mnl-podcast/id1467355332"
                className="waves-effect waves-light btn-flat"
              >
                Listen on Apple Podcasts
              </a>
              <a
                href="https://play.google.com/music/m/I75vvrmsmatnlev2nbjh57thdim?t=MNL_Podcast"
                className="waves-effect waves-orange btn-flat"
              >
                Listen on Google Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/3KgE6mPRGUWnchg9k4rMcZ"
                className="waves-effect waves-green btn-flat"
              >
                Listen on Spotify
              </a>
              <a
                href="https://www.stitcher.com/s?fid=421604&refid=stpr"
                className="waves-effect waves-yellow btn-flat"
              >
                Listen on Stitcher
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLEpruuj5NdamZD_hb5wSK_8n-GYX67SgQ"
                className="waves-effect waves-red btn-flat"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
