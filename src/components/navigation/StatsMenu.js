import React from 'react';

const SEASON_TYPES = {
  SPRING: 'Spring',
  FALL: 'Fall/Winter',
};
const SEASON_STYLES = {
  [SEASON_TYPES.SPRING]: 'light-green-text darken-1',
  [SEASON_TYPES.FALL]: 'blue-text lighten-1',
};
const SEASON_ICONS = {
  [SEASON_TYPES.SPRING]: 'local_florist',
  [SEASON_TYPES.FALL]: 'ac_unit',
};

export const seasonStatsLinks = [
  {
    year: 2023,
    type: SEASON_TYPES.SPRING,
    href: 'https://docs.google.com/spreadsheets/d/1OKPb16bHo_z2yvBVI7ugK_RHrlnlNe1AQAkXBJiib2o',
  },
  {
    year: 2022,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1GZjuqc1D36163y61pbxPCvVqDa-BqCzmELmiLvdARpY',
  },
  {
    year: 2022,
    type: SEASON_TYPES.SPRING,
    href: 'https://docs.google.com/spreadsheets/d/1przDuucyDZlJr9__jRANXNTpbKCL2wsSMs1v0HlRFII',
  },
  {
    year: 2021,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1obVvplKsLh5RgOwhJQeYiuu6dpMAbMUJqzIvOuFqNDM',
  },
  {
    year: 2021,
    type: SEASON_TYPES.SPRING,
    href: 'https://docs.google.com/spreadsheets/d/1ict6PYEcbhqNHohoPg3qxdLhy9cv0mEsYvuFMDe-PnY',
  },
  {
    year: 2020,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1txfiFqoekWQFO1yJDyV1sgTzereo_cNBm-V6OIJ0Nww',
  },
  {
    year: 2019,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1A6nfa8iL5cmBVSXDXL3uf-Va0i_EvJdmZuTa_32v6l0',
  },
  {
    year: 2019,
    type: SEASON_TYPES.SPRING,
    href: 'https://docs.google.com/spreadsheets/d/11HKFGPgWCA3g8auTNNSqVtyKk6WBuV7UeRYarVTBHvk',
  },
  {
    year: 2018,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1MWKxBdUF8HegOtyjkznthRbGB42F2xrUD_Iryzv7ShQ',
  },
  {
    year: 2018,
    type: SEASON_TYPES.SPRING,
    href: 'https://docs.google.com/spreadsheets/d/1WClOUoLELrxeNaM1RsbCmuuvXLOymLpHrcTpEqiKTJw',
  },
  {
    year: 2017,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1RIyVc1_oHFueUpZbnrFtMGXraZfEh-bEkbz24GHr9OU',
  },
  {
    year: 2017,
    type: SEASON_TYPES.SPRING,
    href: 'https://docs.google.com/spreadsheets/d/1Lo65fOUp1ZTWTYhYUeZYf6CivhsDegq9-4z4xgZbBO8',
  },
  {
    year: 2016,
    type: SEASON_TYPES.FALL,
    href: 'https://docs.google.com/spreadsheets/d/1JcjwMdsjzPI-WesV6l4O0eThWGVUAvN7-Z7lTrUG_iY',
  },
];

export const StatsMenu = ({ ...props }) => {
  return (
    <ul {...props}>
      {seasonStatsLinks.map(({ year, type, href }, index) => (
        <React.Fragment key={index}>
          <li>
            <a className='black-text' target='_blank' href={href}>
              <i className={`material-icons small left ${SEASON_STYLES[type]}`}>
                {SEASON_ICONS[type]}
              </i>
              {year}
              {type === SEASON_TYPES.FALL ? `-${year + 1}` : null} {type}
            </a>
          </li>
          {index ? null : <li className='divider'></li>}
        </React.Fragment>
      ))}
    </ul>
  );
};
