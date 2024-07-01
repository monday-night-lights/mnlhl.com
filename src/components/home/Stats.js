import React, { useState, useEffect } from 'react';
import { constants } from '../../services/constants';

export const Stats = ({ stat = "Goals" }) => {

  let count = 1;
  let path = "stats";
  let sortingFunction = (a, b) => b[stat] - a[stat];

  const [data, setData] = useState(null);

  if (stat == 'GAA') {
    path = "goalieStats";
    sortingFunction = (a, b) => a["GAA ▼"] - b["GAA ▼"];
  }

  useEffect(() => {
    fetch(constants.sheetsAPI + '?path=' + path, {
      redirect: "follow",
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        let temp = json.data.filter((player) => player.Name).sort(sortingFunction);
        setData(temp.slice(0, 5));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={'stat-list col s12 l3 card-panel ' + (data ? 'loaded' : '')} >
      <h3>{stat} Leaders</h3>
      {data ?
        <table className={'centered highlight scale-transition ' + (data ? '' : 'scale-out')}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>{stat}</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((player) =>
                <tr className="player" key={player.Name}>
                  <td>{count++}</td>
                  <td>{player.Name}</td>
                  <td>{(
                    () => {
                      if (stat == "Goals") {
                        return (player.Goals);
                      }
                      else if (stat == "Assists") {
                        return (player.Assists);
                      }
                      else if (stat == "GAA") {
                        return (Number(player["GAA ▼"]).toFixed(2));
                      }
                    }
                  )()}
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
        :
        <div className={'preloader-wrapper big active scale-transition ' + (data ? 'scaled-out' : '')} >
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

          <div className="spinner-layer spinner-red">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

          <div className="spinner-layer spinner-yellow">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

          <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
