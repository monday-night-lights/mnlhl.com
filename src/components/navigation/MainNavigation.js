import React from "react";

import ImgLogo from "static/img/mnlhl-logo.png";

export const MainNavigation = () => {
  return (
    <nav className="grey darken-4">
      <a href="#" data-target="slide-out" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
      <div className="nav-wrapper wrapper">
        <a href="#" className="brand-logo">
          <img src={ImgLogo} className="brand-logo hoverable" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="dropdown-trigger hoverable" href="#!" data-target="stats-dropdown">
              <i className="material-icons left">format_list_numbered</i>
              Stats
              <i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <li>
            <a href="#calendar-modal" className="modal-trigger hoverable">
              <i className="material-icons left">event</i>Game Times
            </a>
          </li>
          <li>
            <a href="http://shop.mnlhl.com" className="hoverable">
              <i className="material-icons left">shopping_cart</i>Shop
            </a>
          </li>
          <li>
            <a href="http://rules.mnlhl.com" className="hoverable">
              <i className="material-icons left">book</i>Rules
            </a>
          </li>
          <li>
            <a href="http://news.mnlhl.com" className="hoverable">
              <i className="material-icons left">ballot</i>News
            </a>
          </li>
          <li>
            <a href="https://mnlhl.slack.com" className="hoverable">
              <i className="material-icons left">message</i>Chat
            </a>
          </li>
          <li>
            <a href="http://photos.mnlhl.com" className="hoverable">
              <i className="material-icons left">photo_library</i>Photos
            </a>
          </li>
          <li>
            <a href="#podcast-modal" className="modal-trigger hoverable">
              <i className="material-icons left">headset</i>Podcast
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
