import React from "react";

export const Cards = () => {
  return (
    <div className="wrapper" style={{ marginTop: "15px" }}>
      <div className="card-row row">
        <div className="card grey lighten-4 col l3 s11 hoverable">
          <div className="card-content">
            <span className="card-title">Stats and Schedule</span>
            <p className="flow-text">Statistics, schedule, and scores can be found here</p>
          </div>
          <div className="card-action">
            <a href="http://stats.mnlhl.com" className="flow-text">
              Click Here
            </a>
          </div>
        </div>
        <div className="card grey lighten-4 col l3 s11 hoverable">
          <div className="card-content">
            <span className="card-title">Monday Night Lights Hockey Network</span>
            <p className="flow-text">
              Your best source for Monday Night Lights news, rumors, analysis, stats and recaps,
              written by players, for players.
            </p>
          </div>
          <div className="card-action">
            <a href="http://news.mnlhl.com" className="flow-text">
              Read Up!
            </a>
          </div>
        </div>
        <div className="card grey lighten-4 col l3 s11 hoverable">
          <div className="card-content">
            <span className="card-title">MNL Gear Shop</span>
            <p className="flow-text">Your one-stop spot for all your Monday Night Lights gear!</p>
          </div>
          <div className="card-action">
            <a href="http://shop.mnlhl.com" className="flow-text">
              Shop Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
