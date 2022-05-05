import React from 'react';

import ImgLogo from './img/mnlhl-logo.png';
import ImgPodcast from './img/podcast.png';

const Home = () => {
  return (
<div>
    <header>
        <ul id="stats-dropdown" className="dropdown-content">
            <li className="bold">
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1przDuucyDZlJr9__jRANXNTpbKCL2wsSMs1v0HlRFII/edit#gid=1935094419">
                    <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                    2022 Spring
                </a>
            </li>
            <li className="divider"></li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1obVvplKsLh5RgOwhJQeYiuu6dpMAbMUJqzIvOuFqNDM/edit#gid=679131733">
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2021-2022 Fall/Winter
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1ict6PYEcbhqNHohoPg3qxdLhy9cv0mEsYvuFMDe-PnY/edit#gid=679131733/">
                    <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                    2021 Spring
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1txfiFqoekWQFO1yJDyV1sgTzereo_cNBm-V6OIJ0Nww">
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2020-2021 Fall/Winter
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1A6nfa8iL5cmBVSXDXL3uf-Va0i_EvJdmZuTa_32v6l0/edit#gid=1271361965">
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2019-2020 Fall/Winter
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/11HKFGPgWCA3g8auTNNSqVtyKk6WBuV7UeRYarVTBHvk/edit?usp=drive_web&ouid=111468611990100978539">
                    <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                    2019 Spring
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1MWKxBdUF8HegOtyjkznthRbGB42F2xrUD_Iryzv7ShQ/edit?usp=drive_web&ouid=111468611990100978539">
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2018-2019 Fall/Winter
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1WClOUoLELrxeNaM1RsbCmuuvXLOymLpHrcTpEqiKTJw/edit?usp=drive_web&ouid=111468611990100978539">
                    <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                    2018 Spring
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1RIyVc1_oHFueUpZbnrFtMGXraZfEh-bEkbz24GHr9OU/edit?usp=drive_web&ouid=111468611990100978539">
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2017-2018 Fall/Winter
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1Lo65fOUp1ZTWTYhYUeZYf6CivhsDegq9-4z4xgZbBO8/edit?usp=drive_web&ouid=111468611990100978539">
                    <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                    2017 Spring
                </a>
            </li>
            <li>
                <a
                className="black-text"
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1JcjwMdsjzPI-WesV6l4O0eThWGVUAvN7-Z7lTrUG_iY/edit?usp=drive_web&ouid=111468611990100978539">
                    <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                    2016-2017 Fall/Winter
                </a>
            </li>
        </ul>
        <nav className="grey darken-4">
            <a href="#" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
            </a>
            <div className="nav-wrapper wrapper">
                <a href="#" className="brand-logo"><img src={ImgLogo} className="brand-logo hoverable" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                    <li>
                        <a className="dropdown-trigger hoverable" href="#!" data-target="stats-dropdown">
                            <i className="material-icons left">format_list_numbered</i>
                            Stats
                            <i className="material-icons right">arrow_drop_down</i></a>
                    </li>
                    <li>
                        <a href="#calendar-modal" className="modal-trigger hoverable"><i
                            className="material-icons left">event</i>Game Times</a>
                    </li>
                    <li>
                        <a href="http://shop.mnlhl.com" className="hoverable"><i
                            className="material-icons left">shopping_cart</i>Shop</a>
                    </li>
                    <li>
                        <a href="http://rules.mnlhl.com" className="hoverable"><i
                            className="material-icons left">book</i>Rules</a>
                    </li>
                    <li>
                        <a href="http://news.mnlhl.com" className="hoverable"><i
                            className="material-icons left">ballot</i>News</a>
                    </li>
                    <li>
                        <a href="https://mnlhl.slack.com" className="hoverable"><i
                            className="material-icons left">message</i>Chat</a>
                    </li>
                    <li>
                        <a href="http://photos.mnlhl.com" className="hoverable"><i
                            className="material-icons left">photo_library</i>Photos</a>
                    </li>
                    <li>
                        <a href="#podcast-modal" className="modal-trigger hoverable"><i
                            className="material-icons left">headset</i>Podcast</a>
                    </li>
                </ul>
            </div>
        </nav>
        <ul id="slide-out" className="sidenav flow-text">
            <li className="logo">
                <a href="#" className="brand-logo">
                    {/* <img src="img/mnlhl-logo.png" className="brand-logo responsive-img" /> */}
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
                                    href="https://docs.google.com/spreadsheets/d/1przDuucyDZlJr9__jRANXNTpbKCL2wsSMs1v0HlRFII/edit#gid=1935094419">
                                        <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                                        2022 Spring
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1obVvplKsLh5RgOwhJQeYiuu6dpMAbMUJqzIvOuFqNDM/edit#gid=679131733">
                                        <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                                        2021-2022 Fall/Winter
                                    </a>
                                </li>

                                <li>
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1ict6PYEcbhqNHohoPg3qxdLhy9cv0mEsYvuFMDe-PnY/edit#gid=679131733/">
                                        <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                                        2021 Spring
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1txfiFqoekWQFO1yJDyV1sgTzereo_cNBm-V6OIJ0Nww">
                                        <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                                        2020-2021 Fall/Winter
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1A6nfa8iL5cmBVSXDXL3uf-Va0i_EvJdmZuTa_32v6l0/edit#gid=1271361965">
                                        <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                                        2019-2020 Fall/Winter
                                    </a>
                                </li>
                                <li>
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/11HKFGPgWCA3g8auTNNSqVtyKk6WBuV7UeRYarVTBHvk/edit?usp=drive_web&ouid=111468611990100978539">
                                        <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                                        2019 Spring
                                    </a>
                                </li>
                                <li className="bold">
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1MWKxBdUF8HegOtyjkznthRbGB42F2xrUD_Iryzv7ShQ/edit?usp=drive_web&ouid=111468611990100978539">
                                        <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                                        2018-2019 Fall/Winter
                                    </a>
                                </li>
                                <li className="bold">
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1WClOUoLELrxeNaM1RsbCmuuvXLOymLpHrcTpEqiKTJw/edit?usp=drive_web&ouid=111468611990100978539">
                                        <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                                        2018 Spring
                                    </a>
                                </li>
                                <li className="bold">
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1RIyVc1_oHFueUpZbnrFtMGXraZfEh-bEkbz24GHr9OU/edit?usp=drive_web&ouid=111468611990100978539">
                                        <i className="material-icons blue-text lighten-1 small left">ac_unit</i>
                                        2017-2018 Fall/Winter
                                    </a>
                                </li>
                                <li className="bold">
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1Lo65fOUp1ZTWTYhYUeZYf6CivhsDegq9-4z4xgZbBO8/edit?usp=drive_web&ouid=111468611990100978539">
                                        <i className="material-icons light-green-text darken-1 small left">local_florist</i>
                                        2017 Spring
                                    </a>
                                </li>
                                <li className="bold">
                                    <a
                                    className="black-text"
                                    target="_blank"
                                    href="https://docs.google.com/spreadsheets/d/1JcjwMdsjzPI-WesV6l4O0eThWGVUAvN7-Z7lTrUG_iY/edit?usp=drive_web&ouid=111468611990100978539">
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
                    <li className="bold"><a href="#podcast-modal" className="modal-trigger">
                            <i className="material-icons left">headset</i>
                            Podcast
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </header>
    <main>
        <div className="jumbo"></div>
        <div className="wrapper" style={{marginTop: '15px'}}>
            <div className="card-row row">
                <div className="card grey lighten-4 col l3 s11 hoverable">
                    <div className="card-content">
                        <span className="card-title">Stats and Schedule</span>
                        <p className="flow-text">Statistics, schedule, and scores can be found here</p>
                    </div>
                    <div className="card-action">
                        <a href="http://stats.mnlhl.com" className="flow-text">Click Here</a>
                    </div>
                </div>
                <div className="card grey lighten-4 col l3 s11 hoverable">
                    <div className="card-content">
                        <span className="card-title">Monday Night Lights Hockey Network</span>
                        <p className="flow-text">Your best source for Monday Night Lights news, rumors, analysis, stats and
                            recaps, written by players, for players.</p>
                    </div>
                    <div className="card-action">
                        <a href="http://news.mnlhl.com" className="flow-text">Read Up!</a>
                    </div>
                </div>
                <div className="card grey lighten-4 col l3 s11 hoverable">
                    <div className="card-content">
                        <span className="card-title">MNL Gear Shop</span>
                        <p className="flow-text">Your one-stop spot for all your Monday Night Lights gear!</p>
                    </div>
                    <div className="card-action">
                        <a href="http://shop.mnlhl.com" className="flow-text">Shop Now!</a>
                    </div>
                </div>
            </div>
        </div>
        <footer className="page-footer grey darken-4">
            <div className="wrapper">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text flow-text">Monday Night Lights Hockey League</h5>
                        <p className="grey-text text-lighten-1 flow-text">Located in Hazel Park, Michigan, Monday Night
                            Lights is the most prestigious men's hockey league in Southeastern Michigan</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text flow-text">Social</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3 flow-text"
                                href="https://twitter.com/mnl_hockey">Twitter</a></li>
                            <li><a className="grey-text text-lighten-3 flow-text"
                                href="https://www.instagram.com/mnl_hockey/">Instagram</a></li>
                            <li><a className="grey-text text-lighten-3 flow-text"
                                href="https://www.youtube.com/channel/UCkSRdje5r7dCKeuZaeitlXw">Youtube</a></li>
                            <li><a className="grey-text text-lighten-3 flow-text"
                                href="https://www.twitch.tv/mnlhl">Twitch</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright black">
                <div className="wrapper flow-text">
                    &copy; {new Date().getFullYear()} Monday Night Lights Hockey League
                    <a href="https://github.com/monday-night-lights/mnlhl.com">
                        <span className="material-icons">code</span>
                    </a>
                </div>
            </div>
        </footer>

        <div id="calendar-modal" className="modal">
            <div className="modal-content" style={{textAlign: 'center'}}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dDYzbHI2cDN2ZTg0Z29jbjc5amphZ2xnN29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showNav=1&amp;showTitle=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=0&amp;showTz=1&amp;mode=AGENDA"
                        style={{borderWidth: 0}} width="600" height="600" frameBorder="0" scrolling="no"></iframe>
            </div>
        </div>
        <div id="podcast-modal" className="modal">
            <div className="modal-content">
                <h4>Monday Night Lights Podcast</h4>
                <p>A podcast about MNL Hockey League. 70 skaters, 7 goalies, and 1 dream.</p>
                <div className="row">
                    <div className="col m12 l6">
                        <img src={ImgPodcast}
                            alt="A podcast about MNL Hockey League. 70 skaters, 7 goalies, and 1 dream."
                            className="center responsive-img" />
                    </div>
                    <div className="col m12 l6">
                        <div className="podcast-list">
                            <a href="http://feeds.feedburner.com/blogspot/mnlpodcast"
                            className="waves-effect waves-black btn-flat">Listen on RSS Feed</a>
                            <a href="https://podcasts.apple.com/us/podcast/mnl-podcast/id1467355332"
                            className="waves-effect waves-light btn-flat">Listen on Apple
                                Podcasts</a>
                            <a href="https://play.google.com/music/m/I75vvrmsmatnlev2nbjh57thdim?t=MNL_Podcast"
                            className="waves-effect waves-orange btn-flat">Listen on Google Podcasts</a>
                            <a href="https://open.spotify.com/show/3KgE6mPRGUWnchg9k4rMcZ"
                            className="waves-effect waves-green btn-flat">Listen on Spotify</a>
                            <a href="https://www.stitcher.com/s?fid=421604&refid=stpr"
                            className="waves-effect waves-yellow btn-flat">Listen on Stitcher</a>
                            <a href="https://www.youtube.com/playlist?list=PLEpruuj5NdamZD_hb5wSK_8n-GYX67SgQ"
                            className="waves-effect waves-red btn-flat">Watch on YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
  )
}

export default Home;
