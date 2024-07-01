import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { constants } from '../../services/constants';

export const Schedule = () => {
  const [data, setData] = useState(null);

  let start = new Date();
  start.setDate(start.getDate() - 14);
  let end = new Date();
  end.setDate(end.getDate() + 14);

  useEffect(() => {
    fetch(constants.sheetsAPI + '?path=schedule', {
      redirect: "follow",
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        setData(json.data.filter((game) => {
          return Date.parse(game.Date) >= start &&
            Date.parse(game.Date) <= end;
        }));
      }
      )
      .catch(error => console.error(error));
  }, []);

  return (
    data ?
      <div className={'schedule-list ' + (data ? 'loaded' : '')}>
        {
          data.map((game) =>
            <div className="game" key={game.Date + game.Time} hidden={game["Home Team"] == "" || game["Away Team"] == ""}>
              <pre className="week">{game["Week"]}</pre>
              <div className="team-line">
                <span className="team-name">
                  {game["Home Team"]}
                </span>
                <span>
                  {game["Home Score"] ? game["Home Score"] : format(game["Date"], "M/d")}
                </span>
              </div>
              <div className="team-line">
                <span className="team-name">
                  {game["Away Team"]}
                </span>
                <span>
                  {game["Away Score"] ? game["Away Score"] : format(game["Time"], "h:mmaaa")}
                </span>
              </div>
            </div>
          )
        }
      </div>
      :
      <div className="progress schedule" >
        <div className="indeterminate"></div>
      </div>
  );
};
