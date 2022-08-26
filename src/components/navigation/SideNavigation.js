import React from "react";

import ImgLogo from "static/img/mnlhl-logo.png";

export const SideNavigation = () => {
  return (
    <ul id="slide-out" className="sidenav flow-text">
      <li className="logo">
        <a href="#" className="brand-logo">
          <img src={ImgLogo} className="brand-logo responsive-image" />
        </a>
      </li>
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="bold">
            <a className="collapsible-header">
              <i className="material-icons left">format_list_numbered</i>
              Stats
              <i className="material-icons bigger right">arrow_drop_down</i>
            </a>
            <div className="collapsible-body">
              <ul>
                <li className="bold">
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1przDuucyDZlJr9__jRANXNTpbKCL2wsSMs1v0HlRFII/edit#gid=1935094419"
                  >
                    <i className="material-icons light-green-text darken-1 small left">
                      local_florist
                    </i>
                    2022 Spring
                  </a>
                </li>
                <li className="divider"></li>
                <li>
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1obVvplKsLh5RgOwhJQeYiuu6dpMAbMUJqzIvOuFqNDM/edit#gid=679131733"
                  >
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2021-2022 Fall/Winter
                  </a>
                </li>

                <li>
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1ict6PYEcbhqNHohoPg3qxdLhy9cv0mEsYvuFMDe-PnY/edit#gid=679131733/"
                  >
                    <i className="material-icons light-green-text darken-1 small left">
                      local_florist
                    </i>
                    2021 Spring
                  </a>
                </li>
                <li>
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1txfiFqoekWQFO1yJDyV1sgTzereo_cNBm-V6OIJ0Nww"
                  >
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2020-2021 Fall/Winter
                  </a>
                </li>
                <li>
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1A6nfa8iL5cmBVSXDXL3uf-Va0i_EvJdmZuTa_32v6l0/edit#gid=1271361965"
                  >
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2019-2020 Fall/Winter
                  </a>
                </li>
                <li>
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/11HKFGPgWCA3g8auTNNSqVtyKk6WBuV7UeRYarVTBHvk/edit?usp=drive_web&ouid=111468611990100978539"
                  >
                    <i className="material-icons light-green-text darken-1 small left">
                      local_florist
                    </i>
                    2019 Spring
                  </a>
                </li>
                <li className="bold">
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1MWKxBdUF8HegOtyjkznthRbGB42F2xrUD_Iryzv7ShQ/edit?usp=drive_web&ouid=111468611990100978539"
                  >
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2018-2019 Fall/Winter
                  </a>
                </li>
                <li className="bold">
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1WClOUoLELrxeNaM1RsbCmuuvXLOymLpHrcTpEqiKTJw/edit?usp=drive_web&ouid=111468611990100978539"
                  >
                    <i className="material-icons light-green-text darken-1 small left">
                      local_florist
                    </i>
                    2018 Spring
                  </a>
                </li>
                <li className="bold">
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1RIyVc1_oHFueUpZbnrFtMGXraZfEh-bEkbz24GHr9OU/edit?usp=drive_web&ouid=111468611990100978539"
                  >
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2017-2018 Fall/Winter
                  </a>
                </li>
                <li className="bold">
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1Lo65fOUp1ZTWTYhYUeZYf6CivhsDegq9-4z4xgZbBO8/edit?usp=drive_web&ouid=111468611990100978539"
                  >
                    <i className="material-icons light-green-text darken-1 small left">
                      local_florist
                    </i>
                    2017 Spring
                  </a>
                </li>
                <li className="bold">
                  <a
                    className="black-text"
                    target="_blank"
                    href="https://docs.google.com/spreadsheets/d/1JcjwMdsjzPI-WesV6l4O0eThWGVUAvN7-Z7lTrUG_iY/edit?usp=drive_web&ouid=111468611990100978539"
                  >
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2016-2017 Fall/Winter
                  </a>
                </li>
                <li className="divider"></li>
              </ul>
            </div>
          </li>
          <li className="bold">
            <a href="#calendar-modal" className="modal-trigger">
              <i className="material-icons left">event</i>
              Game Times
            </a>
          </li>
          <li className="bold">
            <a href="http://shop.mnlhl.com">
              <i className="material-icons left">shopping_cart</i>
              Shop
            </a>
          </li>
          <li className="bold">
            <a href="http://rules.mnlhl.com">
              <i className="material-icons left">book</i>
              Rules
            </a>
          </li>
          <li className="bold">
            <a href="http://news.mnlhl.com">
              <i className="material-icons left">ballot</i>
              News
            </a>
          </li>
          <li className="bold">
            <a href="http://mnlhl.slack.com">
              <i className="material-icons left">message</i>
              Chat
            </a>
          </li>
          <li className="bold">
            <a href="http://photos.mnlhl.com">
              <i className="material-icons left">photo_library</i>
              Photos
            </a>
          </li>
          <li className="bold">
            <a href="#podcast-modal" className="modal-trigger">
              <i className="material-icons left">headset</i>
              Podcast
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};
